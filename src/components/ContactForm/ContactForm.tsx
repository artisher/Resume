export const ContactForm = () => {

    return (
        <div className="bg-[#4b586b] rounded-b-2xl ">
            <form action="" className=" text-xl rounded-b-2xl lg:w-full text-[#cfd9e9]">
                <div>
                    <div className="  rounded-b-2xl p-8 flex flex-col gap-20 lg:w-full">
                        <div>
                            <input type="text" className="border-b-2 border-[#cfd9e9] lg:w-full placeholder:text-[#cfd9e9]" placeholder="Name" />
                        </div>
                        <div>
                            <input type="Email" className="border-b-2 border-[#cfd9e9] lg:w-full placeholder:text-[#cfd9e9]" placeholder="Email" />
                        </div>
                        <div>
                            <input type="text" className="border-b-2 border-[#cfd9e9] lg:w-full placeholder:text-[#cfd9e9]" placeholder="Title" />
                        </div>
                        <div>

                            <textarea placeholder="Text" className="resize-none border-b-2 lg:w-full border-[#cfd9e9] placeholder:text-[#cfd9e9]" />
                        </div>

                    </div>
                    <button className="w-full text-[#3a4757] h-12 text-2xl font-semibold bg-[#ffc700] rounded-b-2xl  lg:h-16 cursor-pointer lg:w-full hover:rounded-b-none hover:bg-[#dcb116] transition-all duration-300 ease-in-out">Submit</button>
                </div>
            </form>
        </div>
    )
}
