import { Select as BaseSelect } from "@base-ui/react";
import { LucideCheck, LucideChevronsUpDown } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { SelectContext } from "./select.context";
import { type SelectVariants, selectVariants } from "./select.variants";
import { useSelect } from "./use-select";

// Root
interface SelectProps extends SelectVariants, BaseSelect.Root.Props<unknown> {}

const Select = ({ ...props }: SelectProps) => {
	const slots = useMemo(() => selectVariants(), []);

	return (
		<SelectContext.Provider value={{ slots }}>
			<BaseSelect.Root {...props} />
		</SelectContext.Provider>
	);
};

// Trigger
interface SelectTriggerProps extends SelectVariants, BaseSelect.Trigger.Props {}

const SelectTrigger = ({ className, ...props }: SelectTriggerProps) => {
	const { slots } = useSelect();

	return (
		<BaseSelect.Trigger className={cn(slots.trigger(), className)} {...props} />
	);
};

// Value
interface SelectValueProps extends SelectVariants, BaseSelect.Value.Props {}

const SelectValue = ({ className, ...props }: SelectValueProps) => {
	const { slots } = useSelect();

	return (
		<BaseSelect.Value className={cn(slots.value(), className)} {...props} />
	);
};

// Icon
interface SelectIconProps extends SelectVariants, BaseSelect.Icon.Props {}

const SelectIcon = ({ className, children, ...props }: SelectIconProps) => {
	const { slots } = useSelect();

	return (
		<BaseSelect.Icon className={cn(slots.icon(), className)} {...props}>
			{children ?? <LucideChevronsUpDown />}
		</BaseSelect.Icon>
	);
};

// Portal
interface SelectPortalProps extends SelectVariants, BaseSelect.Portal.Props {}

const SelectPortal = ({ className, ...props }: SelectPortalProps) => {
	const { slots } = useSelect();
	return (
		<BaseSelect.Portal className={cn(slots.portal(), className)} {...props} />
	);
};

// Positioner
interface SelectPositionerProps
	extends SelectVariants,
		BaseSelect.Positioner.Props {}

const SelectPositioner = ({ className, ...props }: SelectPositionerProps) => {
	const { slots } = useSelect();
	return (
		<BaseSelect.Positioner
			className={cn(slots.positioner(), className)}
			{...props}
		/>
	);
};

// Popup
interface SelectPopupProps extends SelectVariants, BaseSelect.Popup.Props {}

const SelectPopup = ({ className, ...props }: SelectPopupProps) => {
	const { slots } = useSelect();
	return (
		<BaseSelect.Popup className={cn(slots.popup(), className)} {...props} />
	);
};

// List
interface SelectListProps extends SelectVariants, BaseSelect.List.Props {}

const SelectList = ({ className, ...props }: SelectListProps) => {
	const { slots } = useSelect();
	return <BaseSelect.List className={cn(slots.list(), className)} {...props} />;
};

// Item
interface SelectItemProps extends SelectVariants, BaseSelect.Item.Props {}

const SelectItem = ({ className, ...props }: SelectItemProps) => {
	const { slots } = useSelect();
	return <BaseSelect.Item className={cn(slots.item(), className)} {...props} />;
};

// Item Indicator
interface SelectItemIndicatorProps
	extends SelectVariants,
		BaseSelect.ItemIndicator.Props {}

const SelectItemIndicator = ({
	className,
	children,
	...props
}: SelectItemIndicatorProps) => {
	const { slots } = useSelect();
	return (
		<BaseSelect.ItemIndicator
			className={cn(slots.itemIndicator(), className)}
			{...props}
		>
			{children ?? <LucideCheck />}
		</BaseSelect.ItemIndicator>
	);
};

// Item Text
interface SelectItemTextProps
	extends SelectVariants,
		BaseSelect.ItemText.Props {}

const SelectItemText = ({ className, ...props }: SelectItemTextProps) => {
	const { slots } = useSelect();
	return (
		<BaseSelect.ItemText
			className={cn(slots.itemText(), className)}
			{...props}
		/>
	);
};

// Separator
interface SelectSeparatorProps
	extends SelectVariants,
		BaseSelect.Separator.Props {}

const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => {
	const { slots } = useSelect();
	return (
		<BaseSelect.Separator
			className={cn(slots.separator(), className)}
			{...props}
		/>
	);
};

export default Object.assign(Select, {
	Icon: SelectIcon,
	Item: SelectItem,
	ItemIndicator: SelectItemIndicator,
	ItemText: SelectItemText,
	List: SelectList,
	Popup: SelectPopup,
	Portal: SelectPortal,
	Positioner: SelectPositioner,
	Separator: SelectSeparator,
	Trigger: SelectTrigger,
	Value: SelectValue,
});
