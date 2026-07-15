// StepesLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./stepes_footer_wireframe"; // 假设你的Footer组件在这里

export default function StepesLayout() {
  return (
    <div className="stepes-layout">
      <main className="stepes-content">
        <Outlet /> {/* 这里会渲染子路由 */}
      </main>
      <Footer />
    </div>
  );
}