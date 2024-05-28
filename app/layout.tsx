import type {ReactNode} from "react";
import {StoreProvider} from "./StoreProvider";
import Script from "next/script";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({children}: Props) {
    return (
        <StoreProvider>
            <html lang="en">
            <head>
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link
                    href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
                    rel="stylesheet"
                />
                <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
                <link href="/assets/vendor/quill/quill.snow.css" rel="stylesheet"/>
                <link href="/assets/vendor/quill/quill.bubble.css" rel="stylesheet"/>
                <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
                <link href="/assets/vendor/simple-datatables/style.css" rel="stylesheet"/>
                <link href="/assets/css/style.css" rel="stylesheet"/>

                <title>Qualibox Admin</title>
            </head>
            <body suppressHydrationWarning={true}>
            <Header />
            <Sidebar />

            <Script src="/assets/vendor/apexcharts/apexcharts.min.js" defer
                    strategy="beforeInteractive"></Script>
            <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer
                    strategy="beforeInteractive"></Script>
            <Script src="/assets/vendor/chart.js/chart.umd.js" defer
                    strategy="beforeInteractive"></Script>
            <Script src="/assets/vendor/echarts/echarts.min.js" defer
                    strategy="beforeInteractive"></Script>
            <Script src="/assets/vendor/quill/quill.js" defer
                    strategy="beforeInteractive"></Script>
            <Script src="/assets/vendor/simple-datatables/simple-datatables.js" defer
                    strategy="beforeInteractive"></Script>
            <Script src="/assets/vendor/tinymce/tinymce.min.js" defer
                    strategy="beforeInteractive"></Script>
            <Script src="/assets/vendor/php-email-form/validate.js" defer
                    strategy="beforeInteractive"></Script>

            <Script src="/assets/js/main.js" defer
                    strategy="beforeInteractive"></Script>
            </body>
            </html>
        </StoreProvider>
    );
}
