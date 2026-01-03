import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react";

import { cn } from "tailwind-variants";

import {
	type CheckboxGroupVariants,
	checkboxGroupVariants,
} from "./checkbox-group.variants";

interface CheckboxGroupProps
	extends CheckboxGroupVariants,
		BaseCheckboxGroup.Props {}

const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => {
	const styles = checkboxGroupVariants();
	return <BaseCheckboxGroup className={cn(className, styles)} {...props} />;
};

export default CheckboxGroup;
