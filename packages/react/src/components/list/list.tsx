import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { ListContext } from "./list.context";
import { type ListVariants, listVariants } from "./list.variants";
import { useList } from "./use-list";

interface ListProps extends ListVariants, React.ComponentProps<"ul"> {}

const List = ({ className, ...props }: ListProps) => {
	const slots = useMemo(() => listVariants(), []);

	return (
		<ListContext.Provider value={{ slots }}>
			<ul className={cn(className, slots.root())} {...props} />
		</ListContext.Provider>
	);
};

interface ListItemProps extends React.ComponentProps<"li"> {}

const ListItem = ({ className, ...props }: ListItemProps) => {
	const { slots } = useList();

	return <li className={cn(className, slots.item())} {...props} />;
};

export default Object.assign(List, {
	Item: ListItem,
	Root: List,
});
