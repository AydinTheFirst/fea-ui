import { DialogTrigger as AriaDialogTrigger } from "react-aria-components";

// Root
interface OverlayTriggerProps
	extends React.ComponentProps<typeof AriaDialogTrigger> {}

const OverlayTrigger = ({ ...props }: OverlayTriggerProps) => {
	return <AriaDialogTrigger {...props} />;
};

export default OverlayTrigger;
