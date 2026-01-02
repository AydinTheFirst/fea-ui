import { cn } from "@fea-ui/react";
import type { LinkProps } from "react-router";
import { Link as RouterLink } from "react-router";

export default function Link({ className, ...props }: LinkProps) {
	return <RouterLink className={cn("link", className)} {...props} />;
}
