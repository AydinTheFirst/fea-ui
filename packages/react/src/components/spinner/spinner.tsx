import { LucideLoaderCircle } from "lucide-react";
import { cn } from "tailwind-variants";
import { type SpinnerVariants, spinnerVariants } from "./spinner.variants";

// Root
interface SpinnerProps extends SpinnerVariants, React.ComponentProps<"svg"> {}

const Spinner = ({
	className,
	children,
	size,
	variant,
	...props
}: SpinnerProps) => {
	const styles = spinnerVariants({ size, variant });

	return (
		<LucideLoaderCircle
			aria-label="Loading"
			className={cn(className, styles)}
			role="status"
			{...props}
		/>
	);
};

export default Spinner;
