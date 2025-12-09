// src/components/layout/Layout.tsx
import React from "react";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-layout__main">{children}</main>
      <footer className="app-layout__footer">
        © {new Date().getFullYear()} Skogens Hovar
      </footer>
    </div>
  );
};
