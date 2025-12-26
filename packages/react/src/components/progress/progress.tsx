import { Progress as BaseProgress } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { ProgressContext } from "./progress.context";
import { type ProgressVariants, progressVariants } from "./progress.variants";
import { useProgress } from "./use-progress";

// Root
interface ProgressProps extends ProgressVariants, BaseProgress.Root.Props {}

const Progress = ({ className, ...props }: ProgressProps) => {
	const slots = useMemo(() => progressVariants(), []);

	return (
		<ProgressContext value={{ slots }}>
			<BaseProgress.Root className={cn(className, slots.root())} {...props} />
		</ProgressContext>
	);
};

// Label
const ProgressLabel = ({ className, ...props }: BaseProgress.Label.Props) => {
	const { slots } = useProgress();
	return (
		<BaseProgress.Label className={cn(className, slots.label())} {...props} />
	);
};

// Value
const ProgressValue = ({ className, ...props }: BaseProgress.Value.Props) => {
	const { slots } = useProgress();
	return (
		<BaseProgress.Value className={cn(className, slots.value())} {...props} />
	);
};

// Track
const ProgressTrack = ({ className, ...props }: BaseProgress.Track.Props) => {
	const { slots } = useProgress();
	return (
		<BaseProgress.Track className={cn(className, slots.track())} {...props} />
	);
};

// Indicator
const ProgressIndicator = ({
	className,
	...props
}: BaseProgress.Indicator.Props) => {
	const { slots } = useProgress();
	return (
		<BaseProgress.Indicator
			className={cn(className, slots.indicator())}
			{...props}
		/>
	);
};

// Exports
Progress.Label = ProgressLabel;
Progress.Value = ProgressValue;
Progress.Track = ProgressTrack;
Progress.Indicator = ProgressIndicator;
Progress.Root = Progress;

export default Progress;
