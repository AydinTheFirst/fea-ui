import { TextArea as AriaTextarea } from "react-aria-components";
import { cn } from "tailwind-variants";
import { type TextareaVariants, textareaVariants } from "./textarea.variants";

// Root
interface TextareaProps
	extends TextareaVariants,
		React.ComponentProps<typeof AriaTextarea> {}

const Textarea = ({ className, ...props }: TextareaProps) => {
	const styles = textareaVariants();
	return <AriaTextarea className={cn(className, styles)} {...props} />;
};

export default Textarea;
