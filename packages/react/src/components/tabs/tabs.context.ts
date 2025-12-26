import { createContext } from "react";

import type { tabsVariants } from "./tabs.variants";

interface TabsContext {
	slots: ReturnType<typeof tabsVariants>;
}

export const TabsContext = createContext<TabsContext | null>(null);
