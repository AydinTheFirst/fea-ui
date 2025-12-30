import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { CardContext } from "./card.context";
import { type CardVariants, cardVariants } from "./card.variants";
import { useCard } from "./use-card";

export interface CardProps extends CardVariants, React.ComponentProps<"div"> {}

const Card = ({ className, variant, ...props }: CardProps) => {
	const slots = useMemo(() => cardVariants({ variant }), [variant]);

	console.log(slots);

	return (
		<CardContext.Provider value={{ slots }}>
			<div className={cn(className, slots.root())} {...props} />
		</CardContext.Provider>
	);
};

export interface CardHeaderProps extends React.ComponentProps<"div"> {}

const CardHeader = ({ className, ...props }: CardHeaderProps) => {
	const { slots } = useCard();

	return <div className={cn(className, slots.header())} {...props} />;
};

export interface CardBodyProps extends React.ComponentProps<"div"> {}

const CardBody = ({ className, ...props }: CardBodyProps) => {
	const { slots } = useCard();

	return <div className={cn(className, slots.body())} {...props} />;
};

export interface CardFooterProps extends React.ComponentProps<"div"> {}

const CardFooter = ({ className, ...props }: CardFooterProps) => {
	const { slots } = useCard();

	return <div className={cn(className, slots.footer())} {...props} />;
};

export interface CardTitle extends React.ComponentProps<"h2"> {}

const CardTitle = ({ className, ...props }: CardTitle) => {
	const { slots } = useCard();

	return <h2 className={cn(className, slots.title())} {...props} />;
};

export interface CardDescriptionProps extends React.ComponentProps<"p"> {}

const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
	const { slots } = useCard();

	return <p className={cn(className, slots.description())} {...props} />;
};

/** Exports */
export default Object.assign(Card, {
	Body: CardBody,
	Description: CardDescription,
	Footer: CardFooter,
	Header: CardHeader,
	Root: Card,
	Title: CardTitle,
});
