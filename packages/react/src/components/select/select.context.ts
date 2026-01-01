import { createContext } from "react";

import type { selectVariants } from "./select.variants";

interface SelectContext {
	slots: ReturnType<typeof selectVariants>;
	id: string;
}

export const SelectContext = createContext<SelectContext | null>(null);
