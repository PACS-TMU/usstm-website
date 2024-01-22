"use client";

export default function QuestionTable({ sectionObject, questionArray, requiredStar }) {
    return (
        <div className="flex justify-center flex-col my-2 w-full p-2 border border-gray-300 rounded-md bg-[#FDFDFD]">
            <p className="m-4 mb-3">
                Please fill out the following. {requiredStar}
            </p>
            <div className="grid grid-cols-[22%_13%_13%_13%_13%_13%_13%] self-center lg:grid-cols-7 w-[98%] place-items-center lg:gap-4 text-[9px] md:text-xs lg:text-base p-2">
                <div className="col-span-1"></div>
                <p className="text-center col-span-1 px-2">Strongly Agree</p>
                <p className="text-center col-span-1 px-2">Agree</p>
                <p className="text-center col-span-1 px-2">Neutral</p>
                <p className="text-center col-span-1 px-2">Disagree</p>
                <p className="text-center col-span-1 px-2">Strongly Disagree</p>
                <p className="text-center col-span-1 px-2">N/A</p>
            </div>
            {questionArray && questionArray.map((question) => (
                <div className="md:bg-gray-100 md:rounded-sm grid grid-cols-[22%_13%_13%_13%_13%_13%_13%] self-center lg:grid-cols-7 w-[98%] place-items-center text-xs md:text-sm lg:text-base my-2 p-2" key={question.id}>
                    <p className="">{question.question}</p>
                    {console.log(`${sectionObject.title} [${question.question}]`)}
                    <div className="justify-center items-center">
                        <input type="radio" name={`${sectionObject.title} [${question.question}]`} value="Strongly Agree" required />
                    </div>
                    <div className="justify-center items-center">
                        <input type="radio" name={`${sectionObject.title} [${question.question}]`} value="Agree" />
                    </div>
                    <div className="justify-center items-center">
                        <input type="radio" name={`${sectionObject.title} [${question.question}]`} value="Neutral" />
                    </div>
                    <div className="justify-center items-center">
                        <input type="radio" name={`${sectionObject.title} [${question.question}]`} value="Disagree" />
                    </div>
                    <div className="justify-center items-center">
                        <input type="radio" name={`${sectionObject.title} [${question.question}]`} value="Strongly Disagree" />
                    </div>
                    <div className="justify-center items-center">
                        <input type="radio" name={`${sectionObject.title} [${question.question}]`} value="N/A" />
                    </div>
                </div>
            )
            )}
        </div>
    )
}