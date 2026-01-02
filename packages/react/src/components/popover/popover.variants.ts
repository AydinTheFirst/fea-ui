import { tv, type VariantProps } from "tailwind-variants";

export const popoverVariants = tv({
	base: "popover",
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
