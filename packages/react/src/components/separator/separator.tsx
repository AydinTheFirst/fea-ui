import { Separator as BaseSeparator } from "@base-ui/react";
import { cn } from "tailwind-variants";

import {
	type SeparatorVariants,
	separatorVariants,
} from "./separator.variants";

interface SeparatorProps extends SeparatorVariants, BaseSeparator.Props {}

const Separator = ({ className, orientation, ...props }: SeparatorProps) => {
	const styles = separatorVariants({ orientation });
	return <BaseSeparator className={cn(className, styles)} {...props} />;
};

export default Separator;
