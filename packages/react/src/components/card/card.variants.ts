import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
	defaultVariants: {
		variant: "default",
	},
	slots: {
		body: "card__body",
		description: "card__description",
		footer: "card__footer",
		header: "card__header",
		root: "card",
		title: "card__title",
	},
	variants: {
		variant: {
			default: {
				root: "card--default",
			},
			transparent: {
				root: "card--transparent",
			},
		},
	},
});

export type CardVariants = VariantProps<typeof cardVariants>;
