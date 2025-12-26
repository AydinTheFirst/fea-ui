import { tv, type VariantProps } from "tailwind-variants";

export const inputVariants = tv({
	base: "input",
	variants: {
		inputSize: {
			lg: "input--lg",
			md: "input--md",
			sm: "input--sm",
		},
	},
});

export type InputVariants = VariantProps<typeof inputVariants>;
