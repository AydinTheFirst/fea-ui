import { Label as AriaLabel } from "react-aria-components";
import { cn } from "tailwind-variants";
import { type LabelVariants, labelVariants } from "./label.variants";

interface LabelProps
	extends LabelVariants,
		React.ComponentProps<typeof AriaLabel> {}

const Label = ({ className, ...props }: LabelProps) => {
	const styles = labelVariants();
	return <AriaLabel className={cn(className, styles)} {...props} />;
};

export default Label;
