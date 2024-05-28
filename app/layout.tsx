import type {ReactNode} from "react";
import {StoreProvider} from "./StoreProvider";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import Script from "next/script";

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({children}: Props) {
    return (
        <StoreProvider>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="/assets/styles/bootstrap.min.css"/>
                <link rel="stylesheet" href="/assets/styles/chartist.css"/>
                <link rel="stylesheet" href="/assets/styles/feather.css"/>
                <link rel="stylesheet" href="/assets/styles/style.css"/>
                <link rel="stylesheet" href="/assets/styles/waves.min.css"/>
                <link rel="stylesheet" href="/assets/styles/widget.css"/>
                <title>Qualibox Admin</title>
            </head>
            <body suppressHydrationWarning={true}>
            <div
                id="pcoded" className="pcoded iscollapsed" nav-type="st2" theme-layout="vertical"
                vertical-placement="left"
                vertical-layout="wide" pcoded-device-type="desktop" vertical-nav-type="expanded"
                vertical-effect="shrink"
                vnavigation-view="view1" fream-type="theme1" layout-type="light"
            >
              <div className="pcoded-overlay-box"></div>
              <div className="pcoded-container navbar-wrapper">
                <Navbar/>
                <div className="pcoded-main-container" style={{marginTop: 78}}>
                  <div className="pcoded-wrapper">
                    <Sidebar />
                  </div>
                </div>

              </div>
            </div>


            <Script
                defer
                src="/assets/scripts/jquery.min(1).js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/jquery-ui.min.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/popper.min(1).js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/bootstrap.min.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/waves.min.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/jquery.slimscroll.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/jquery.flot.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/jquery.flot.categories.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/curvedLines.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/jquery.flot.tooltip.min.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/pcoded.min.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/vertical-layout.min.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/custom-dashboard.min.js"
                strategy="beforeInteractive"
            />
            <Script
                defer
                src="/assets/scripts/script.min.js"
                strategy="beforeInteractive"
            />
            </body>
            </html>
        </StoreProvider>
    );
}
