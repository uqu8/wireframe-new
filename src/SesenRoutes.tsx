import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import StepesLayout from "./sesen/Layout/SesenLayout";
import routeConfig from "./sesen/SesenRoutes";

// 自动扫描 page 下所有 tsx/jsx
const pages = {
  ...import.meta.glob("./sesen/page/*.tsx"),
  ...import.meta.glob("./sesen/page/*.jsx"),
};

const routes = routeConfig
  .map(({ name, path }) => {
    const importer =
      pages[`./sesen/page/${name}.tsx`] ??
      pages[`./sesen/page/${name}.jsx`];

    if (!importer) {
      console.warn(`找不到页面：${name}`);
      return null;
    }

    return {
      path,
      Component: lazy(importer as any),
    };
  })
  .filter(Boolean);

export default function StepesRoutes() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading...
        </div>
      }
    >
      <Routes>
        <Route element={<StepesLayout />}>
          {routes.map((route: any) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.Component />}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}