import { Popover as AriaPopover } from "react-aria-components";
import { cn } from "tailwind-variants";
import { type PopoverVariants, popoverVariants } from "./popover.variants";

// Root
interface PopoverProps
	extends PopoverVariants,
		React.ComponentProps<typeof AriaPopover> {}

const Popover = ({ ...props }: PopoverProps) => {
	const styles = popoverVariants();

	return <AriaPopover className={cn(styles)} {...props} />;
};

export default Popover;
