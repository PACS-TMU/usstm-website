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
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Past Boards</h1>
                
                {boardItems.map((boardItem) => (
                    <div key={boardItem.id} className="mb-8">
                        <h2 className="text-xl font-bold mb-2">{boardItem.year}</h2>
                        <div className="flex flex-col space-y-4">
                            {boardItem.members.map((id) => (
                                id.people.map((member) => (
                                    <div key={member.id} className="bg-gray-100 p-4 rounded-md">
                                        <p className="text-sm font-semibold mb-2">Position: {member.position}</p>
                                        {
                                            (() => {
                                                if (Array.isArray(member.name)) {
                                                    return (
                                                        <div>
                                                            <p className="text-sm font-semibold mb-2">Names:</p>
                                                            <ul className="list-disc pl-4">
                                                                {member.name.map((name, index) => (
                                                                    <li key={index} className="text-sm">{name}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    );
                                                } else {
                                                    return <p className="text-sm font-semibold mb-2">Name: {member.name}</p>;
                                                }
                                            })()
                                        }
                                    </div>
                                ))
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}