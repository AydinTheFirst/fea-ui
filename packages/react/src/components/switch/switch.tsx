import { Switch as BaseSwitch } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { SwitchContext } from "./switch.context";
import { type SwitchVariants, switchVariants } from "./switch.variants";
import { useSwitch } from "./use-switch";

// Root
interface SwitchProps extends SwitchVariants, BaseSwitch.Root.Props {}

const Switch = ({ className, size, ...props }: SwitchProps) => {
	const slots = useMemo(() => switchVariants({ size }), [size]);

	return (
		<SwitchContext.Provider value={{ slots }}>
			<BaseSwitch.Root className={cn(className, slots.root())} {...props} />
		</SwitchContext.Provider>
	);
};

// Thumb
const SwitchThumb = ({ className, ...props }: BaseSwitch.Thumb.Props) => {
	const { slots } = useSwitch();

	return (
		<BaseSwitch.Thumb className={cn(className, slots.thumb())} {...props} />
	);
};

export default Object.assign(Switch, {
	Root: Switch,
	Thumb: SwitchThumb,
});
