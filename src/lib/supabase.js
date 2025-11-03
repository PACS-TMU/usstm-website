import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Create a separate Supabase client for the portal
export const portalSupabase = createClient(
	process.env.NEXT_PUBLIC_PORTAL_SUPABASE_URL,
	process.env.NEXT_PUBLIC_PORTAL_SUPABASE_ANON_KEY
);

// Helper function to get public URL for images
export function getImageUrl(path) {
	if (!path) return "/images/placeholder.jpg";

	// If it's already a full URL, return as is
	if (path.startsWith("http")) return path;

	const bucket = path.endsWith('.pdf') ? 'documents' : 'images';

	// Get public URL from Supabase storage
	const { data } = supabase.storage.from(bucket).getPublicUrl(path);

	return data.publicUrl;
}
