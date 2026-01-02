import { Container } from "@fea-ui/react";
import Markdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Link from "~/components/link";
import { extractHeadings } from "~/lib/extract-headings";

interface ContentPageProps {
	md: string;
}

export default function ContentPage({ md }: ContentPageProps) {
	const toc = extractHeadings(md);

	return (
		<Container className="my-10">
			<div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]">
				<nav className="sticky top-20 hidden self-start lg:block">
					<h2 className="mb-4 font-semibold text-lg">Table of Contents</h2>
					<ul className="space-y-2">
						{toc.map((heading) => (
							<li className={`ms-${(heading.depth - 1) * 4}`} key={heading.id}>
								<Link className="hover:underline" to={`#${heading.id}`}>
									{heading.text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<article className="prose dark:prose-invert max-w-none">
					<Markdown rehypePlugins={[rehypeSlug]} remarkPlugins={[remarkGfm]}>
						{md}
					</Markdown>
				</article>
			</div>
		</Container>
	);
}
