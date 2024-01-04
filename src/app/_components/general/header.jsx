/*
This is the header component. It is used to display the title of the page.
Use the title attribute to set the title of the page. Pass it in as you would pass any HTML attribute.
*/
export default function Header( {title} ) {
    return (
        <div className="banner w-100% bg-highlight-dark my-4">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl main p-6 text-background tracking-wider">{title}</h1>
        </div>
    )
}