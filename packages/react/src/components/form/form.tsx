import { Form as AriaForm } from "react-aria-components";
import { cn } from "tailwind-variants";
import { type FormVariants, formVariants } from "./form.variants";

interface FormProps
	extends FormVariants,
		React.ComponentProps<typeof AriaForm> {}

const Form = ({ className, ...props }: FormProps) => {
	const styles = formVariants();
	return <AriaForm className={cn(className, styles)} {...props} />;
};

export default Form;
