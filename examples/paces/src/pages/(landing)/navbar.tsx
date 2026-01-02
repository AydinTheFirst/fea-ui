import { Navbar } from "@fea-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Link from "~/components/link";
import LocaleSwitcher from "~/components/locale-switcher";
import ThemeSwitcher from "~/components/theme-switcher";

const items = [
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "CFP", to: "/cfp" },
	{ label: "Committee", to: "/committee" },
	{ label: "Contact", to: "/contact" },
];

export default function LandingNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const { pathname } = useLocation();

	// Close the navbar menu on route change
	useEffect(() => {
		console.log("Pathname changed, closing navbar menu", pathname);
		setIsOpen(false);
	}, [pathname]);

	return (
		<Navbar isOpen={isOpen} onOpenChange={setIsOpen}>
			<Navbar.Container>
				<Navbar.Content>
					<Navbar.Toggle />
					<Link className="font-bold" to="/">
						<img
							alt="PACES Logo"
							className="mr-2 inline-block size-8"
							src="/paces.jpg"
						/>
						PACES
					</Link>
				</Navbar.Content>
				<Navbar.Content className="hidden justify-center md:flex">
					<Navbar.List>
						{items.map((item) => (
							<Navbar.ListItem key={item.to}>
								<Link to={item.to}>{item.label}</Link>
							</Navbar.ListItem>
						))}
					</Navbar.List>
				</Navbar.Content>
				<Navbar.Content className="justify-end">
					<ThemeSwitcher />
					<LocaleSwitcher />
				</Navbar.Content>
				<Navbar.Menu header="PACES">
					{items.map((item) => (
						<Navbar.MenuItem key={item.to}>
							<Link to={item.to}>{item.label}</Link>
						</Navbar.MenuItem>
					))}
				</Navbar.Menu>
			</Navbar.Container>
		</Navbar>
	);
}
