import { Sidebar } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
	component: Sidebar,
	title: "Components/Sidebar",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Sidebar.Root>
			<Sidebar.Panel>
				<Sidebar.Header>
					Sidebar Header
					<Sidebar.Trigger className="md:hidden" />
				</Sidebar.Header>
				<Sidebar.Content>Sidebar Content</Sidebar.Content>
				<Sidebar.Footer>Sidebar Footer</Sidebar.Footer>
			</Sidebar.Panel>
			<Sidebar.Outlet>
				<Sidebar.Trigger />
				Main Content Area
			</Sidebar.Outlet>
		</Sidebar.Root>
	),
};
