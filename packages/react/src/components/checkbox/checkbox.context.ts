import { createContext } from "react";
import type { checkboxVariants } from "./checkbox.variants";

export interface CheckboxContext {
	slots: ReturnType<typeof checkboxVariants>;
}

export const CheckboxContext = createContext<CheckboxContext | null>(null);
