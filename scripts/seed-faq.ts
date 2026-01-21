import 'dotenv/config';
import { getPayload } from 'payload';
import config from '../src/payload.config';

const faqData = [
  {
    question: 'What is USSTM?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'The Undergraduate Science Society of Toronto Metropolitan (USSTM) represents 4000+ science students and 25+ student groups in order to provide services, advocacy and an overall enhanced university experience.',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr' as const,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'General',
    order: 1,
    showOnHomepage: true,
    isPublished: true,
  },
  {
    question: 'How can I stay updated on upcoming events?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'Stay informed about our events by checking our Events Calendar regularly and following us on social media.',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr' as const,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'Events',
    order: 2,
    showOnHomepage: true,
    isPublished: true,
  },
  {
    question: 'What types of events does USSTM host?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'USSTM hosts various Annual Events which support students academically and socially, such as Formals, Networking Night and Week of Welcome. We also host smaller scale events. To see all out past events, you could check out our Yearbook/Gallery',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr' as const,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'Events',
    order: 3,
    showOnHomepage: true,
    isPublished: true,
  },
  {
    question: 'Can I provide academic feedback about courses and professors?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'Absolutely! USSTM gathers feedback about all science courses, all feeback is kept anonymous from professors. To voice your concerns, visit out Academic Feedback page.',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr' as const,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'Academics',
    order: 4,
    showOnHomepage: true,
    isPublished: true,
  },
  {
    question: 'How is USSTM governed?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'USSTM is governed by an elected body of students known as the Board of Directors (BoD). We host bi-weekly meetings which are open to the membership and have a consitution that must be followed. Learn more about our governace.',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr' as const,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'Governance',
    order: 5,
    showOnHomepage: true,
    isPublished: true,
  },
  {
    question: 'How can I get involved?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: "USSTM is made up of 15+ committees, each consisting of approximately 5-10 members. If you're interested in leadership roles or committees, contact us. If you are intrested in joining the Board of Directors, check out our Elections page. We welcome members who are eager to contribute!",
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr' as const,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'Involvement',
    order: 6,
    showOnHomepage: true,
    isPublished: true,
  },
  {
    question: 'How is USSTM funded?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'USSTM is mainly funded through membership fees. Each Faculty of Science student pays a student levy as a part of their tutition. These finances allow us to fund events and services USSTM provides, as well as all the student groups that operate under USSTM. For a full breakdown of our funds and budgeting, visit our budget page.',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr' as const,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'Funding',
    order: 7,
    showOnHomepage: true,
    isPublished: true,
  },
  {
    question: 'Can I apply for funding?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'Yes, we encourage members to apply for funding. USSTM funds students to go to Conferences & Competitions. We also fund students through our Startup Certified service, hosted by the DMZ, which is funding for student startups.',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr' as const,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    category: 'Funding',
    order: 8,
    showOnHomepage: true,
    isPublished: true,
  },
];

async function seed() {
  try {
    const payload = await getPayload({ config });

    console.log('🌱 Seeding FAQ data...');

    // Clear existing FAQs
    const existingFAQs = await payload.find({
      collection: 'faqs',
      limit: 1000,
    });

    if (existingFAQs.docs.length > 0) {
      console.log(`Deleting ${existingFAQs.docs.length} existing FAQs...`);
      for (const faq of existingFAQs.docs) {
        await payload.delete({
          collection: 'faqs',
          id: faq.id,
        });
      }
    }

    // Create new FAQs
    for (const faq of faqData) {
      await payload.create({
        collection: 'faqs',
        // @ts-expect-error - Type mismatch with Lexical richtext format
        data: faq,
      });
      console.log(`✅ ${faq.question}`);
    }

    console.log(`\n🎉 Successfully seeded ${faqData.length} FAQs!`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

seed();
