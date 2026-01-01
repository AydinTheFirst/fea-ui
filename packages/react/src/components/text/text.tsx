import { Text as AriaText } from "react-aria-components";
import { cn } from "tailwind-variants";
import { type TextVariants, textVariants } from "./text.variants";

interface TextProps
	extends TextVariants,
		React.ComponentProps<typeof AriaText> {}

const Text = ({ className, ...props }: TextProps) => {
	const styles = textVariants();
	return (
		<AriaText className={cn(styles, className)} data-slot="text" {...props} />
	);
};

export default Text;
