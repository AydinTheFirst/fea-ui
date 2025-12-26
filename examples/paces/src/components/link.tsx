import { linkVariants } from "@fea-ui/react";
import type { LinkProps } from "react-router";
import { Link as RouterLink } from "react-router";

export default function Link({ className, ...props }: LinkProps) {
	const styles = linkVariants({ className });
	return <RouterLink className={styles} {...props} />;
}
