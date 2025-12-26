import { Input as BaseInput } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { type InputVariants, inputVariants } from "./input.variants";

interface InputProps extends InputVariants, BaseInput.Props {}

const Input = ({ className, inputSize, ...props }: InputProps) => {
	const styles = inputVariants({ inputSize });
	return <BaseInput className={cn(className, styles)} {...props} />;
};

export default Input;
