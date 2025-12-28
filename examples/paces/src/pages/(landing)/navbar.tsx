import { Navbar } from "@fea-ui/react";
import Link from "~/components/link";
import LocaleSwitcher from "~/components/locale-switcher";
import ThemeSwitcher from "~/components/theme-switcher";

const items = [
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

export default function LandingNavbar() {
	return (
		<Navbar>
			<Navbar.Container>
				<Navbar.Content>
					<Navbar.Toggle />
					<Link className="font-bold text-3xl" to="/">
						PACES
					</Link>
				</Navbar.Content>
				<Navbar.Content className="justify-center">
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
			</Navbar.Container>
		</Navbar>
	);
}
