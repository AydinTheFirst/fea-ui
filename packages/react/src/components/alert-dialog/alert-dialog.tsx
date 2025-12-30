import { AlertDialog as BaseAlertDialog } from "@base-ui/react";
import { LucideX } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { AlertDialogContext } from "./alert-dialog.context";
import {
	type AlertDialogVariants,
	alertDialogVariants,
} from "./alert-dialog.variants";
import { useAlertDialog } from "./use-alert-dialog";

// Root
interface AlertDialogProps
	extends AlertDialogVariants,
		BaseAlertDialog.Root.Props {}

const AlertDialog = ({ ...props }: AlertDialogProps) => {
	const slots = useMemo(() => alertDialogVariants(), []);

	return (
		<AlertDialogContext value={{ slots }}>
			<BaseAlertDialog.Root {...props} />
		</AlertDialogContext>
	);
};

// Trigger
interface AlertDialogTriggerProps extends BaseAlertDialog.Trigger.Props {}

const AlertDialogTrigger = ({
	className,
	...props
}: AlertDialogTriggerProps) => {
	const { slots } = useAlertDialog();
	return (
		<BaseAlertDialog.Trigger
			className={cn(slots.trigger(), className)}
			{...props}
		/>
	);
};

// Portal
interface AlertDialogPortalProps extends BaseAlertDialog.Portal.Props {}

const AlertDialogPortal = ({ className, ...props }: AlertDialogPortalProps) => {
	const { slots } = useAlertDialog();
	return (
		<BaseAlertDialog.Portal
			className={cn(slots.portal(), className)}
			{...props}
		/>
	);
};

// Backdrop
interface AlertDialogBackdropProps extends BaseAlertDialog.Backdrop.Props {}

const AlertDialogBackdrop = ({
	className,
	...props
}: AlertDialogBackdropProps) => {
	const { slots } = useAlertDialog();
	return (
		<BaseAlertDialog.Backdrop
			className={cn(slots.backdrop(), className)}
			{...props}
		/>
	);
};

// Viewport
interface AlertDialogViewportProps extends BaseAlertDialog.Viewport.Props {}

const AlertDialogViewport = ({
	className,
	...props
}: AlertDialogViewportProps) => {
	const { slots } = useAlertDialog();
	return (
		<BaseAlertDialog.Viewport
			className={cn(slots.viewport(), className)}
			{...props}
		/>
	);
};

// Popup
interface AlertDialogPopupProps extends BaseAlertDialog.Popup.Props {}

const AlertDialogPopup = ({ className, ...props }: AlertDialogPopupProps) => {
	const { slots } = useAlertDialog();
	return (
		<BaseAlertDialog.Popup
			className={cn(slots.popup(), className)}
			{...props}
		/>
	);
};

// Title
interface AlertDialogTitleProps extends BaseAlertDialog.Title.Props {}

const AlertDialogTitle = ({ className, ...props }: AlertDialogTitleProps) => {
	const { slots } = useAlertDialog();
	return (
		<BaseAlertDialog.Title
			className={cn(slots.title(), className)}
			{...props}
		/>
	);
};

// Description
interface AlertDialogDescriptionProps
	extends BaseAlertDialog.Description.Props {}

const AlertDialogDescription = ({
	className,
	...props
}: AlertDialogDescriptionProps) => {
	const { slots } = useAlertDialog();
	return (
		<BaseAlertDialog.Description
			className={cn(slots.description(), className)}
			{...props}
		/>
	);
};

// Close
interface AlertDialogCloseProps extends BaseAlertDialog.Close.Props {}

const AlertDialogClose = ({
	className,
	children,
	...props
}: AlertDialogCloseProps) => {
	const { slots } = useAlertDialog();
	return (
		<BaseAlertDialog.Close className={cn(slots.close(), className)} {...props}>
			{children ?? <LucideX />}
		</BaseAlertDialog.Close>
	);
};

// Exports
export default Object.assign(AlertDialog, {
	Backdrop: AlertDialogBackdrop,
	Close: AlertDialogClose,
	Description: AlertDialogDescription,
	Popup: AlertDialogPopup,
	Portal: AlertDialogPortal,
	Root: AlertDialog,
	Title: AlertDialogTitle,
	Trigger: AlertDialogTrigger,
	Viewport: AlertDialogViewport,
});
