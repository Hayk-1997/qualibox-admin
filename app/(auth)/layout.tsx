import React from "react";

export default function AuthPagesLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <section>{children}</section>;
}
