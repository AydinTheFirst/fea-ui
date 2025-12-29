import { RadioGroup as BaseRadioGroup } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import {
	type RadioGroupVariants,
	radioGroupVariants,
} from "./radio-group.variants";

// Root
interface RadioGroupProps extends RadioGroupVariants, BaseRadioGroup.Props {}

const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
	const styles = useMemo(() => radioGroupVariants(), []);

	return <BaseRadioGroup className={cn(className, styles)} {...props} />;
};

export default RadioGroup;
