import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router";

export default function RootLayout() {
	return (
		<ThemeProvider attribute="class">
			<Outlet />
		</ThemeProvider>
	);
}
