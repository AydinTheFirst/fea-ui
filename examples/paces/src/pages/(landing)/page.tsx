import { Button, Container, Separator } from "@fea-ui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";
import { StickyScrollCarousel } from "~/components/carousel";

export default function HelloWorld() {
	return (
		<Container className="my-10">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col gap-4 justify-center">
					<h1 className="text-4xl font-bold">PACES</h1>
					<p className="max-w-xl text-lg text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
						dolorem sit ad aliquam! Iste, hic quibusdam debitis maiores ad quod
						dolore et nostrum exercitationem error fugit voluptate earum fuga
						laudantium!
					</p>
					<div className="flex  gap-2">
						<Button size="lg" variant="primary">
							<Icon icon="mdi:rocket-launch" />
							Explore
						</Button>
						<Button size="lg" variant="outline">
							<Icon icon="mdi:information" />
							Learn More
						</Button>
					</div>
					<Separator className="w-96" />
					<Link className="text-lg font-medium" to="/about">
						<h3>
							10th PACES will be held on 00-00 Click here for more information.
						</h3>
					</Link>
				</div>
				<div className="grid place-items-center">
					<img
						alt="Landing Illustration"
						className="w-full max-w-md rounded"
						src="/undraw_conference.svg"
					/>
				</div>
			</div>

			<StickyScrollCarousel
				images={[
					[
						"https://picsum.photos/id/1011/600/400",
						"https://picsum.photos/id/1012/600/400",
						"https://picsum.photos/id/1013/600/400",
					],
					[
						"https://picsum.photos/id/1014/600/400",
						"https://picsum.photos/id/1015/600/400",
					],
					[
						"https://picsum.photos/id/1016/600/400",
						"https://picsum.photos/id/1018/600/400",
						"https://picsum.photos/id/1019/600/400",
					],
				]}
			/>
		</Container>
	);
}
