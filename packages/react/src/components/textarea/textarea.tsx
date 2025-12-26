import { cn } from "tailwind-variants";
import { type TextareaVariants, textareaVariants } from "./textarea.variants";

// Root
interface TextareaProps
	extends TextareaVariants,
		React.ComponentProps<"textarea"> {}

const Textarea = ({ className, ...props }: TextareaProps) => {
	const styles = textareaVariants();
	return <textarea className={cn(className, styles)} {...props} />;
};

export default Textarea;
