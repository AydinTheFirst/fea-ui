import { Accordion as BaseAccordion } from "@base-ui/react";
import { LucideChevronDown } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { AccordionContext } from "./accordion.context";
import {
	type AccordionVariants,
	accordionVariants,
} from "./accordion.variants";
import { useAccordion } from "./use-accordion";

// Root
interface AccordionProps extends AccordionVariants, BaseAccordion.Root.Props {}

const Accordion = ({ className, ...props }: AccordionProps) => {
	const slots = useMemo(() => accordionVariants({}), []);

	return (
		<AccordionContext.Provider value={{ slots }}>
			<BaseAccordion.Root className={cn(className, slots.root())} {...props} />
		</AccordionContext.Provider>
	);
};

// Item
interface AccordionItemProps extends BaseAccordion.Item.Props {}

const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
	const { slots } = useAccordion();
	return (
		<BaseAccordion.Item className={cn(className, slots.item())} {...props} />
	);
};

// Header
interface AccordionHeaderProps extends BaseAccordion.Header.Props {}

const AccordionHeader = ({ className, ...props }: AccordionHeaderProps) => {
	const { slots } = useAccordion();
	return (
		<BaseAccordion.Header
			className={cn(className, slots.header())}
			{...props}
		/>
	);
};

// Trigger
interface AccordionTriggerProps extends BaseAccordion.Trigger.Props {}

const AccordionTrigger = ({ className, ...props }: AccordionTriggerProps) => {
	const { slots } = useAccordion();
	return (
		<BaseAccordion.Trigger
			className={cn(className, slots.trigger())}
			{...props}
		/>
	);
};

// Trigger Icon
interface AccordionTriggerIconProps extends React.ComponentProps<"svg"> {}

const AccordionTriggerIcon = ({
	className,
	...props
}: AccordionTriggerIconProps) => {
	const { slots } = useAccordion();
	return (
		<LucideChevronDown
			className={cn(className, slots.triggerIcon())}
			{...props}
		/>
	);
};

// Panel
interface AccordionPanelProps extends BaseAccordion.Panel.Props {}

const AccordionPanel = ({ className, ...props }: AccordionPanelProps) => {
	const { slots } = useAccordion();
	return (
		<BaseAccordion.Panel className={cn(className, slots.panel())} {...props} />
	);
};

// Content
interface AccordionContentProps extends React.ComponentProps<"div"> {}
const AccordionContent = ({ className, ...props }: AccordionContentProps) => {
	const { slots } = useAccordion();
	return <div className={cn(className, slots.content())} {...props} />;
};

// Exports
export default Object.assign(Accordion, {
	Content: AccordionContent,
	Header: AccordionHeader,
	Item: AccordionItem,
	Panel: AccordionPanel,
	Root: Accordion,
	Trigger: AccordionTrigger,
	TriggerIcon: AccordionTriggerIcon,
});
