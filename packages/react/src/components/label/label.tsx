import { cn } from "tailwind-variants";
import { type LabelVariants, labelVariants } from "./label.variants";

interface LabelProps extends LabelVariants, React.ComponentProps<"label"> {}

const Label = ({ className, ...props }: LabelProps) => {
	const styles = labelVariants();
	// biome-ignore lint/a11y/noLabelWithoutControl: Not needed rn
	return <label className={cn(className, styles)} {...props} />;
};

export default Label;
