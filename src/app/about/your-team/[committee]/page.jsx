import { CommitteePage } from ".";

export default function GeneratedPage({ params }) {
    return <CommitteePage params={params}/>;
}


export async function generateStaticParams() {
	const committees = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/about/your-team/your-team.json`).then((res) => res.json());

	return committees.map((committee) => ({
		committee: committee.path,
	}));
}
