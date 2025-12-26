import { cn } from "tailwind-variants";
import { type LinkVariants, linkVariants } from "./link.variants";

interface LinkProps extends LinkVariants, React.ComponentProps<"a"> {}

const Link = ({ className, variant, ...props }: LinkProps) => {
	const styles = linkVariants({ variant });

	return <a className={cn(className, styles)} {...props} />;
};

export default Link;
