import { Field as BaseField } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { FieldContext } from "./field.context";
import { type FieldVariants, fieldVariants } from "./field.variants";
import { useField } from "./use-field";

// Root
interface FieldRootProps extends FieldVariants, BaseField.Root.Props {
	required?: boolean;
}

const FieldRoot = ({ className, required, ...props }: FieldRootProps) => {
	const slots = useMemo(() => fieldVariants({}), []);

	return (
		<FieldContext value={{ required, slots }}>
			<BaseField.Root
				className={cn(className, slots.root())}
				data-required={required}
				{...props}
			/>
		</FieldContext>
	);
};

// Label
interface FieldLabelProps extends BaseField.Label.Props {}
const FieldLabel = ({ className, ...props }: FieldLabelProps) => {
	const { slots } = useField();

	return (
		<BaseField.Label className={cn(className, slots.label())} {...props} />
	);
};

// Control
interface FieldControlProps extends BaseField.Control.Props {}
const FieldControl = ({ className, ...props }: FieldControlProps) => {
	const { slots, required } = useField();

	return (
		<BaseField.Control
			className={cn(className, slots.control())}
			required={required}
			{...props}
		/>
	);
};

// Description
interface FieldDescriptionProps extends BaseField.Description.Props {}
const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
	const { slots } = useField();

	return (
		<BaseField.Description
			className={cn(className, slots.description())}
			{...props}
		/>
	);
};

// Error
interface FieldErrorProps extends BaseField.Error.Props {}
const FieldError = ({ className, ...props }: FieldErrorProps) => {
	const { slots } = useField();

	return (
		<BaseField.Error className={cn(className, slots.error())} {...props} />
	);
};

export default Object.assign(FieldRoot, {
	Control: FieldControl,
	Description: FieldDescription,
	Error: FieldError,
	Label: FieldLabel,
	Root: FieldRoot,
});
