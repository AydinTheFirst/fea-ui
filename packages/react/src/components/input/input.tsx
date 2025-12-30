import { useId, useMemo } from "react";
import { cn } from "tailwind-variants";
import { InputContext } from "./input.context";
import { type InputVariants, inputVariants } from "./input.variants";
import { useInput } from "./use-input";

// Root
interface InputProps extends InputVariants, React.ComponentProps<"div"> {}

const Input = ({ className, id, ...props }: InputProps) => {
	const generatedId = useId();
	const inputId = id || generatedId;

	const slots = useMemo(() => inputVariants({}), []);
	return (
		<InputContext value={{ id: inputId, slots: slots }}>
			<div className={cn(className, slots.root())} {...props} />
		</InputContext>
	);
};

interface InputControlProps extends React.ComponentPropsWithoutRef<"input"> {}

// Control
export const InputControl = ({ className, ...props }: InputControlProps) => {
	const { slots, id } = useInput();

	return (
		<input className={cn(className, slots.control())} id={id} {...props} />
	);
};

// Label
interface InputLabelProps extends React.ComponentPropsWithoutRef<"label"> {}

export const InputLabel = ({
	className,
	children,
	...props
}: InputLabelProps) => {
	const { slots, id } = useInput();
	return (
		<label className={cn(className, slots.label())} htmlFor={id} {...props}>
			{children}
		</label>
	);
};

// Description
interface InputDescriptionProps extends React.ComponentPropsWithoutRef<"p"> {}

export const InputDescription = ({
	className,
	children,
	...props
}: InputDescriptionProps) => {
	const { slots } = useInput();
	return (
		<p className={cn(className, slots.description())} {...props}>
			{children}
		</p>
	);
};

// Error Message
interface InputErrorMessageProps extends React.ComponentPropsWithoutRef<"p"> {}

export const InputErrorMessage = ({
	className,
	children,
	...props
}: InputErrorMessageProps) => {
	const { slots } = useInput();
	return (
		<p className={cn(className, slots.errorMessage())} {...props}>
			{children}
		</p>
	);
};

export default Object.assign(Input, {
	Control: InputControl,
	Description: InputDescription,
	ErrorMessage: InputErrorMessage,
	Label: InputLabel,
	Root: Input,
});

export namespace Input {
	export type Props = InputProps;
}
