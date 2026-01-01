import { FieldError as AriaFieldError } from "react-aria-components";
import { cn } from "tailwind-variants";
import {
	type FieldErrorVariants,
	fieldErrorVariants,
} from "./field-error.variants";

// Root
interface FieldErrorProps
	extends FieldErrorVariants,
		React.ComponentProps<typeof AriaFieldError> {}

const FieldError = ({ className, ...props }: FieldErrorProps) => {
	const styles = fieldErrorVariants();

	return (
		<AriaFieldError
			className={cn(className, styles)}
			data-slot="field-error"
			data-visible
			{...props}
		/>
	);
};

export default FieldError;
