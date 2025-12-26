import { Outlet } from "react-router";

import Footer from "./footer";
import LandingNavbar from "./navbar";

export default function LandingLayout() {
	return (
		<div className="flex flex-col min-h-screen">
			<LandingNavbar />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
