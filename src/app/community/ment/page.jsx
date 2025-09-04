import Header from "@/app/_components/general/header";
import Image from "next/image";

export default function MentApp() {
	return (
		<section className="lg:text-lg">
			<Header title={`Ment App`} />
			<div className="main">
				<div className="w-full flex flex-col gap-6 justify-center items-center">
					<Image
						src={getImageUrl('community/ment/ment-logo.png')}
						alt="Ment App Logo"
						height={600}
						width={600}
						priority={true}
					/>
				</div>
				<div className="lg:text-lg space-y-5">
					<h2 className="pb-3 pt-5 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide">
						What is Ment?
					</h2>
					<p>
						Ment is a mentorship app that efficiently connects
						mentors and mentees across all disciplines and
						professional stages. USSTM is subscribed to Ment, so all
						Faculty of Science students at TMU can use the app for
						free—just sign up with your university email.
					</p>
					<p>Ment streamlines mentorship by offering:</p>
					<ul className="list-disc ml-6 mt-2">
						<li>
							<strong>Accessible Communication:</strong> In-app
							chat for convenient, casual conversation.
						</li>
						<li>
							<strong>Personalized Search:</strong> Algorithmic
							matching based on interest tags to find suitable
							mentors and mentees.
						</li>
					</ul>
					<div className="flex gap-4 mt-4">
						<a
							href="https://apps.apple.com/ca/app/ment-inc/id6575346312"
							target="_blank"
							rel="noopener"
							className="link-button bg-highlight-dark text-background px-4 py-2 rounded font-semibold hover:bg-highlight hover:text-background"
						>
							Download for iPhone
						</a>
						<a
							href="https://play.google.com/store/apps/details?id=com.hfarooq2.MentApp&pcampaignid=web_share&pli=1"
							target="_blank"
							rel="noopener"
							className="link-button bg-highlight-dark text-background px-4 py-2 rounded font-semibold hover:bg-highlight hover:text-background"
						>
							Download for Android
						</a>
					</div>
				</div>
			</div>
			<div className="mt-8 text-center text-lg">
				<p>
					Learn more at{" "}
					<a
						href="https://www.ment-projects.com/the-app"
						target="_blank"
						rel="noopener"
						className="underline text-highlight-dark"
					>
						ment-projects.com/the-app
					</a>
				</p>
			</div>
		</section>
	);
}
