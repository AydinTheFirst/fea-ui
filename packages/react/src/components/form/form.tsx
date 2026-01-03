import { Form as BaseForm } from "@base-ui/react";
import { cn } from "tailwind-variants";
import { type FormVariants, formVariants } from "./form.variants";

interface FormProps extends FormVariants, BaseForm.Props {}

const Form = ({ className, ...props }: FormProps) => {
	const styles = formVariants();
	return <BaseForm className={cn(className, styles)} {...props} />;
};

export default Form;
