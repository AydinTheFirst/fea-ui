import { Container, List, Separator } from "@fea-ui/react";
import { Icon } from "@iconify/react";
import Link from "~/components/link";

const socials = [
	{
		icon: "mdi:facebook",
		name: "Facebook",
		url: "https://www.facebook.com/FeaUI",
	},
	{
		icon: "mdi:twitter",
		name: "Twitter",
		url: "https://twitter.com/FeaUI",
	},
	{
		icon: "mdi:linkedin",
		name: "LinkedIn",
		url: "https://www.linkedin.com/company/FeaUI",
	},
	{
		icon: "mdi:instagram",
		name: "Instagram",
		url: "https://www.instagram.com/FeaUI",
	},
	{
		icon: "mdi:pinterest",
		name: "Pinterest",
		url: "https://www.pinterest.com/FeaUI",
	},
];

const sitemap = [
	{ name: "Home", url: "/" },
	{ name: "About", url: "/about" },
	{ name: "Contact", url: "/contact" },
];

export default function Footer() {
	return (
		<footer className="border-t bg-surface text-surface-foreground">
			<Container className="py-16">
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12 max-w-md md:col-span-6">
						<h2 className="mb-2 font-extrabold text-3xl">PACES</h2>
						<p className="text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
							magni, natus quod libero cum minus illo, molestias omnis
							distinctio eligendi aliquid asperiores corporis in, facere
							incidunt doloremque cupiditate ullam unde.
						</p>
					</div>
					<div className="col-span-12 md:col-span-2">
						<h2 className="mb-2 font-bold text-lg">Sitemap</h2>
						<List>
							{sitemap.map((item) => (
								<List.Item key={item.name}>
									<Link to={item.url}>{item.name}</Link>
								</List.Item>
							))}
						</List>
					</div>
					<div className="col-span-12 md:col-span-2">
						<h2 className="mb-2 font-bold text-lg">External Links</h2>
						<List>
							<List.Item>
								<Link
									rel="noopener noreferrer"
									target="_blank"
									to="https://fea-ui.com"
								>
									Fea UI
								</Link>
							</List.Item>
							<List.Item>
								<Link
									rel="noopener noreferrer"
									target="_blank"
									to="https://Fea.design"
								>
									Fea Design
								</Link>
							</List.Item>
						</List>
					</div>
					<div className="col-span-12 md:col-span-2">
						<h2 className="mb-2 font-bold text-lg">Resources</h2>
						<List>
							<List.Item>
								<Link
									rel="noopener noreferrer"
									target="_blank"
									to="https://docs.fea-ui.com"
								>
									Documentation
								</Link>
							</List.Item>
							<List.Item>
								<Link
									rel="noopener noreferrer"
									target="_blank"
									to="https://github.com/fea-ui"
								>
									GitHub
								</Link>
							</List.Item>
						</List>
					</div>
					<Separator className="col-span-12" />
					<div className="col-span-12">
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<p className="text-muted-foreground text-sm">
								&copy; {new Date().getFullYear()} PACES. All rights reserved.
							</p>
							<div className="flex justify-end gap-1">
								{socials.map((social) => (
									<Link
										key={social.name}
										rel="noopener noreferrer"
										target="_blank"
										to={social.url}
									>
										<Icon className="size-4" icon={social.icon} />
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
