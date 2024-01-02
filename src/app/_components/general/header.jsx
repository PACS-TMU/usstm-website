export default function Header( {title} ) {
    return (
        <div className="banner w-100% bg-highlight-dark my-4">
            <h1 className="text-5xl main p-6 text-background tracking-wider">{title}</h1>
        </div>
    )
}