import { Progress as BaseProgress } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { ProgressContext } from "./progress.context";
import { type ProgressVariants, progressVariants } from "./progress.variants";
import { useProgress } from "./use-progress";

// Root
interface ProgressProps extends ProgressVariants, BaseProgress.Root.Props {}

const Progress = ({ className, variant, size, ...props }: ProgressProps) => {
	const slots = useMemo(
		() => progressVariants({ size, variant }),
		[variant, size],
	);

	return (
		<ProgressContext value={{ slots }}>
			<BaseProgress.Root className={cn(className, slots.root())} {...props} />
		</ProgressContext>
	);
};

// Label
interface ProgressLabelProps extends BaseProgress.Label.Props {}

const ProgressLabel = ({ className, ...props }: ProgressLabelProps) => {
	const { slots } = useProgress();
	return (
		<BaseProgress.Label className={cn(className, slots.label())} {...props} />
	);
};

// Value
interface ProgressValueProps extends BaseProgress.Value.Props {}
const ProgressValue = ({ className, ...props }: ProgressValueProps) => {
	const { slots } = useProgress();
	return (
		<BaseProgress.Value className={cn(className, slots.value())} {...props} />
	);
};

// Track
interface ProgressTrackProps extends BaseProgress.Track.Props {}
const ProgressTrack = ({ className, ...props }: ProgressTrackProps) => {
	const { slots } = useProgress();
	return (
		<BaseProgress.Track className={cn(className, slots.track())} {...props} />
	);
};

// Indicator
interface ProgressIndicatorProps extends BaseProgress.Indicator.Props {}
const ProgressIndicator = ({ className, ...props }: ProgressIndicatorProps) => {
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
