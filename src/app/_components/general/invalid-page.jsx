import { useState, useEffect } from 'react';
import Link from "next/link";

export default function InvalidPage({ id }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchNavData();
    }, []);

    const fetchNavData = async () => {
        try {
            const res = await fetch('/data/navbar/nav-items.json');
            const data = await res.json();
            setItems(data);

        } catch (error) {
            console.error('Error fetching sub items data:', error);
        }

    }

    let subItems = [];

    items.map(item => {
        if (item.id == id) {
            subItems = item.subItems;
        }
    });

    return (

        <div className="container p-4 mx-auto main text-center">
            <p className="text-xl font-semibold mb-4">Sorry, but we could not find what you were looking for. did you mean one of these?</p>
            <div className="flex flex-wrap gap-10 mx-auto justify-center">
                {
                    subItems.map((subItem) => (
                        <div key={subItem.id} className="mb-4 flex flex-col bg-gray-100 shadow-md p-4 w-[90%] md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-md">
                            <Link href={subItem.path}>
                                <p className="text-lg font-semibold mb-2 cursor-pointer">{subItem.itemName}</p>
                            </Link>
                            <p className="no-underline text-gray-600">{subItem.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
