import { Button as AriaButton } from "react-aria-components";

import { cn } from "tailwind-variants";

import { type ButtonVariants, buttonVariants } from "./button.variants";

interface ButtonProps
	extends ButtonVariants,
		React.ComponentProps<typeof AriaButton> {}

const Button = ({
	className,
	variant,
	size,
	isIconOnly,
	...props
}: ButtonProps) => {
	const styles = buttonVariants({ isIconOnly, size, variant });

	return <AriaButton className={cn(styles, className)} {...props} />;
};

export default Button;
