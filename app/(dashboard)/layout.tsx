import React from "react";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        {children}
      </main>
    </>
  );
}
