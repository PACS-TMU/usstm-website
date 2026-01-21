import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RenderBlocks } from '@/components/RenderBlocks';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const result = await payload.find({
    collection: 'pages',
    where: {
      isHomepage: {
        equals: true,
      },
      status: {
        equals: 'published',
      },
    },
    limit: 1,
  });

  const page = result.docs[0];

  if (!page) {
    return {
      title: 'USSTM',
      description:
        'The Undergraduate Science Society of Toronto Metropolitan homepage. You can find information about our organization, our events, our services, and more, here!',
    };
  }

  return {
    title: page.metaTitle || page.title ? `${page.metaTitle || page.title} - USSTM` : 'USSTM',
    description: page.metaDescription || undefined,
    openGraph: {
      title: page.metaTitle || page.title || 'USSTM',
      description: page.metaDescription || undefined,
      images:
        page.metaImage && typeof page.metaImage === 'object' && page.metaImage.url
          ? [{ url: page.metaImage.url }]
          : undefined,
    },
  };
}

export default async function HomePage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const result = await payload.find({
    collection: 'pages',
    where: {
      isHomepage: {
        equals: true,
      },
      status: {
        equals: 'published',
      },
    },
    limit: 1,
    depth: 2, // Fetch relationships
  });

  const page = result.docs[0];

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <RenderBlocks blocks={page.blocks || []} />
    </div>
  );
}
