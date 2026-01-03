import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router";
import type { Route } from "./+types/layout";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "PACES" },
		{ content: "PACES Conference Website", name: "description" },
	];
};

export default function RootLayout() {
	return (
		<ThemeProvider attribute="class">
			<Outlet />
		</ThemeProvider>
	);
}
