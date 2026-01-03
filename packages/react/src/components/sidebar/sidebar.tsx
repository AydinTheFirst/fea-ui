import { LucidePanelLeftClose, LucidePanelLeftOpen } from "lucide-react";
import React, { useMemo } from "react";
import { cn } from "tailwind-variants";
import { SidebarContext } from "./sidebar.context";
import { type SidebarVariants, sidebarVariants } from "./sidebar.variants";
import { useSidebar } from "./use-sidebar";

// Root
interface SidebarProps extends SidebarVariants, React.ComponentProps<"div"> {
	isOpen?: boolean;
	onOpenChange?: (isOpen: boolean) => void;
}

const Sidebar = ({
	className,
	isOpen,
	onOpenChange,
	...props
}: SidebarProps) => {
	const [internalIsOpen, setInternalIsOpen] = React.useState(false);

	const isOpenState = isOpen !== undefined ? isOpen : internalIsOpen;
	const handleOpenChange = onOpenChange || setInternalIsOpen;

	const slots = useMemo(() => sidebarVariants({ className }), [className]);

	return (
		<SidebarContext
			value={{
				isOpen: isOpenState,
				onOpenChange: handleOpenChange,
				slots,
			}}
		>
			<div className={slots.root()} data-open={isOpenState} {...props} />
		</SidebarContext>
	);
};

// Panel
interface SidebarPanelProps extends React.ComponentProps<"aside"> {}
const SidebarPanel = ({ className, ...props }: SidebarPanelProps) => {
	const { slots } = useSidebar();

	return <aside className={cn(slots.panel(), className)} {...props} />;
};

// Header
interface SidebarHeaderProps extends React.ComponentProps<"header"> {}
const SidebarHeader = ({ className, ...props }: SidebarHeaderProps) => {
	const { slots } = useSidebar();

	return <header className={cn(slots.header(), className)} {...props} />;
};

// Content
interface SidebarContentProps extends React.ComponentProps<"div"> {}
const SidebarContent = ({ className, ...props }: SidebarContentProps) => {
	const { slots } = useSidebar();

	return <div className={cn(slots.content(), className)} {...props} />;
};

// Footer
interface SidebarFooterProps extends React.ComponentProps<"footer"> {}
const SidebarFooter = ({ className, ...props }: SidebarFooterProps) => {
	const { slots } = useSidebar();

	return <footer className={cn(slots.footer(), className)} {...props} />;
};

// Trigger
interface SidebarTriggerProps extends React.ComponentProps<"button"> {}
const SidebarTrigger = ({
	className,
	children,
	...props
}: SidebarTriggerProps) => {
	const { slots, isOpen, onOpenChange } = useSidebar();

	return (
		<button
			aria-expanded={isOpen}
			className={cn(slots.trigger(), className)}
			onClick={() => onOpenChange(!isOpen)}
			{...props}
		>
			{children ??
				(isOpen ? <LucidePanelLeftClose /> : <LucidePanelLeftOpen />)}
		</button>
	);
};

// Outlet
interface SidebarOutletProps extends React.ComponentProps<"div"> {}
const SidebarOutlet = ({ className, ...props }: SidebarOutletProps) => {
	const { slots } = useSidebar();

	return <div className={cn(slots.outlet(), className)} {...props} />;
};

export default Object.assign(Sidebar, {
	Content: SidebarContent,
	Footer: SidebarFooter,
	Header: SidebarHeader,
	Outlet: SidebarOutlet,
	Panel: SidebarPanel,
	Root: Sidebar,
	Trigger: SidebarTrigger,
});
