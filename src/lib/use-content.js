import { useState, useEffect } from "react";
import { supabase } from "./supabase";

/**
 * Hook to fetch content from Supabase by category
 * @param {string} categorySlug - The category slug to fetch content for
 * @param {object} options - Additional options for the query
 */
export function useContent(categorySlug, options = {}) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchContent() {
			try {
				setLoading(true);

				let query = supabase
					.from("content_items")
					.select(
						`
            *,
            category:content_categories!inner(),
            media:content_media_relations(
              relation_type,
              sort_order,
              media_asset:media_assets(*)
            )
          `
					)
					.eq("status", "published")
					.order("sort_order");

				// If categorySlug is provided, filter by category
				if (categorySlug) {
					query = query.eq("content_categories.slug", categorySlug);
				}

				// Apply additional filters from options
				if (options.slug) {
					query = query.eq("slug", options.slug);
				}

				if (options.limit) {
					query = query.limit(options.limit);
				}

				const { data: content, error } = await query;

				if (error) throw error;

				// Transform data to include image URLs
				const transformedData = content.map((item) => ({
					...item,
					images:
						item.media?.map((m) => ({
							...m.media_asset,
							url: getImageUrl(m.media_asset.file_path),
							relationType: m.relation_type,
						})) || [],
				}));

				setData(transformedData);
			} catch (err) {
				setError(err);
				console.error("Error fetching content:", err);
			} finally {
				setLoading(false);
			}
		}

		fetchContent();
	}, [categorySlug, options.slug, options.limit]);

	return { data, loading, error, refetch: () => fetchContent() };
}

/**
 * Hook to fetch a single content item by slug
 * @param {string} categorySlug - The category slug
 * @param {string} itemSlug - The item slug
 */
export function useContentItem(categorySlug, itemSlug) {
	const { data, loading, error } = useContent(categorySlug, {
		slug: itemSlug,
		limit: 1,
	});

	return {
		data: data[0] || null,
		loading,
		error,
	};
}

// Helper function to get image URL (moved from supabase.js for easy import)
function getImageUrl(path) {
	if (!path) return "/images/placeholder.jpg";

	if (path.startsWith("http")) return path;

	const { data } = supabase.storage.from("images").getPublicUrl(path);

	return data.publicUrl;
}
