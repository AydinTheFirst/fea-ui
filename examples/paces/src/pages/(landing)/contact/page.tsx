import {
	Button,
	Card,
	Container,
	Description,
	FieldError,
	Input,
	Label,
	Separator,
	Textarea,
	TextField,
} from "@fea-ui/react";
import images from "~/assets/images";

export default function Contact() {
	return (
		<Container className="my-10">
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-12">
					<div className="flex flex-col items-center">
						<h2 className="font-semibold text-2xl">Contact With Us</h2>
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
							<Card.Title className="font-semibold text-lg">
								Contact Form
							</Card.Title>
							<Card.Description className="text-muted-foreground">
								We would love to hear from you! Please fill out the form below
								and we will get back to you as soon as possible.
							</Card.Description>
						</Card.Header>
						<Card.Body>
							<form className="grid grid-cols-12 gap-4">
								<TextField className="col-span-12 md:col-span-6" isRequired>
									<Label>Name</Label>
									<Input type="text" />
									<Description>Your full name.</Description>
									<FieldError />
								</TextField>
								<TextField className="col-span-12 md:col-span-6" isRequired>
									<Label>Email</Label>
									<Input type="email" />
									<Description>Your email address.</Description>
									<FieldError />
								</TextField>
								<TextField className="col-span-12" isRequired>
									<Label>Message</Label>
									<Textarea rows={5} />
									<Description>Your message to us.</Description>
									<FieldError />
								</TextField>
								<div className="col-span-12">
									<Button className="w-full" type="submit">
										Submit
									</Button>
								</div>
							</form>
						</Card.Body>
					</Card>
				</div>
				<div className="col-span-12 hidden md:col-span-6 md:block">
					<div className="grid h-full place-items-center">
						<img
							alt="Contact Illustration"
							className="w-full max-w-md rounded"
							src={images.contact}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
}
