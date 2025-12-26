import { tv, type VariantProps } from "tailwind-variants";

export const dialogVariants = tv({
	slots: {
		backdrop: "dialog__backdrop",
		close: "dialog__close",
		description: "dialog__description",
		popup: "dialog__popup",
		portal: "dialog__portal",
		root: "dialog",
		title: "dialog__title",
		trigger: "dialog__trigger",
		viewport: "dialog__viewport",
	},
});

export type DialogVariants = VariantProps<typeof dialogVariants>;
