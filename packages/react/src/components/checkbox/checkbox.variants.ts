import { tv, type VariantProps } from "tailwind-variants";

export const checkboxVariants = tv({
	slots: {
		checkboxIcon: "checkbox__icon",
		indicator: "checkbox__indicator",
		label: "checkbox__label",
		root: "checkbox",
	},
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
