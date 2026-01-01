import { TextField as AriaTextField } from "react-aria-components";
import { cn } from "tailwind-variants";
import {
	type TextFieldVariants,
	textFieldVariants,
} from "./text-field.variants";

// Root
interface TextFieldProps
	extends TextFieldVariants,
		React.ComponentProps<typeof AriaTextField> {}

const TextField = ({ className, ...props }: TextFieldProps) => {
	const styles = textFieldVariants();

	return <AriaTextField className={cn(className, styles)} {...props} />;
};

export default TextField;
