import React from 'react';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { RenderBlocks } from '@/components/RenderBlocks';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
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
      title: 'Page Not Found',
    };
  }

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || undefined,
    openGraph:
      page.metaImage && typeof page.metaImage === 'object'
        ? {
            images: [
              {
                url: page.metaImage.url || '',
                width: page.metaImage.width || undefined,
                height: page.metaImage.height || undefined,
                alt: page.metaImage.alt || page.title,
              },
            ],
          }
        : undefined,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    limit: 1,
    depth: 2, // Fetch related data for blocks
  });

  const page = result.docs[0];

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <RenderBlocks blocks={page.blocks} />
    </div>
  );
}

export async function generateStaticParams() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const pages = await payload.find({
    collection: 'pages',
    where: {
      status: {
        equals: 'published',
      },
    },
    limit: 100,
  });

  return pages.docs
    .filter((page) => !page.isHomepage) // Exclude homepage from dynamic routes
    .map((page) => ({
      slug: page.slug,
    }));
}
