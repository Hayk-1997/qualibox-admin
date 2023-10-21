import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<Head>
					{/* <link rel="stylesheet" href="/assets/styles/all.min.css" /> */}
					{/* <link rel="stylesheet" href="/assets/styles/adminlte.min.css" /> */}
				</Head>
				{/* className="sidebar-mini" */}
				<body>
					<Main />
					<NextScript />
				</body>
				{/* <script src="/assets/scripts/fontawesome.js" crossOrigin="anonymous" /> */}
				{/* <script src="/assets/scripts/jquery.min.js" lang="JavaScript" /> */}
				{/* <script
					src="/assets/scripts/bootstrap.bundle.min.js"
					lang="JavaScript"
				/> */}
				{/* <script src="/assets/scripts/adminlte.js" lang="JavaScript" /> */}
				{/*<script src="/assets/scripts/demo.js" lang="JavaScript" />*/}
			</Html>
		);
	}
}
