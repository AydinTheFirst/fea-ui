import { createContext } from "react";

import type { inputVariants } from "./input.variants";

interface InputContext {
	slots: ReturnType<typeof inputVariants>;
	id: string;
}

export const InputContext = createContext<InputContext | null>(null);
