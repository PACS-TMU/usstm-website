'use client';

import Header from "@/app/_components/general/header";
import Committee from "@/app/about/your-team/_components/committee";
import CommitteeBOD from "@/app/about/your-team/_components/committeeBod";

import { useEffect, useState } from 'react';

export function CommitteePage({ params }) {
	const [data, setData] = useState([]);
	const [obj, setObj] = useState({ "committee-name": "" });

	const { committee } = params;

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/about/your-team/your-team.json`)
			.then((res) => res.json())
			.then((json) => {
				setData(json);
			});
	}, []);

	useEffect(() => {
		setObj(data?.find(d => d.path === committee) ?? { "committee-name": "" })
	}, [data]);

	return (
        <section>
            <Header title={obj['committee-name']} />
            <div className="main">
                {committee === "bod" ? <CommitteeBOD fileName={committee} /> : <Committee fileName={committee} group="none" />}
            </div>
        </section>
    );
}