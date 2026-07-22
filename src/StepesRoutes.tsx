import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import StepesLayout from "./stepes/Layout/StepesLayout";
import routeConfig from "./stepes/routes";

// 自动扫描 page 下所有 tsx/jsx
const pages = {
  ...import.meta.glob("./stepes/page/*.tsx"),
  ...import.meta.glob("./stepes/page/*.jsx"),
};

const routes = routeConfig
  .map(({ name, path }) => {
    const importer =
      pages[`./stepes/page/${name}.tsx`] ??
      pages[`./stepes/page/${name}.jsx`];

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