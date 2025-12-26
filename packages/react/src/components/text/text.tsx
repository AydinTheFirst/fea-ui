import { cn } from "tailwind-variants";
import { type TextVariants, textVariants } from "./text.variants";

interface TextProps extends TextVariants, React.ComponentProps<"div"> {}

const Text = ({ className, ...props }: TextProps) => {
	const styles = textVariants();
	return <div className={cn(styles, className)} data-slot="text" {...props} />;
};

export default Text;
