import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderLog } from "./HeaderLog";
export const LayoutLog = () => {
  return (
    <main>
      <HeaderLog />
      <Outlet />
    </main>
  );
};
