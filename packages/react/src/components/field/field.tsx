import { Field as BaseField } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { FieldContext } from "./field.context";
import { type FieldVariants, fieldVariants } from "./field.variants";
import { useField } from "./use-field";

interface FieldProps
	extends FieldVariants,
		React.ComponentProps<typeof BaseField.Root> {}

const Field = ({ className, size, ...props }: FieldProps) => {
	const slots = useMemo(() => fieldVariants({ size }), [size]);

	console.log(slots.root());
	return (
		<FieldContext value={{ slots }}>
			<BaseField.Root className={cn(className, slots.root())} {...props} />
		</FieldContext>
	);
};

interface FieldLabelProps
	extends React.ComponentProps<typeof BaseField.Label> {}

const FieldLabel = ({ className, ...props }: FieldLabelProps) => {
	const { slots } = useField();

	return (
		<BaseField.Label className={cn(className, slots.label())} {...props} />
	);
};

interface FieldDescriptionProps
	extends React.ComponentProps<typeof BaseField.Description> {}

const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
	const { slots } = useField();

	return (
		<BaseField.Description
			className={cn(className, slots.description())}
			{...props}
		/>
	);
};

interface FieldControlProps
	extends React.ComponentProps<typeof BaseField.Control> {}

const FieldControl = ({ className, ...props }: FieldControlProps) => {
	const { slots } = useField();

	return (
		<BaseField.Control className={cn(className, slots.control())} {...props} />
	);
};

interface FieldErrorProps
	extends React.ComponentProps<typeof BaseField.Error> {}

const FieldError = ({ className, ...props }: FieldErrorProps) => {
	const { slots } = useField();

	return (
		<BaseField.Error className={cn(slots.error(), className)} {...props} />
	);
};

Field.Control = FieldControl;
Field.Description = FieldDescription;
Field.Error = FieldError;
Field.Label = FieldLabel;
Field.Root = Field;

export default Field;
