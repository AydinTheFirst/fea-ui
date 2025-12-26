import { Button } from "@fea-ui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const iconName =
		theme === "light" ? "mdi:weather-night" : "mdi:weather-sunny";

	return (
		<Button isIconOnly onClick={toggleTheme} variant="secondary">
			<Icon icon={iconName} />
		</Button>
	);
}
