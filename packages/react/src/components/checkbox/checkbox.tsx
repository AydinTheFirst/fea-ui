import { Checkbox as BaseCheckbox } from "@base-ui/react";
import { LucideCheck } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { CheckboxContext } from "./checkbox.context";
import { type CheckboxVariants, checkboxVariants } from "./checkbox.variants";
import { useCheckbox } from "./use-checkbox";

interface CheckboxProps extends CheckboxVariants, BaseCheckbox.Root.Props {}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
	const slots = useMemo(() => checkboxVariants(), []);

	return (
		<CheckboxContext.Provider value={{ slots }}>
			<BaseCheckbox.Root className={cn(className, slots.root())} {...props} />
		</CheckboxContext.Provider>
	);
};

interface CheckboxIndicatorProps extends BaseCheckbox.Indicator.Props {}

const CheckboxIndicator = ({ className, ...props }: CheckboxIndicatorProps) => {
	const { slots } = useCheckbox();

	return (
		<BaseCheckbox.Indicator
			className={cn(className, slots.indicator())}
			{...props}
		>
			<LucideCheck className={slots.checkboxIcon()} />
		</BaseCheckbox.Indicator>
	);
};

Checkbox.Indicator = CheckboxIndicator;
Checkbox.Root = Checkbox;

export default Checkbox;
