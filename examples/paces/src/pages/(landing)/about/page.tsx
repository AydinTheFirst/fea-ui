import { Button, Container } from "@fea-ui/react";
import AboutContent from "./content.mdx";

export default function Page() {
	return (
		<Container className="py-10">
			<article className="prose dark:prose-invert max-w-none">
				<AboutContent
					components={{
						Button,
					}}
				/>
			</article>
		</Container>
	);
}
