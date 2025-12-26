import { tv, type VariantProps } from "tailwind-variants";

export const fieldVariants = tv({
	slots: {
		control: "input",
		description: "field__description",
		error: "field__error",
		label: "label",
		root: "field",
	},
	variants: {
		size: {
			lg: { control: "input--lg" },
			md: { control: "input--md" },
			sm: { control: "input--sm" },
		},
	},
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
