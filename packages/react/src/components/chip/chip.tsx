import { cn } from "tailwind-variants";
import { type ChipVariants, chipVariants } from "./chip.variants";

// Root
interface ChipProps extends ChipVariants, React.ComponentProps<"span"> {}

const Chip = ({ className, variant, size, ...props }: ChipProps) => {
	const styles = chipVariants({ size, variant });
	return <span className={cn(className, styles)} {...props} />;
};

export default Chip;
