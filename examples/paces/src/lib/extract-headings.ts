import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

export type TocItem = {
	depth: number;
	text: string;
	id: string;
};

export function extractHeadings(md: string): TocItem[] {
	const tree = unified().use(remarkParse).parse(md);
	const headings: TocItem[] = [];

	visit(tree, "heading", (node) => {
		if (node.depth < 2 || node.depth > 3) return;

		const text = node.children
			.filter((c) => c.type === "text")
			.map((c) => c.value)
			.join("");

		const id = text
			.toLowerCase()
			.replace(/[^\w]+/g, "-")
			.replace(/(^-|-$)/g, "");

		headings.push({
			depth: node.depth,
			id,
			text,
		});
	});

	return headings;
}
