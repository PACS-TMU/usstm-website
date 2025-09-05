'use client'
import { use, useEffect, useState } from "react";
import Header from "@/app/_components/general/header";
import { useContentItem } from "@/lib/use-content";

export default function PastBoards() {
    const { data, loading, error } = useContentItem('about', 'past-boards');

    const boardItems = data?.content.boards || [];

    return (
        <div>
            <Header title={`Past Boards`} />
            <div className="p-4 mx-auto main">
                {boardItems.map((boardItem) => (
                    <div key={boardItem.id} className="mb-4">
                        <h2 className="text-xl lg:text-2xl xl:text-3xl px-4 font-semibold font-serif">{boardItem.year}:</h2>

                        {boardItem.members.map((section) => {
                            const ID = section.id.replace(/-22$/, '');

                            return (
                                <div key={ID} className="mb-4 text-center">
                                    <h3 className="text-lg lg:text-xl font-serif font-semibold mb-2 mt-10">{ID}</h3>
                                    <hr className="border-2 border-gray-400 w-1/2 mx-auto mb-4" />

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
        </div>
    );
}
