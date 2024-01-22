'use client'
import { useState, useEffect } from 'react';
import Header from "@/app/_components/general/header";
import Link from "next/link";

export default function About() {
    const [ aboutItems, setAboutItems ] = useState( [] );
    
    useEffect( () => 
    {
        fetchNavData();
    }, [] );
    
    const fetchNavData = async ( ) => 
    {
        try {
            const res = await fetch( '/data/nav-items.json' ); 
            const data = await res.json( );
            console.log( data );
            setAboutItems( data );

        } catch ( error ) {
            console.error( 'Error fetching sub items data:', error );     
        }

    }

    let subItems = [ ];

    aboutItems.map( item => {
        if ( item.id === 2 ){
            subItems = item.subItems;
        }
    });

    
    
    
    return (
        <section>
            <Header title={`About`} />
            <div className="main">
            <div className="container p-4 mx-auto main text-center">
                <p className="text-xl font-semibold mb-4">Sorry, but we could not find what you were looking for. did you mean one of these?</p>
                <div className="flex flex-wrap gap-10 mx-auto justify-center">
                    { 
                        subItems.map( ( subItem ) => (
                        <div key={ subItem.id } className="mb-4 flex flex-col bg-gray-100 shadow-md p-4 w-[90%] md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-md">
                            <Link href={ subItem.path }>
                                <p className="text-lg font-semibold mb-2 cursor-pointer">{ subItem.itemName }</p>
                            </Link>
                            <p className="no-underline text-gray-600">{ subItem.description }</p>
                        </div>
                    ))
                    }
                </div>
                </div>           
            </div>
        </section>
    )
}