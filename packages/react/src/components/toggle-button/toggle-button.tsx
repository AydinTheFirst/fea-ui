import {
	Toggle as BaseToggle,
	type ToggleProps as BaseToggleProps,
} from "@base-ui/react";
import { cn } from "tailwind-variants";

import {
	type ToggleButtonVariants,
	toggleButtonVariants,
} from "./toggle-button.variants";

interface ToggleButtonProps extends ToggleButtonVariants, BaseToggleProps {}

const ToggleButton = ({
	className,
	variant,
	size,
	...props
}: ToggleButtonProps) => {
	const styles = toggleButtonVariants({ size, variant });

	return <BaseToggle className={cn(className, styles)} {...props} />;
};

export default ToggleButton;
