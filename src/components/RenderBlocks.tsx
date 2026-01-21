import React from 'react';
import { HeroBlock } from './blocks/HeroBlock';
import { RichTextBlock } from './blocks/RichTextBlock';
import { AboutUsBlock } from './blocks/AboutUsBlock';
import { TextSectionBlock } from './blocks/TextSectionBlock';
import { ImageBlock } from './blocks/ImageBlock';
import { FAQBlock } from './blocks/FAQBlock';
import { TeamGridBlock } from './blocks/TeamGridBlock';
import { CommitteeShowcaseBlock } from './blocks/CommitteeShowcaseBlock';
import { EventsGridBlock } from './blocks/EventsGridBlock';
import { GalleryBlock } from './blocks/GalleryBlock';
import { FourPillarsBlock } from './blocks/FourPillarsBlock';
import { LandAcknowledgementBlock } from './blocks/LandAcknowledgementBlock';
import { StatsBlock } from './blocks/StatsBlock';
import { CardGridBlock } from './blocks/CardGridBlock';
import { CTABlock } from './blocks/CTABlock';
import { EmbedBlock } from './blocks/EmbedBlock';
import type { Page } from '@/payload-types';

type BlocksArray = NonNullable<Page['blocks']>;

interface RenderBlocksProps {
  blocks: BlocksArray;
}

export async function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map((block, index) => {
        const { blockType } = block;

        switch (blockType) {
          case 'hero':
            return (
              <HeroBlock
                key={index}
                title={block.title}
                subtitle={block.subtitle ?? undefined}
                motto={block.motto ?? undefined}
                backgroundImage={typeof block.backgroundImage === 'object' ? block.backgroundImage : undefined}
                overlayOpacity={block.overlayOpacity ?? undefined}
                textAlignment={block.textAlignment ?? undefined}
                stats={
                  block.stats?.map((stat) => ({
                    ...stat,
                    suffix: stat.suffix ?? undefined,
                    icon: typeof stat.icon === 'object' ? stat.icon : undefined,
                  })) ?? undefined
                }
              />
            );

          case 'richText':
            return <RichTextBlock key={index} content={block.content} />;

          case 'aboutUs':
            return <AboutUsBlock key={index} heading={block.heading ?? undefined} content={block.content} />;

          case 'textSection':
            return (
              <TextSectionBlock
                key={index}
                heading={block.heading ?? undefined}
                subheading={block.subheading ?? undefined}
                content={block.content}
                backgroundColor={block.backgroundColor ?? undefined}
                alignment={block.alignment ?? undefined}
              />
            );

          case 'image':
            if (typeof block.image !== 'object') return null;
            return (
              <ImageBlock
                key={index}
                image={block.image}
                alt={block.alt}
                caption={block.caption ?? undefined}
                size={block.size ?? undefined}
                alignment={block.alignment ?? undefined}
              />
            );

          case 'faq':
            return (
              <FAQBlock
                key={index}
                heading={block.heading ?? undefined}
                subheading={block.subheading ?? undefined}
                faqs={block.faqs?.filter((faq): faq is Extract<typeof faq, object> => typeof faq === 'object') ?? []}
                displayLimit={block.displayLimit ?? undefined}
                viewMoreLink={block.viewMoreLink ?? undefined}
              />
            );

          case 'teamGrid':
            return (
              <TeamGridBlock
                key={index}
                heading={block.heading ?? undefined}
                people={
                  block.people?.filter(
                    (person): person is Extract<typeof person, object> => typeof person === 'object'
                  ) ?? []
                }
                columns={block.columns ?? undefined}
                showContactInfo={block.showContactInfo ?? undefined}
              />
            );

          case 'committeeShowcase':
            return (
              <CommitteeShowcaseBlock
                key={index}
                heading={block.heading ?? undefined}
                committees={
                  block.committees?.filter(
                    (committee): committee is Extract<typeof committee, object> => typeof committee === 'object'
                  ) ?? []
                }
                displayStyle={block.displayStyle ?? undefined}
              />
            );

          case 'eventsGrid':
            return (
              <EventsGridBlock
                key={index}
                heading={block.heading ?? undefined}
                events={
                  block.events?.filter((event): event is Extract<typeof event, object> => typeof event === 'object') ??
                  []
                }
                displayStyle={block.displayStyle ?? undefined}
                showDate={block.showDate ?? undefined}
              />
            );

          case 'gallery':
            return (
              <GalleryBlock
                key={index}
                heading={block.heading ?? undefined}
                images={block.images.filter(
                  (image): image is Extract<typeof image, object> => typeof image === 'object'
                )}
                layout={block.layout ?? undefined}
                columns={block.columns ?? undefined}
              />
            );

          case 'fourPillars':
            return (
              <FourPillarsBlock
                key={index}
                heading={block.heading ?? undefined}
                pillars={block.pillars.map((pillar) => ({
                  ...pillar,
                  textColor: pillar.textColor ?? undefined,
                }))}
              />
            );

          case 'landAcknowledgement':
            return (
              <LandAcknowledgementBlock
                key={index}
                heading={block.heading ?? undefined}
                content={block.content}
                backgroundColor={block.backgroundColor ?? undefined}
              />
            );

          case 'stats':
            return (
              <StatsBlock
                key={index}
                stats={block.stats.map((stat) => ({
                  ...stat,
                  suffix: stat.suffix ?? undefined,
                  icon: typeof stat.icon === 'object' ? stat.icon : undefined,
                }))}
                layout={block.layout ?? undefined}
              />
            );

          case 'cardGrid':
            return (
              <CardGridBlock
                key={index}
                heading={block.heading ?? undefined}
                cards={block.cards.map((card) => ({
                  ...card,
                  description: card.description ?? undefined,
                  image: typeof card.image === 'object' ? card.image : undefined,
                  link: card.link ?? undefined,
                }))}
                columns={block.columns ?? undefined}
              />
            );

          case 'cta':
            return (
              <CTABlock
                key={index}
                heading={block.heading}
                description={block.description ?? undefined}
                buttons={block.buttons.map((btn) => ({
                  ...btn,
                  style: btn.style ?? undefined,
                }))}
                alignment={block.alignment ?? undefined}
                backgroundColor={block.backgroundColor ?? undefined}
              />
            );

          case 'embed':
            return <EmbedBlock key={index} embedCode={block.embedCode} aspectRatio={block.aspectRatio ?? undefined} />;

          default:
            console.warn(`Unknown block type: ${blockType}`);
            return null;
        }
      })}
    </>
  );
}
