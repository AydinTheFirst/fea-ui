import { Button, Container } from "@fea-ui/react";
import CommitteeContent from "./content.mdx";

export default function Page() {
	return (
		<Container className="py-10">
			<article className="prose dark:prose-invert max-w-none">
				<CommitteeContent
					components={{
						Button,
					}}
				/>
			</article>
		</Container>
	);
}
