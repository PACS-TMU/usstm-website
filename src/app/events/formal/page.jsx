export default function Formal() {
    return (
      <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl font-bold mb-4">Formal at Liberty Grand</h1>
          <p className="text-lg mb-8">
            Join us for the annual end-of-year Formal, hosted in late April or early May
            at the iconic <span className="font-semibold">Liberty Grand Hotel</span>.
            Dress to impress and celebrate the academic year's end with style, music,
            and unforgettable memories.
          </p>
  
          <Image
            src="/images/liberty-grand.jpg"
            alt="Liberty Grand Hotel"
            className="rounded-2xl shadow-lg mb-8 w-full h-auto"
            width={800}
            height={600}
          />
  
          <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-semibold mb-2">Event Highlights</h2>
            <ul className="list-disc list-inside text-left text-base space-y-1">
              <li>Elegant venue at the Liberty Grand</li>
              <li>Three-course dinner and refreshments</li>
              <li>Live DJ and dance floor</li>
              <li>Photobooths and professional photography</li>
              <li>Formal dress code</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  