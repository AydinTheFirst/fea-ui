import { createContext } from "react";
import type { fieldVariants } from "./field.variants";

export interface FieldContext {
	slots: ReturnType<typeof fieldVariants>;
}

export const FieldContext = createContext<FieldContext | null>(null);
