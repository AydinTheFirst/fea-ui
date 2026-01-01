import type React from "react";
import { useId, useMemo } from "react";
import { cn } from "tailwind-variants";
import { SelectContext } from "./select.context";
import { type SelectVariants, selectVariants } from "./select.variants";
import { useSelect } from "./use-select";

// Root
interface SelectProps extends SelectVariants, React.ComponentProps<"div"> {}

const Select = ({ className, ...props }: SelectProps) => {
	const slots = useMemo(() => selectVariants(), []);

	const generatedId = useId();
	const inputId = props.id || generatedId;

	return (
		<SelectContext.Provider value={{ id: inputId, slots }}>
			<div className={cn(className, slots.root())} {...props} />
		</SelectContext.Provider>
	);
};

// Label
interface SelectLabelProps extends React.ComponentProps<"label"> {}

const SelectLabel = ({ className, ...props }: SelectLabelProps) => {
	const { slots, id } = useSelect();

	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: <label is associated in Select component
		<label className={cn(className, slots.label())} htmlFor={id} {...props} />
	);
};

// Control
interface SelectControlProps extends React.ComponentProps<"select"> {}
const SelectControl = ({ className, ...props }: SelectControlProps) => {
	const { slots, id } = useSelect();

	return (
		<select className={cn(className, slots.control())} id={id} {...props} />
	);
};

// Option
interface SelectOptionProps extends React.ComponentProps<"option"> {}
const SelectOption = ({ className, ...props }: SelectOptionProps) => {
	const { slots } = useSelect();

	return <option className={cn(className, slots.option())} {...props} />;
};

// Description
interface SelectDescriptionProps extends React.ComponentProps<"p"> {}
const SelectDescription = ({ className, ...props }: SelectDescriptionProps) => {
	const { slots } = useSelect();

	return <p className={cn(className, slots.description())} {...props} />;
};

// Error
interface SelectErrorProps extends React.ComponentProps<"p"> {}
const SelectError = ({ className, ...props }: SelectErrorProps) => {
	const { slots } = useSelect();

	return <p className={cn(className, slots.error())} {...props} />;
};

export default Object.assign(Select, {
	Control: SelectControl,
	Description: SelectDescription,
	Error: SelectError,
	Label: SelectLabel,
	Option: SelectOption,
	Root: Select,
});
