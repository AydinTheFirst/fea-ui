import { List, linkVariants, Separator } from "@fea-ui/react";
import { Link } from "react-router";

const docsLinks = [
  { name: "Introduction", href: "/docs/introduction" },
  { name: "Components", href: "/docs/components/button" },
  { name: "Theming", href: "/docs/styling" },
];

const communityLinks = [
  { name: "GitHub", href: "https://github.com/aydinthefirst/fea-ui" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/30 text-secondary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">FeaUI</h3>
              <p className="text-fd-muted-foreground text-sm">
                FeaUI is a lightweight, accessible React component library built
                on top of Base UI.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-md mb-2 font-semibold">Docs</h4>
            <List>
              {docsLinks.map((link) => (
                <List.Item key={link.href}>
                  <Link to={link.href} className={linkVariants()}>
                    {link.name}
                  </Link>
                </List.Item>
              ))}
            </List>
          </div>
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-md mb-2 font-semibold">Community</h4>
            <List>
              {communityLinks.map((link) => (
                <List.Item key={link.href}>
                  <Link
                    to={link.href}
                    className={linkVariants()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </List.Item>
              ))}
            </List>
          </div>
          <Separator className="col-span-12" />
          <div className="col-span-12">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <p className="text-fd-muted-foreground text-sm">
                © {new Date().getFullYear()} FeaUI. All rights reserved.
              </p>
              <p className="text-fd-muted-foreground text-right text-sm">
                Built by{" "}
                <Link
                  to="https://aydinthefirst.com"
                  className={linkVariants()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AydinTheFirst
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
