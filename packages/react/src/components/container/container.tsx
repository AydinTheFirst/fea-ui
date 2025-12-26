import { cn } from "tailwind-variants";
import {
	type ContainerVariants,
	containerVariants,
} from "./container.variants";

// Root
interface ContainerProps
	extends ContainerVariants,
		React.ComponentProps<"div"> {}

const Container = ({ className, ...props }: ContainerProps) => {
	const styles = containerVariants();
	return <div className={cn(className, styles)} {...props} />;
};

export default Container;
