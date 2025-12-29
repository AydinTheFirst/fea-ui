import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "FeaUI",
    },
    githubUrl: "https://github.com/AydinTheFirst/fea-ui",
    links: [
      { text: "Docs", url: "/docs" },
      { text: "Components", url: "/docs/components/button" },
      { text: "Roadmap", url: "/roadmap" },
      {
        text: "Storybook",
        url: "https://ui-sb.aydinthefirst.com/",
        external: true,
      },
    ],
  };
}
