"use client";
import { useState, useEffect } from "react";
import Committee from "./committee";

export default function CommitteeBOD({ fileName }) {
    const [bod, setBod] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/committees/${fileName}.json`);
                const data = await response.json();
                setBod(data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
                console.error('Error fetching committee data: ', error);
            }
        };

        fetchData();
    }, [fileName]);

    if (loading) return <div className="loading">Loading...</div>
    if (error) return <div className="error">Error: {error.message}</div>

    const execs = bod.filter(member => member.type === 'Executive');
    const directors = bod.filter(member => member.type === 'ProgramDirector');
    const firstYearDirectors = bod.filter(member => member.type === 'FirstYearDirector');
    const nonVoting = bod.filter(member => member.type === 'NonVotingBoardMember');

    return (
        <>
            <hr className="border border-gray-400 w-3/5 mx-auto mt-8" />
            <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide text-center">Executives</h2>
            <hr className="border border-gray-400 w-3/5 mx-auto mb-6" />
            <Committee group={execs} fileName="bod" />

            <hr className="border border-gray-400 w-3/5 mx-auto mt-16" />
            <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide text-center">Program Directors</h2>
            <hr className="border border-gray-400 w-3/5 mx-auto mb-4" />
            <Committee group={directors} fileName="bod" />

            <hr className="border border-gray-400 w-3/5 mx-auto mt-16" />
            <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide text-center">First Year Directors</h2>
            <hr className="border border-gray-400 w-3/5 mx-auto mb-4" />
            <Committee group={firstYearDirectors} fileName="bod" />

            <hr className="border border-gray-400 w-3/5 mx-auto mt-16" />
            <h2 className="py-2 pt-4 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide text-center">Non-Voting Board Members</h2>
            <hr className="border border-gray-400 w-3/5 mx-auto mb-4" />
            <Committee group={nonVoting} fileName="bod" />
        </>
    )
}