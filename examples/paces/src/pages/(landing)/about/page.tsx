import { Container, Separator } from "@fea-ui/react";

export default function Page() {
	return (
		<Container className="my-10">
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-12">
					<div className="flex flex-col items-center">
						<h2 className="text-2xl font-semibold">About PACES</h2>
						<Separator className="w-20 border-2" />
						<p className="text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<div className="col-span-12 my-4" />
				<div className="col-span-12 md:col-span-6">
					<div className="flex h-full flex-col justify-center">
						<h4 className="mb-4 text-xl font-semibold">First Content</h4>
						<p className="text-lg">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
							dignissimos doloribus, fugiat tempore quod consequatur rerum est
							officiis similique ipsa ratione recusandae. Unde distinctio
							assumenda voluptas soluta laborum ullam harum?
						</p>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6">
					<img
						alt="About Illustration"
						className="h-96 w-full rounded"
						src="/undraw_about-us.svg"
					/>
				</div>
				<div className="col-span-12 md:col-span-6">
					<img
						alt="Team Illustration"
						className="h-96 w-full rounded"
						src="/undraw_portfolio.svg"
					/>
				</div>
				<div className="col-span-12 md:col-span-6">
					<div className="flex h-full flex-col justify-center">
						<h4 className="mb-4 text-xl font-semibold">Second Content</h4>
						<p className="text-lg">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
							minima ratione. Corporis suscipit, aspernatur illum quidem,
							praesentium nulla officia, ex iure consectetur cupiditate eaque
							tenetur quos eveniet delectus assumenda eligendi.
						</p>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6">
					<div className="flex h-full flex-col justify-center">
						<h4 className="mb-4 text-xl font-semibold">Third Content</h4>
						<p className="text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
							maiores, laboriosam magnam cumque corporis reiciendis consectetur.
							Quisquam, modi! Quisquam, modi! Laboriosam, ab aspernatur!
							Quisquam, modi! Laboriosam, ab aspernatur!
						</p>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6">
					<img
						alt="Mission Illustration"
						className="h-96 w-full rounded"
						src="/undraw_team.svg"
					/>
				</div>
			</div>
		</Container>
	);
}
