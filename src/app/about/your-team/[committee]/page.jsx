import { CommitteePage } from ".";
import committees from "../../../../../public/data/about/your-team/your-team.json";

export default function GeneratedPage({ params }) {
    return <CommitteePage params={params}/>;
}

export async function generateStaticParams() {
	return committees.map((committee) => ({
		committee: committee.path,
	}));
}
