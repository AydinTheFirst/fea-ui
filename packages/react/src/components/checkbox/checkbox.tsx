import { Checkbox as BaseCheckbox } from "@base-ui/react";
import { LucideCheck } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { CheckboxContext } from "./checkbox.context";
import { type CheckboxVariants, checkboxVariants } from "./checkbox.variants";
import { useCheckbox } from "./use-checkbox";

// Root
interface CheckboxProps extends CheckboxVariants, BaseCheckbox.Root.Props {}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
	const slots = useMemo(() => checkboxVariants({}), []);
	return (
		<CheckboxContext value={{ slots }}>
			<BaseCheckbox.Root className={cn(className, slots.root())} {...props} />
		</CheckboxContext>
	);
};

// Indicator
interface CheckboxIndicatorProps extends BaseCheckbox.Indicator.Props {}
const CheckboxIndicator = ({
	className,
	children,
	...props
}: CheckboxIndicatorProps) => {
	const { slots } = useCheckbox();

	return (
		<BaseCheckbox.Indicator
			className={cn(className, slots.indicator())}
			{...props}
		>
			{children ?? <LucideCheck />}
		</BaseCheckbox.Indicator>
	);
};

export default Object.assign(Checkbox, {
	Indicator: CheckboxIndicator,
	Root: Checkbox,
});
