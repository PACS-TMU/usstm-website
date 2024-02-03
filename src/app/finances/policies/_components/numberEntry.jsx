export default function NumberEntry({ number, title, description }) {
    return (
        <div className="grid grid-cols-1 my-2 lg:my-0 lg:grid-cols-[40%_60%] lg:grid-rows-1 lg:space-x-20">
            <div className="flex flex-row items-center w-full">
                <div className="hidden md:flex justify-center items-center ml-6 mr-2 rounded-full border border-foreground h-[50px] lg:h-[75px] aspect-square bg-transparent">
                    <h2 className="text-2xl lg:text-4xl font-brygada">
                        {number}
                    </h2>
                </div>
                <p className="px-4 md:px-0 xl:text-lg tracking-wide font-semibold">
                    {title}
                </p>
            </div>
            <div className="text-sm ml-6 py-4 md:py-0 md:ml-24 lg:ml-0 lg:text-base flex justify-center items-center lg:py-4 px-2">
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}