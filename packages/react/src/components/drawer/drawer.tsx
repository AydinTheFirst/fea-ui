import { Dialog as BaseDrawer } from "@base-ui/react";
import { LucideX } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { DrawerContext } from "./drawer.context";
import { type DrawerVariants, drawerVariants } from "./drawer.variants";
import { useDrawer } from "./use-drawer";

// Root
interface DrawerProps extends DrawerVariants, BaseDrawer.Root.Props {}

const Drawer = ({ position, ...props }: DrawerProps) => {
	const slots = useMemo(() => drawerVariants({ position }), [position]);

	return (
		<DrawerContext value={{ slots }}>
			<BaseDrawer.Root {...props} />
		</DrawerContext>
	);
};

// Tigger
interface DrawerTriggerProps extends BaseDrawer.Trigger.Props {}

const DrawerTrigger = ({ className, ...props }: DrawerTriggerProps) => {
	const { slots } = useDrawer();
	return (
		<BaseDrawer.Trigger className={cn(slots.trigger(), className)} {...props} />
	);
};

// Portal
interface DrawerPortalProps extends BaseDrawer.Portal.Props {}

const DrawerPortal = ({ className, ...props }: DrawerPortalProps) => {
	const { slots } = useDrawer();
	return (
		<BaseDrawer.Portal className={cn(slots.portal(), className)} {...props} />
	);
};

// Backdrop
interface DrawerBackdropProps extends BaseDrawer.Backdrop.Props {}

const DrawerBackdrop = ({ className, ...props }: DrawerBackdropProps) => {
	const { slots } = useDrawer();
	return (
		<BaseDrawer.Backdrop
			className={cn(slots.backdrop(), className)}
			{...props}
		/>
	);
};

// Viewport
interface DrawerViewportProps extends BaseDrawer.Viewport.Props {}

const DrawerViewport = ({ className, ...props }: DrawerViewportProps) => {
	const { slots } = useDrawer();
	return (
		<BaseDrawer.Viewport
			className={cn(slots.viewport(), className)}
			{...props}
		/>
	);
};

// Popup
interface DrawerPopupProps extends BaseDrawer.Popup.Props {}

const DrawerPopup = ({ className, ...props }: DrawerPopupProps) => {
	const { slots } = useDrawer();
	return (
		<BaseDrawer.Popup className={cn(slots.popup(), className)} {...props} />
	);
};

// Title
interface DrawerTitleProps extends BaseDrawer.Title.Props {}

const DrawerTitle = ({ className, ...props }: DrawerTitleProps) => {
	const { slots } = useDrawer();
	return (
		<BaseDrawer.Title className={cn(slots.title(), className)} {...props} />
	);
};

// Description
interface DrawerDescriptionProps extends BaseDrawer.Description.Props {}

const DrawerDescription = ({ className, ...props }: DrawerDescriptionProps) => {
	const { slots } = useDrawer();
	return (
		<BaseDrawer.Description
			className={cn(slots.description(), className)}
			{...props}
		/>
	);
};

// Close
interface DrawerCloseProps extends BaseDrawer.Close.Props {}

const DrawerClose = ({ className, children, ...props }: DrawerCloseProps) => {
	const { slots } = useDrawer();
	return (
		<BaseDrawer.Close className={cn(slots.close(), className)} {...props}>
			{children ?? <LucideX />}
		</BaseDrawer.Close>
	);
};

// Assignments
export default Object.assign(Drawer, {
	Backdrop: DrawerBackdrop,
	Close: DrawerClose,
	Description: DrawerDescription,
	Popup: DrawerPopup,
	Portal: DrawerPortal,
	Root: Drawer,
	Title: DrawerTitle,
	Trigger: DrawerTrigger,
	Viewport: DrawerViewport,
});
