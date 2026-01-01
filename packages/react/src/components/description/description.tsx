import { Text as AriaText } from "react-aria-components";
import { cn } from "tailwind-variants";
import {
	type DescriptionVariants,
	descriptionVariants,
} from "./description.variants";

// Root
interface DescriptionProps
	extends DescriptionVariants,
		React.ComponentProps<typeof AriaText> {}

const Description = ({ className, ...props }: DescriptionProps) => {
	const styles = descriptionVariants();

	return (
		<AriaText
			className={cn(className, styles)}
			data-slot="description"
			slot="description"
			{...props}
		/>
	);
};

export default Description;
