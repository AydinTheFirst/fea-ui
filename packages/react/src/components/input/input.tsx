import { Input as AriaInput } from "react-aria-components";
import { cn } from "tailwind-variants";
import { type InputVariants, inputVariants } from "./input.variants";

// Root
interface InputProps
	extends InputVariants,
		React.ComponentProps<typeof AriaInput> {}

const Input = ({ className, ...props }: InputProps) => {
	const styles = inputVariants();
	return <AriaInput className={cn(className, styles)} {...props} />;
};

export default Input;
