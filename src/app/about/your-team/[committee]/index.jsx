'use client';

import Header from "@/app/_components/general/header";
import Committee from "@/app/about/your-team/_components/committee";
import CommitteeBOD from "@/app/about/your-team/_components/committeeBod";

import { useEffect, useState } from 'react';

export function CommitteePage({ params }) {
	const { data } = useContentItem('committees', committee);
	const obj = { id: data.id, name: data.title, path: data.slug, ...data.content };

	return (
        <section>
            <Header title={obj.name} />
            <div className="main">
                {committee === "bod" ? <CommitteeBOD fileName={committee} /> : <Committee fileName={committee} group="none" />}
            </div>
        </section>
    );
}