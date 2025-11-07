type TitleProps = {
  titleText: string;
};

export const Title = ({ titleText }:  TitleProps) => {
    return (
        <div className="mt-3 lg:w-[70%] lg:mx-auto z-20">
            <h1 className="text-center text-[#284258] text-2xl font-semibold 
            lg:text-left lg:text-4xl"> <span className="border-b-6 pb-2 border-[#fec500]">{titleText}</span></h1>
        </div>
    )
}
