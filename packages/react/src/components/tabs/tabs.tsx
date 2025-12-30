import { Tabs as BaseTabs } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { TabsContext } from "./tabs.context";
import { type TabsVariants, tabsVariants } from "./tabs.variants";
import { useTabs } from "./use-tabs";

// Root
interface TabsProps extends TabsVariants, BaseTabs.Root.Props {}

const Tabs = ({ className, ...props }: TabsProps) => {
	const slots = useMemo(() => tabsVariants(), []);

	return (
		<TabsContext.Provider value={{ slots }}>
			<BaseTabs.Root className={cn(className, slots.root())} {...props} />
		</TabsContext.Provider>
	);
};

// List
interface TabsListProps extends BaseTabs.List.Props {}

const TabsList = ({ className, ...props }: TabsListProps) => {
	const { slots } = useTabs();
	return <BaseTabs.List className={cn(slots.list(), className)} {...props} />;
};

// Tab
interface TabsTabProps extends BaseTabs.Tab.Props {}

const TabsTab = ({ className, ...props }: TabsTabProps) => {
	const { slots } = useTabs();
	return <BaseTabs.Tab className={cn(slots.tab(), className)} {...props} />;
};

// Indicator
interface TabsIndicatorProps extends BaseTabs.Indicator.Props {}

const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
	const { slots } = useTabs();
	return (
		<BaseTabs.Indicator
			className={cn(slots.indicator(), className)}
			{...props}
		/>
	);
};

// Panel
interface TabsPanelProps extends BaseTabs.Panel.Props {}

const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
	const { slots } = useTabs();
	return <BaseTabs.Panel className={cn(slots.panel(), className)} {...props} />;
};

export default Object.assign(Tabs, {
	Indicator: TabsIndicator,
	List: TabsList,
	Panel: TabsPanel,
	Root: Tabs,
	Tab: TabsTab,
});
