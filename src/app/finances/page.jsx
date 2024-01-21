'use client'
import Header from "@/app/_components/general/header";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Finance() {
    const [financeItems, setFinanceItems] = useState([]);

    useEffect(() => {
        fetchNavItems();
    }, []);

    const fetchNavItems = async () => {
        try {
                const res = await fetch('/data/nav-items.json');
                const data = await res.json();
                setFinanceItems(data);
            } catch (error) {
                console.error('Error fetching past-boards data:', error);
            }
    };

    let subItems = [];

    financeItems.map(item => {
        if (item.id === 5) {
            subItems = item.subItems;
        }
    });

    console.log(subItems);

    return (
        <section className="min-h-[85vh]">
            <Header title={`Finance`} />

            <div className="container p-4 mx-auto main text-center">
                <p className="text-xl font-semibold mb-4">Sorry, but we could not find what you were looking for. did you mean one of these?</p>

                <div className="flex flex-wrap gap-10 mx-auto justify-center">
                    {subItems.map((subItem) => (
                        <div key={subItem.id} className="mb-4 flex flex-col bg-gray-100 shadow-md p-4 w-[90%] md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-md">
                            <Link href={subItem.path}>
                                <p className="text-lg font-semibold mb-2 cursor-pointer">{subItem.itemName}</p>
                            </Link>

                            <p className="no-underline text-gray-600">{subItem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}