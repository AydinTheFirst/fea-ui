import { buttonVariants, Chip } from "@fea-ui/react";
import { Icon } from "@iconify/react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Link } from "react-router";
import Footer from "src/components/footer";
import { baseOptions } from "src/lib/layout.shared";

export function meta() {
  return [
    { title: "FeaUI React" },
    {
      name: "description",
      content:
        "A lightweight, accessible React component library built on top of Base UI.",
    },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="p-4 gap-4 flex flex-col items-center justify-center text-center flex-1">
        <Chip>v1.0.0-beta.1</Chip>
        <h1 className="text-7xl font-bold mb-2">FeaUI</h1>
        <p className="text-fd-muted-foreground mb-4">
          A lightweight, accessible React component library built on top of{" "}
          <a href="https://base-ui.com/" className="text-fd-primary underline">
            Base UI
          </a>
          .
        </p>
        <div className="flex gap-4">
          <Link to={"/docs"} className={buttonVariants({ variant: "primary" })}>
            <Icon icon="mdi:book-open-page-variant" />
            Open Docs
          </Link>
          <Link
            to={"https://github.com/aydinthefirst/fea-ui"}
            className={buttonVariants({ variant: "secondary" })}
            target="_blank"
          >
            <Icon icon="mdi:github" />
            View on GitHub
          </Link>
        </div>
      </div>
      <Footer />
    </HomeLayout>
  );
}
