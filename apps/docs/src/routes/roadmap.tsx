import { Container, Separator, Table } from "@fea-ui/react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import Footer from "@/components/footer";
import components from "@/data/components.json";
import customComponents from "@/data/custom-components.json";
import { baseOptions } from "@/lib/layout.shared";

export default function Roadmap() {
  const totalComponents = components.length;
  const notStartedComponents = components.filter(
    (component) => component.status === "not_started",
  ).length;

  const currentCoverage = Math.round(
    ((totalComponents - notStartedComponents) / totalComponents) * 100,
  );
  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "completed":
        return <span className="text-green-500">🟢</span>;
      case "in_progress":
        return <span className="text-yellow-500">🟡</span>;
      case "not_planned":
        return <span className="text-gray-500">⚪</span>;
      case "not_started":
        return <span className="text-red-500">🔴</span>;
      default:
        return <span>unknown</span>;
    }
  };

  return (
    <HomeLayout {...baseOptions()}>
      <Container className="my-10">
        <section>
          <h1 className="mb-6 text-4xl font-bold">FeaUI Roadmap</h1>
          <h4 className="text-lg font-semibold">
            🟢 Completed &nbsp; 🟡 In Progress &nbsp; ⚪ Not Planned &nbsp; ❓
          </h4>
          <p className="text-muted-foreground">
            Styled and Varianted components built on top of BaseUI components.
            <br />
            Current Component Coverage: {currentCoverage}%
          </p>
          <br />
          <Table>
            <Table.Head>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Component Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Head>
            <Table.Body>
              {components.map((component) => (
                <Table.Row key={component.name}>
                  <Table.DataCell>
                    <StatusIcon status={component.status} />
                  </Table.DataCell>
                  <Table.DataCell>{component.name}</Table.DataCell>
                  <Table.DataCell>{component.description}</Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <br />
          <p className="text-muted-foreground">
            Current Component Coverage: {currentCoverage}%
          </p>
        </section>
        <Separator className="my-10" />

        <section>
          <h1 className="mb-6 text-4xl font-bold">FeaUI Custom Components</h1>
          <h4 className="text-lg font-semibold">
            🟢 Completed &nbsp; 🟡 In Progress &nbsp; ⚪ Not Planned &nbsp; ❓
          </h4>
          <p className="text-muted-foreground">
            Custom components built using HTML elements outside BaseUI.
          </p>
          <br />
          <Table>
            <Table.Head>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Component Name</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Head>
            <Table.Body>
              {customComponents.map((component) => (
                <Table.Row key={component.name}>
                  <Table.DataCell>
                    <StatusIcon status={component.status} />
                  </Table.DataCell>
                  <Table.DataCell>{component.name}</Table.DataCell>
                  <Table.DataCell>{component.description}</Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <br />
        </section>
      </Container>
      <Footer />
    </HomeLayout>
  );
}
