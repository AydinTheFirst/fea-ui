import { Menu as BaseMenu } from "@base-ui/react";
import { LucideChevronUp } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { MenuContext } from "./menu.context";
import { type MenuVariants, menuVariants } from "./menu.variants";
import { useMenu } from "./use-menu";

// Root
interface MenuProps extends MenuVariants, BaseMenu.Root.Props {}

const Menu = ({ ...props }: MenuProps) => {
	const slots = useMemo(() => menuVariants(), []);

	return (
		<MenuContext.Provider value={{ slots }}>
			<BaseMenu.Root {...props} />
		</MenuContext.Provider>
	);
};

// Trigger
interface MenuTriggerProps extends MenuVariants, BaseMenu.Trigger.Props {}

const MenuTrigger = ({ className, ...props }: MenuTriggerProps) => {
	const { slots } = useMenu();

	return (
		<BaseMenu.Trigger className={cn(slots.trigger(), className)} {...props} />
	);
};

// Portal
interface MenuPortalProps extends MenuVariants, BaseMenu.Portal.Props {}

const MenuPortal = ({ className, ...props }: MenuPortalProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.Portal className={cn(slots.portal(), className)} {...props} />
	);
};

// Backdrop
interface MenuBackdropProps extends MenuVariants, BaseMenu.Backdrop.Props {}

const MenuBackdrop = ({ className, ...props }: MenuBackdropProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.Backdrop className={cn(slots.backdrop(), className)} {...props} />
	);
};

// Positioner
interface MenuPositionerProps extends MenuVariants, BaseMenu.Positioner.Props {}

const MenuPositioner = ({ className, ...props }: MenuPositionerProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.Positioner
			className={cn(slots.positioner(), className)}
			{...props}
		/>
	);
};

// Popup
interface MenuPopupProps extends MenuVariants, BaseMenu.Popup.Props {}

const MenuPopup = ({ className, ...props }: MenuPopupProps) => {
	const { slots } = useMenu();
	return <BaseMenu.Popup className={cn(slots.popup(), className)} {...props} />;
};

// Arrow
interface MenuArrowProps extends MenuVariants, BaseMenu.Arrow.Props {}

const MenuArrow = ({ className, children, ...props }: MenuArrowProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.Arrow className={cn(slots.arrow(), className)} {...props}>
			{children ?? <LucideChevronUp />}
		</BaseMenu.Arrow>
	);
};

// Item
interface MenuItemProps extends MenuVariants, BaseMenu.Item.Props {}

const MenuItem = ({ className, ...props }: MenuItemProps) => {
	const { slots } = useMenu();
	return <BaseMenu.Item className={cn(slots.item(), className)} {...props} />;
};

// Separator
interface MenuSeparatorProps extends MenuVariants, BaseMenu.Separator.Props {}

const MenuSeparator = ({ className, ...props }: MenuSeparatorProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.Separator
			className={cn(slots.separator(), className)}
			{...props}
		/>
	);
};

// Group
interface MenuGroupProps extends MenuVariants, BaseMenu.Group.Props {}

const MenuGroup = ({ className, ...props }: MenuGroupProps) => {
	const { slots } = useMenu();
	return <BaseMenu.Group className={cn(slots.group(), className)} {...props} />;
};

// Group Label
interface MenuGroupLabelProps extends MenuVariants, BaseMenu.GroupLabel.Props {}

const MenuGroupLabel = ({ className, ...props }: MenuGroupLabelProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.GroupLabel
			className={cn(slots.groupLabel(), className)}
			{...props}
		/>
	);
};

// RadioGroup
interface MenuRadioGroupProps extends MenuVariants, BaseMenu.RadioGroup.Props {}

const MenuRadioGroup = ({ className, ...props }: MenuRadioGroupProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.RadioGroup
			className={cn(slots.radioGroup(), className)}
			{...props}
		/>
	);
};

// RadioItem
interface MenuRadioItemProps extends MenuVariants, BaseMenu.RadioItem.Props {}

const MenuRadioItem = ({ className, ...props }: MenuRadioItemProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.RadioItem
			className={cn(slots.radioItem(), className)}
			{...props}
		/>
	);
};

// CheckboxItem
interface MenuCheckboxItemProps
	extends MenuVariants,
		BaseMenu.CheckboxItem.Props {}

const MenuCheckboxItem = ({ className, ...props }: MenuCheckboxItemProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.CheckboxItem
			className={cn(slots.checkboxItem(), className)}
			{...props}
		/>
	);
};

// Submenu
interface MenuSubmenuProps extends MenuVariants, BaseMenu.SubmenuRoot.Props {}

const MenuSubmenu = ({ ...props }: MenuSubmenuProps) => {
	return <BaseMenu.SubmenuRoot {...props} />;
};

// Submenu Trigger
interface MenuSubmenuTriggerProps
	extends MenuVariants,
		BaseMenu.SubmenuTrigger.Props {}

const MenuSubmenuTrigger = ({
	className,
	...props
}: MenuSubmenuTriggerProps) => {
	const { slots } = useMenu();
	return (
		<BaseMenu.SubmenuTrigger
			className={cn(slots.submenuTrigger(), className)}
			{...props}
		/>
	);
};

export default Object.assign(Menu, {
	Arrow: MenuArrow,
	Backdrop: MenuBackdrop,
	CheckboxItem: MenuCheckboxItem,
	Group: MenuGroup,
	GroupLabel: MenuGroupLabel,
	Item: MenuItem,
	Popup: MenuPopup,
	Portal: MenuPortal,
	Positioner: MenuPositioner,
	RadioGroup: MenuRadioGroup,
	RadioItem: MenuRadioItem,
	Root: Menu,
	Separator: MenuSeparator,
	Submenu: MenuSubmenu,
	SubmenuTrigger: MenuSubmenuTrigger,
	Trigger: MenuTrigger,
});
