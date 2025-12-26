import { Button, Menu } from "@fea-ui/react";
import { Icon } from "@iconify/react";

const locales = ["tr", "en"];
const localeNames: Record<string, string> = {
	en: "English",
	tr: "Türkçe",
};

export default function LocaleSwitcher() {
	return (
		<Menu.Root>
			<Menu.Trigger>
				<Button variant="secondary">
					<Icon icon={"circle-flags:en"} />
					<span className="hidden md:block">English</span>
				</Button>
			</Menu.Trigger>
			<Menu.Portal>
				<Menu.Positioner>
					<Menu.Popup>
						{locales.map((locale) => (
							<Menu.Item key={locale}>
								<div className="flex items-center gap-2">
									<Icon icon={`circle-flags:${locale}`} />
									{localeNames[locale]}
								</div>
							</Menu.Item>
						))}
					</Menu.Popup>
				</Menu.Positioner>
			</Menu.Portal>
		</Menu.Root>
	);
}
