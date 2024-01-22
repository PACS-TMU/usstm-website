'use client'
import { useState, useEffect } from 'react';
import Header from "@/app/_components/general/header";


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


    
    
    
    return (
        <section>
            <Header title={`About`} />
            <div className="main">
                {
                    aboutItems.map( ( aboutItem ) => (
                        <div>
                            <p> </p> 
                        </div>
                    ) 
                        
                    )

                }
            
            </div>
        </section>
    )
}