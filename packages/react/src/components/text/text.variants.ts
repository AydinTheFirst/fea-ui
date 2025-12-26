import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
	base: "text",
});

export type TextVariants = VariantProps<typeof textVariants>;
