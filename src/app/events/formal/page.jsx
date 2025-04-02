"use client";

import Image from 'next/image';
import Header from '@/app/_components/general/header';
import Tickets from './tickets';
import { Suspense, useState } from 'react';
import SearchParamsHandler from './searchParamsHandler';

export default function Formal() {
  const [showSuccess, setShowSuccess] = useState(false);

  const tickets = [
    {
      title: 'Early Bird Ticket',
      link: 'https://square.link/u/KqoCzwdY?src=embed',
    },
    {
      title: 'Regular FOS Ticket',
      link: 'https://square.link/u/IycvghAG?src=embed',
    },
    {
      title: 'Guest (non FOS) Ticket',
      link: 'https://square.link/u/ET7rdLOH?src=embed',
    },
    {
      title: 'Table Ticket (10 people)',
      link: 'https://square.link/u/wOKY6dqm?src=embed',
    }
  ]

  return (
    <section id="formal">
      {showSuccess && (
        <div className="fixed w-2/3 lg:w-1/3 xl:w-1/4 bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
          Thank you for your purchase! You will receive a confirmation email shortly with your checkout details.
        </div>
      )}

      <Suspense>
        <SearchParamsHandler onSuccess={() => {
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
        }} />
      </Suspense>

      <Header title={"Formal at Liberty Grand"} />
      <div className='main lg:text-lg'>
        <p className="mb-8">
          Join us for the annual end-of-year Formal, hosted at the end of each academic year (late April or early May)
          at the iconic <span className="font-semibold">Liberty Grand Hotel</span>.
          Dress to impress and celebrate the academic year&apos;s end with style, music,
          and unforgettable memories.
        </p>

        <Image
          src="/images/events/formal/liberty-grand.jpg"
          alt="Liberty Grand Hotel"
          className="rounded-2xl shadow-lg mb-8 mx-auto w-4/5 lg:w-1/2 h-auto"
          width={800}
          height={600}
        />

        <p className="text-2xl font-semibold mb-2 lg:mb-4">Tickets for the 2025 Formal</p>
        <p className="text-lg xl:text-xl mb-4">
          Tickets are available for purchase now! Clicking the button below will redirect you to the
          Square website where you can purchase your tickets. After purchasing, you will receive a confirmation
          email. Your tickets will be emailed to you closer to the event date.
        </p>
        <p className="text-lg xl:text-xl mb-4">
          For Alumni/Grad tickets, please visit us at the Science Lounge to purchase your tickets in person and
          provide proof of graduation. We will be accepting cash, debit, and credit for these tickets. You can
          find more information about our in-person selling
          on <a href="https://www.instagram.com/p/DHuWxzTvvkM/?img_index=1" target='_blank'>our instagram</a>.
        </p>
        <p className="text-lg xl:text-xl mb-4">
          Please note that tickets are non-refundable and non-transferable. By purchasing a ticket, you agree
          to these terms. Tickets will be available for purchase until the day of the event, or until they
          sell out. If you have any questions or concerns, please contact us
          at <a href='mailto:vp.events@usstm.ca' target='_blank'>vp.events@usstm.ca</a>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[95%] mx-auto mb-8">
          {tickets.map((ticket, index) => (
            <Tickets key={index} title={ticket.title} link={ticket.link} />
          ))}
        </div>

        <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
          <p className="text-2xl font-semibold mb-2 lg:mb-4">Event Highlights</p>
          <ul className="list-disc list-inside text-left text-base xl:text-xl space-y-1">
            <li>Elegant venue at the Liberty Grand</li>
            <li>Three-course dinner and refreshments</li>
            <li>Live DJ and dance floor</li>
            <li>Photobooths and professional photography</li>
            <li>Formal dress code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
