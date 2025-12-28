import { Popover as BasePopover } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { PopoverContext } from "./popover.context";
import { type PopoverVariants, popoverVariants } from "./popover.variants";
import { usePopover } from "./use-popover";

// Root
interface PopoverProps extends PopoverVariants, BasePopover.Root.Props {}

const Popover = ({ ...props }: PopoverProps) => {
	const slots = useMemo(() => popoverVariants(), []);

	return (
		<PopoverContext value={{ slots }}>
			<BasePopover.Root {...props} />
		</PopoverContext>
	);
};

// Trigger
interface PopoverTriggerProps extends BasePopover.Trigger.Props {}

const PopoverTrigger = ({ className, ...props }: PopoverTriggerProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Trigger
			className={cn(slots.trigger(), className)}
			{...props}
		/>
	);
};

// Portal
interface PopoverPortalProps extends BasePopover.Portal.Props {}
const PopoverPortal = ({ className, ...props }: PopoverPortalProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Portal className={cn(slots.portal(), className)} {...props} />
	);
};

// Backdrop
interface PopoverBackdropProps extends BasePopover.Backdrop.Props {}

const PopoverBackdrop = ({ className, ...props }: PopoverBackdropProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Backdrop
			className={cn(slots.backdrop(), className)}
			{...props}
		/>
	);
};

// Positioner
interface PopoverPositionerProps extends BasePopover.Positioner.Props {}

const PopoverPositioner = ({ className, ...props }: PopoverPositionerProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Positioner
			className={cn(slots.positioner(), className)}
			{...props}
		/>
	);
};

// Popup
interface PopoverPopupProps extends BasePopover.Popup.Props {}

const PopoverPopup = ({ className, ...props }: PopoverPopupProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Popup className={cn(slots.popup(), className)} {...props} />
	);
};

// Arrow
interface PopoverArrowProps extends BasePopover.Arrow.Props {}

const PopoverArrow = ({ className, ...props }: PopoverArrowProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Arrow className={cn(slots.arrow(), className)} {...props} />
	);
};

// Viewport
interface PopoverViewportProps extends BasePopover.Viewport.Props {}

const PopoverViewport = ({ className, ...props }: PopoverViewportProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Viewport
			className={cn(slots.viewport(), className)}
			{...props}
		/>
	);
};

// Title
interface PopoverTitleProps extends BasePopover.Title.Props {}
const PopoverTitle = ({ className, ...props }: PopoverTitleProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Title className={cn(slots.title(), className)} {...props} />
	);
};

// Description
interface PopoverDescriptionProps extends BasePopover.Description.Props {}

const PopoverDescription = ({
	className,
	...props
}: PopoverDescriptionProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Description
			className={cn(slots.description(), className)}
			{...props}
		/>
	);
};

// Close
interface PopoverCloseProps extends BasePopover.Close.Props {}

const PopoverClose = ({ className, ...props }: PopoverCloseProps) => {
	const { slots } = usePopover();

	return (
		<BasePopover.Close className={cn(slots.close(), className)} {...props} />
	);
};

Popover.Root = Popover;
Popover.Trigger = PopoverTrigger;
Popover.Portal = PopoverPortal;
Popover.Backdrop = PopoverBackdrop;
Popover.Positioner = PopoverPositioner;
Popover.Popup = PopoverPopup;
Popover.Arrow = PopoverArrow;
Popover.Viewport = PopoverViewport;
Popover.Title = PopoverTitle;
Popover.Description = PopoverDescription;
Popover.Close = PopoverClose;

export default Popover;
