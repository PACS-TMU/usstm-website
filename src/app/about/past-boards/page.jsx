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

    console.log(boardItems);

    return (
        <div className="p-4 mx-auto max-w-screen-xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Past Boards</h1>

            {boardItems.map((boardItem) => (
                <div key={boardItem.id} className="mb-4">
                    <h2 className="text-xl font-bold mb-2 text-center">{boardItem.year}</h2>

                    {boardItem.members.map((section) => {
                        const ID = section.id.replace(/-22$/, '');

                        return (
                            <div key={ID} className="mb-4 text-center">
                                <h3 className="text-lg font-semibold mb-2">{ID}</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto justify-center">
                                    {section.people.map((member) => {
                                        const POS = member.position;
                                        const NAME = Array.isArray(member.name) ? member.name.join(', ') : member.name;

                                        return (
                                            <div key={member.id} className="bg-gray-100 p-4 rounded-md">
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
