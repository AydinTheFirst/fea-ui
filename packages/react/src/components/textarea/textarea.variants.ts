import { tv, type VariantProps } from "tailwind-variants";
import { inputVariants } from "../input";

export const textareaVariants = tv({
	base: "textarea",
	extend: inputVariants,
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;
