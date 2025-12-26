import { Fieldset as BaseFieldset } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { FieldsetContext } from "./fieldset.context";
import { type FieldsetVariants, fieldsetVariants } from "./fieldset.variants";
import { useFieldset } from "./use-fieldset";

// Root
interface FieldsetProps extends FieldsetVariants, BaseFieldset.Root.Props {}

const Fieldset = ({ className, ...props }: FieldsetProps) => {
	const slots = useMemo(() => fieldsetVariants(), []);

	return (
		<FieldsetContext value={{ slots }}>
			<BaseFieldset.Root className={cn(className, slots.root())} {...props} />
		</FieldsetContext>
	);
};

// Legend
interface FieldsetLegendProps extends BaseFieldset.Legend.Props {}

const FieldsetLegend = ({ className, ...props }: FieldsetLegendProps) => {
	const { slots } = useFieldset();
	return (
		<BaseFieldset.Legend className={cn(slots.legend(), className)} {...props} />
	);
};

// Exports
Fieldset.Root = Fieldset;
Fieldset.Legend = FieldsetLegend;

export default Fieldset;
