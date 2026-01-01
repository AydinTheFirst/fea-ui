import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";

import { cn } from "tailwind-variants";

import {
	type CheckboxGroupVariants,
	checkboxGroupVariants,
} from "./checkbox-group.variants";

interface CheckboxGroupProps
	extends CheckboxGroupVariants,
		React.ComponentProps<typeof AriaCheckboxGroup> {}

const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => {
	const styles = checkboxGroupVariants();
	return <AriaCheckboxGroup className={cn(className, styles)} {...props} />;
};

export default CheckboxGroup;
