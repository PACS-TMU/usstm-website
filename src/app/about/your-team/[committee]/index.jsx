'use client';

import Header from "@/app/_components/general/header";
import Committee from "@/app/about/your-team/_components/committee";
import CommitteeBOD from "@/app/about/your-team/_components/committeeBod";
import { useContentItem } from "@/lib/use-content";


export function CommitteePage({ params }) {
	const { committee } = params;

	const { data } = useContentItem('committees', committee);
	const obj = data ? { id: data.id, name: data.title, path: data.slug, ...data.content } : null;

	return (
        <section>
            <Header title={obj?.name} />
            <div className="main">
                {committee === "bod" ? <CommitteeBOD fileName={committee} /> : <Committee fileName={committee} group="none" />}
            </div>
        </section>
    );
}