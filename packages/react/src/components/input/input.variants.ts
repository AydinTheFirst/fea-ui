import { tv, type VariantProps } from "tailwind-variants";

export const inputVariants = tv({
	defaultVariants: {
		size: "md",
	},
	slots: {
		control: "input__control",
		description: "input__description",
		errorMessage: "input__error-message",
		label: "input__label",
		root: "input",
	},
	variants: {
		size: {
			lg: { root: "input--lg" },
			md: { root: "input--md" },
			sm: { root: "input--sm" },
		},
	},
});

export type InputVariants = VariantProps<typeof inputVariants>;
