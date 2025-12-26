import { tv, type VariantProps } from "tailwind-variants";

export const progressVariants = tv({
	slots: {
		indicator: "progress__indicator",
		label: "progress__label",
		root: "progress",
		track: "progress__track",
		value: "progress__value",
	},
});

export type ProgressVariants = VariantProps<typeof progressVariants>;
