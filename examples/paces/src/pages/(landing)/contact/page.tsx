import {
	Button,
	Card,
	Container,
	Field,
	Separator,
	Textarea,
} from "@fea-ui/react";

export default function Contact() {
	return (
		<Container className="my-10">
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-12">
					<div className="flex flex-col items-center">
						<h2 className="text-2xl font-semibold">Contact With Us</h2>
						<Separator className="w-20 border-2" />
						<p className="text-muted-foreground">
							For inquiries, please email us at contact@paces.com
						</p>
					</div>
				</div>
				<div className="col-span-12"></div>
				<div className="col-span-12 md:col-span-6">
					<Card className="w-full max-w-none">
						<Card.Header>
							<Card.Title className="text-lg font-semibold">
								Contact Form
							</Card.Title>
							<Card.Description className="text-muted-foreground">
								We would love to hear from you! Please fill out the form below
								and we will get back to you as soon as possible.
							</Card.Description>
						</Card.Header>
						<Card.Body>
							<form className="grid grid-cols-12 gap-4">
								<Field className="col-span-12 md:col-span-6">
									<Field.Label>Name</Field.Label>
									<Field.Control placeholder="Your Name" required type="text" />
									<Field.Error />
								</Field>
								<Field className="col-span-12 md:col-span-6">
									<Field.Label>Email</Field.Label>
									<Field.Control
										placeholder="Your Email"
										required
										type="email"
									/>
									<Field.Error />
								</Field>
								<Field className="col-span-12">
									<Field.Label>Message</Field.Label>
									<Textarea placeholder="Your Message" required />
									<Field.Error />
								</Field>
								<div className="col-span-12">
									<Button type="submit">Submit</Button>
								</div>
							</form>
						</Card.Body>
					</Card>
				</div>
				<div className="col-span-12 md:col-span-6 hidden md:block">
					<div className="grid place-items-center h-full">
						<img
							alt="Contact Illustration"
							className="w-full rounded max-w-md"
							src="/contact-illustration.svg"
						/>
					</div>
				</div>
			</div>
		</Container>
	);
}
