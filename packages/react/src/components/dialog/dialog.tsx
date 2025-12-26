import { Dialog as BaseDialog } from "@base-ui/react";
import { LucideX } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { DialogContext } from "./dialog.context";
import { type DialogVariants, dialogVariants } from "./dialog.variants";
import { useDialog } from "./use-dialog";

// Root
interface DialogProps extends DialogVariants, BaseDialog.Root.Props {}

const Dialog = ({ ...props }: DialogProps) => {
	const slots = useMemo(() => dialogVariants(), []);

	return (
		<DialogContext.Provider value={{ slots }}>
			<BaseDialog.Root {...props} />
		</DialogContext.Provider>
	);
};

// Trigger
interface DialogTriggerProps extends BaseDialog.Trigger.Props {}

const DialogTrigger = ({ className, ...props }: DialogTriggerProps) => {
	const { slots } = useDialog();

	return (
		<BaseDialog.Trigger className={cn(slots.trigger(), className)} {...props} />
	);
};

// Portal
interface DialogPortalProps extends BaseDialog.Portal.Props {}

const DialogPortal = ({ className, ...props }: DialogPortalProps) => {
	const { slots } = useDialog();

	return (
		<BaseDialog.Portal className={cn(slots.portal(), className)} {...props} />
	);
};

// Backdrop
interface DialogBackdropProps extends BaseDialog.Backdrop.Props {}

const DialogBackdrop = ({ className, ...props }: DialogBackdropProps) => {
	const { slots } = useDialog();
	return (
		<BaseDialog.Backdrop
			className={cn(slots.backdrop(), className)}
			{...props}
		/>
	);
};

// Viewport
interface DialogViewportProps extends BaseDialog.Viewport.Props {}

const DialogViewport = ({ className, ...props }: DialogViewportProps) => {
	const { slots } = useDialog();
	return (
		<BaseDialog.Viewport
			className={cn(slots.viewport(), className)}
			{...props}
		/>
	);
};

// Popup
interface DialogPopupProps extends BaseDialog.Popup.Props {}

const DialogPopup = ({ className, ...props }: DialogPopupProps) => {
	const { slots } = useDialog();
	return (
		<BaseDialog.Popup className={cn(slots.popup(), className)} {...props} />
	);
};

// Title
interface DialogTitleProps extends BaseDialog.Title.Props {}

const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
	const { slots } = useDialog();
	return (
		<BaseDialog.Title className={cn(slots.title(), className)} {...props} />
	);
};

// Description
interface DialogDescriptionProps extends BaseDialog.Description.Props {}

const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
	const { slots } = useDialog();
	return (
		<BaseDialog.Description
			className={cn(slots.description(), className)}
			{...props}
		/>
	);
};

// Close
interface DialogCloseProps extends BaseDialog.Close.Props {}

const DialogClose = ({ className, ...props }: DialogCloseProps) => {
	const { slots } = useDialog();

	return (
		<BaseDialog.Close className={cn(slots.close(), className)} {...props}>
			<LucideX />
		</BaseDialog.Close>
	);
};

Dialog.Backdrop = DialogBackdrop;
Dialog.Close = DialogClose;
Dialog.Description = DialogDescription;
Dialog.Popup = DialogPopup;
Dialog.Portal = DialogPortal;
Dialog.Root = Dialog;
Dialog.Title = DialogTitle;
Dialog.Trigger = DialogTrigger;
Dialog.Viewport = DialogViewport;

export default Dialog;
