export default function Tickets({title, link}) {
    return (
        <div className='flex flex-col justify-center items-center w-full bg-white border border-gray-300 shadow-md rounded-lg mt-4 mb-8'>
          <p className='font-semibold text-center my-2 text-base xl:text-lg'>{title}</p>
          <a
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            className='formal-link my-4 inline-block text-lg text-white w-3/4 bg-blue-600 hover:bg-blue-700 transition-colors ease-in-out duration-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-center px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Buy now
          </a>
        </div>
    )
}