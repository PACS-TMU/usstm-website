"use client"
import Image from 'next/image'
import Link from 'next/link'

// REMINDER TO CHANGE ALL THE LINKS AS WE GET THE SITE UP AND RUNNING
// MAKE SURE TO UPDATE THE ANCHOR TAGS TO THE CORRECT LINKS
export default function Elections() {
    return (
        <div>
            <div className='banner w-100% bg-highlight-dark my-4' id='title'>
                <h1 className='text-5xl main p-6 text-background tracking-wider'>Elections</h1>
            </div>
            <div id='main'>
            Each year, the Undergrad Science Society of Toronto Metropolitan (USSTM) conducts an election cycle to select the next Board of Directors. 
            The Board plays a pivotal role in steering the direction of USSTM and ensuring its continued success. The responsibilities of the USSTM team are outlined in 
            detail in the By-Laws and Constitution, accessible at our <Link href=''>governance page</Link>.
            <br /><br />
            Elections are run by the Chief Returning Officer, who is appointed by the Board of Directors. The CRO can be reached at cro@usstm.ca. Everyone who wants 
            to run should attend an info session and MUST ATTEND the All Candidates Meeting. If you cannot attend either you MUST email cro@usstm.ca at least 24 hours 
            before. You may send someone in your place to the All Candidates meeting but you must tell the CRO (cro@usstm.ca) who will be attending in your place 24 hours 
            in advance. Please read the Election Policies that can be found here: Link to Election Procedures. It is your responsibility to know this document as well as 
            the Constitution and By-Laws, especially if you are elected.

            {/* Important Dates */}
            <div id="timeline" className='py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide'>
                <h2>Timeline</h2>
            </div>

            {/* Nomation Form */}
            <div id='eligibility-rules' className='py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide'>
                <h2>Eligibility Rules</h2>
            </div>

            {/* About Elections */}
            <div id="about-elections" className='py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide'>
                <h2>About Elections</h2>
            </div> 
            
            <div id="campaigning-rules" className='py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide'>
                <h2>Campaigning Rules</h2>
            </div>

            {/*  */}
            <div id="join-non-elected-positions" className='py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide'>
                <h2>Join Non Elected Positions</h2>
            </div>
            <div id="past-election-results" className='py-2 text-2xl lg:text-3xl xl:text-4xl font-serif font-semibold tracking-wide'>
                <h2>Past Election Results</h2>
            </div>
            </div>
        </div>
    )
}