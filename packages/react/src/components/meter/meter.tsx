import { Meter as BaseMeter } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";
import { MeterContext } from "./meter.context";
import { type MeterVariants, meterVariants } from "./meter.variants";
import { useMeter } from "./use-meter";

// Root
interface MeterProps extends MeterVariants, BaseMeter.Root.Props {}

const Meter = ({ className, size, variant, ...props }: MeterProps) => {
	const slots = useMemo(
		() => meterVariants({ size, variant }),
		[size, variant],
	);

	return (
		<MeterContext value={{ slots }}>
			<BaseMeter.Root className={cn(className, slots.root())} {...props} />
		</MeterContext>
	);
};

// Label
interface MeterLabelProps extends BaseMeter.Label.Props {}

const MeterLabel = ({ className, ...props }: MeterLabelProps) => {
	const { slots } = useMeter();

	return (
		<BaseMeter.Label className={cn(className, slots.label())} {...props} />
	);
};

// Value
interface MeterValueProps extends BaseMeter.Value.Props {}

const MeterValue = ({ className, ...props }: MeterValueProps) => {
	const { slots } = useMeter();

	return (
		<BaseMeter.Value className={cn(className, slots.value())} {...props} />
	);
};

// Track
interface MeterTrackProps extends BaseMeter.Track.Props {}

const MeterTrack = ({ className, ...props }: MeterTrackProps) => {
	const { slots } = useMeter();
	return (
		<BaseMeter.Track className={cn(className, slots.track())} {...props} />
	);
};

// Indicator
interface MeterIndicatorProps extends BaseMeter.Indicator.Props {}

const MeterIndicator = ({ className, ...props }: MeterIndicatorProps) => {
	const { slots } = useMeter();
	return (
		<BaseMeter.Indicator
			className={cn(className, slots.indicator())}
			{...props}
		/>
	);
};

export default Object.assign(Meter, {
	Indicator: MeterIndicator,
	Label: MeterLabel,
	Root: Meter,
	Track: MeterTrack,
	Value: MeterValue,
});
