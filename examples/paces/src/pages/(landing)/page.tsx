import { Alert, Button, Container, Separator } from "@fea-ui/react";
import { Icon } from "@iconify/react";
import images from "~/assets/images";
import Link from "~/components/link";

export default function HelloWorld() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<SecondSection />
		</div>
	);
}

function HeroSection() {
	return (
		<Container className="my-10">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col justify-center gap-4">
					<h1 className="font-bold text-4xl">PACES</h1>
					<p className="max-w-xl text-lg text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
						dolorem sit ad aliquam! Iste, hic quibusdam debitis maiores ad quod
						dolore et nostrum exercitationem error fugit voluptate earum fuga
						laudantium!
					</p>
					<div className="flex gap-2">
						<Button size="lg" variant="primary">
							<Icon icon="mdi:rocket-launch" />
							Explore
						</Button>
						<Button size="lg" variant="secondary">
							<Icon icon="mdi:information" />
							Learn More
						</Button>
					</div>
					<Separator className="max-w-96" />
					<Link className="font-medium text-lg" to="/about">
						<h3>
							10th PACES will be held on 00-00 Click here for more information.
						</h3>
					</Link>
				</div>
				<div className="grid place-items-center">
					<img
						alt="Landing Illustration"
						className="w-full max-w-md rounded"
						src={images.hero}
					/>
				</div>
			</div>
		</Container>
	);
}

function SecondSection() {
	return (
		<Container className="my-10">
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 md:col-span-6">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<h3 className="font-medium text-xl">Announcements</h3>
						<div className="flex justify-end">
							<Link to="/announcements">
								See All
								<Icon className="ml-1" icon="mdi:arrow-right" />
							</Link>
						</div>
					</div>
					<Separator />
					<Alert.Root variant="primary">
						<Alert.Indicator />
						<Alert.Content>
							<Alert.Title>Welcome to PACES 2024!</Alert.Title>
							<Alert.Description>
								We are excited to announce that the 10th edition of PACES will
								take place on 00-00 at Location. Stay tuned for more details!
							</Alert.Description>
							<div className="flex justify-end">
								<Link to="/announcements">
									Read More
									<Icon className="ml-1" icon="mdi:arrow-right" />
								</Link>
							</div>
						</Alert.Content>
					</Alert.Root>
				</div>
				<div className="col-span-12 md:col-span-6">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<h3 className="font-medium text-xl">Coming Events</h3>
						<div className="flex justify-end">
							<Link to="/events">
								See All
								<Icon className="ml-1" icon="mdi:arrow-right" />
							</Link>
						</div>
					</div>
					<Separator />
					<Alert.Root variant="primary">
						<Alert.Indicator />
						<Alert.Content>
							<Alert.Title>No upcoming events at the moment.</Alert.Title>
						</Alert.Content>
					</Alert.Root>
				</div>
				<div className="col-span-12">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<h3 className="font-medium text-xl">Latest News</h3>
						<div className="flex justify-end">
							<Link to="/news">
								See All
								<Icon className="ml-1" icon="mdi:arrow-right" />
							</Link>
						</div>
					</div>
					<Separator />
					<Alert.Root variant="primary">
						<Alert.Indicator />
						<Alert.Content>
							<Alert.Title>No news available at the moment.</Alert.Title>
						</Alert.Content>
					</Alert.Root>
				</div>
			</div>
		</Container>
	);
}
