import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
	slots: {
		icon: "select__icon",
		item: "select__item",
		itemIndicator: "select__item-indicator",
		itemText: "select__item-text",
		list: "select__list",
		popup: "select__popup",
		portal: "select__portal",
		positioner: "select__positioner",
		root: "select",
		separator: "select__separator",
		trigger: "select__trigger",
		value: "select__value",
	},
});

export type SelectVariants = VariantProps<typeof selectVariants>;
