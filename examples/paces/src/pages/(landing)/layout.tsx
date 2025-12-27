import { Outlet } from "react-router";

import Footer from "./footer";
import LandingNavbar from "./navbar";

export default function LandingLayout() {
	return (
		<div className="flex min-h-screen flex-col">
			<LandingNavbar />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
