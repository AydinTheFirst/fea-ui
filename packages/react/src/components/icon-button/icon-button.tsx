import { cn } from "tailwind-variants";
import { Button, type ButtonProps } from "../button";
import {
	type IconButtonVariants,
	iconButtonVariants,
} from "./icon-button.variants";

// Root
export type IconButtonProps = IconButtonVariants & ButtonProps;

const IconButton = ({
	className,
	variant,
	size,
	isIconOnly,
	...props
}: IconButtonProps) => {
	const styles = iconButtonVariants({ isIconOnly, size, variant });

	return <Button className={cn(className, styles)} {...props} />;
};

export default IconButton;
