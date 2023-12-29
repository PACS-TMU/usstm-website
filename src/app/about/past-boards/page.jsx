'use client'
import { useEffect, useState } from "react";

export default function PastBoards() {
    const [boardItems, setBoard] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/past-boards.json');
                const data = await res.json();
                setBoard(data);
            } catch (error) {
                console.error('Error fetching past-boards data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="p-4 mx-auto main">
            <h1 className="text-5xl font-semibold mb-4 text-center">Past Boards</h1>

            {boardItems.map((boardItem) => (
                <div key={boardItem.id} className="mb-4">
                    <h2 className="text-xl font-semibold mb-2 text-center">{boardItem.year}</h2>

                    {boardItem.members.map((section) => {
                        const ID = section.id.replace(/-22$/, '');

                        return (
                            <div key={ID} className="mb-4 text-center">
                                <h3 className="text-lg font-serif font-semibold mb-2">{ID}</h3>

                                <div className="flex flex-wrap gap-4 mx-auto justify-center">
                                    {section.people.map((member, index) => {
                                        let POS = member.position;
                                        let NAME;
                                        // Create a key to map items uniquely in case they don't have an id
                                        let key;

                                        if (typeof member !== 'object') {
                                            POS = '';
                                            NAME = member;
                                            key = index;
                                        }
                                        else {
                                            NAME = Array.isArray(member.name) ? member.name.join(', ') : member.name;
                                            key = member.id;
                                        }

                                        return (
                                            <div key={key} className="flex flex-col bg-gray-100 shadow-md p-4 w-[90%] md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-md">
                                                <p className="text-sm font-semibold mb-2">{POS}</p>
                                                <p className="text-sm font-light mb-2">{NAME}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
