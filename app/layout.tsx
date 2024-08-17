import React, { PropsWithChildren } from "react";
import { StoreProvider } from "./StoreProvider";
import Script from "next/script";

export default function RootLayout(
  props: PropsWithChildren,
): React.JSX.Element {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link
            href="/admin/assets/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="/admin/assets/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link
            href="/admin/assets/vendor/boxicons/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="/admin/assets/vendor/remixicon/remixicon.css"
            rel="stylesheet"
          />
          <link href="/admin/assets/css/style.css" rel="stylesheet" />
          <link href="/admin/assets/css/pagination.css" rel="stylesheet" />

          <title>Admin</title>
        </head>
        <body suppressHydrationWarning={true}>
          {props.children}
          <Script
            src="/admin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
            defer
            strategy="beforeInteractive"
          />
          <Script
            src="/admin/assets/vendor/tinymce/tinymce.min.js"
            defer
            strategy="beforeInteractive"
          />
          <Script
            src="/admin/assets/js/main.js"
            defer
            strategy="beforeInteractive"
          />
        </body>
      </html>
    </StoreProvider>
  );
}
