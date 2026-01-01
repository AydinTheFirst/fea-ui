import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
	slots: {
		control: "select__control",
		description: "select__description",
		error: "select__error",
		label: "select__label",
		option: "select__option",
		root: "select",
	},
});

export type SelectVariants = VariantProps<typeof selectVariants>;
