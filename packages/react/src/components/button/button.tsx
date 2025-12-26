import { Button as BaseButton } from "@base-ui/react";

import { cn } from "tailwind-variants";

import { type ButtonVariants, buttonVariants } from "./button.variants";

type ButtonProps = ButtonVariants & BaseButton.Props;

const Button = ({
	className,
	variant,
	size,
	isIconOnly,
	...props
}: ButtonProps) => {
	const styles = buttonVariants({ isIconOnly, size, variant });

	return <BaseButton className={cn(styles, className)} {...props} />;
};

export default Button;
