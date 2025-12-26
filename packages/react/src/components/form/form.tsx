import { cn } from "tailwind-variants";

import { type FormVariants, formVariants } from "./form.variants";

interface FormProps extends FormVariants, React.ComponentProps<"form"> {}

const Form = ({ className, ...props }: FormProps) => {
	const styles = formVariants();
	return <form className={cn(className, styles)} {...props} />;
};

export default Form;
