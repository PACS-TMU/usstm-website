import { supabase } from "@/lib/supabase";
import { CommitteePage } from ".";

export default function GeneratedPage({ params }) {
	return <CommitteePage params={params} />;
}

export async function generateStaticParams() {
	const { data, error } = await supabase
		.from("content_items")
		.select(`
			slug,
			category:content_categories!inner()
		`)
		.eq("status", "published")
		.eq("content_categories.slug", "committees")
		.order("sort_order");

	if (error) {
		throw error;
	}

	const committees = data?.map(c => c.slug) || [];

	return committees.map((committee) => ({
		committee,
	}));
}
