import { Button, Container } from "@fea-ui/react";
import CfpContent from "./content.mdx";

export default function Page() {
	return (
		<Container className="py-10">
			<article className="prose dark:prose-invert max-w-none">
				<CfpContent
					components={{
						Button,
					}}
				/>
			</article>
		</Container>
	);
}
