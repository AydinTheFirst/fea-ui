import { cn } from "tailwind-variants";
import {
	type ButtonGroupVariants,
	buttonGroupVariants,
} from "./button-group.variants";

// Root
interface ButtonGroupProps
	extends ButtonGroupVariants,
		React.ComponentProps<"div"> {}

const ButtonGroup = ({ className, ...props }: ButtonGroupProps) => {
	const styles = buttonGroupVariants();
	return <div className={cn(className, styles)} {...props} />;
};

export default ButtonGroup;
