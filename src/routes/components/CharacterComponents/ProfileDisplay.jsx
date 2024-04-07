export default function ProfileDisplay({ selectedChar }) {
  return (
    <>
      <div className="relative w-full mt-8 pt-4 h-[70rem] md:max-h-[50rem] lg:max-h-[52rem] mb-32">
        <img src="src/assets/img/Character/contents_character_bg.png" alt="bg" className="absolute top-0 left-0 w-full h-full z-0" />

        <div className="relative z-10 mb-10 h-[62rem] md:max-h-[50rem] lg:max-h-[52rem] md:flex md:px-5 lg:max-w-[70rem] lg:flex lg:mx-auto">
          <div className="w-full h-[45%] flex justify-center items-center md:w-[40%] md:h-full">
            <img src={selectedChar.mainImage} alt="stand" className="h-full w-auto md:absolute" />
          </div>

          <div className="md:w-[60%] md:mt-10">
            <div className=" w-full h-24 pl-4 md:pl-0">
              <h1 className="text-4xl lg:text-5xl tracking-widest font-semibold text-slate-800">
                <span>{selectedChar.firstName}</span>
                <span className="ml-8">{selectedChar.secondName}</span>
              </h1>
              <p className="text-2xl lg:text-2xl mt-1 font-medium tracking-wider text-slate-800">{selectedChar.fullName}</p>
            </div>

            <div className=" w-full h-auto px-4 md:px-0">
              <div className="flex flex-auto items-center gap-x-5 font-medium border-b-2 border-[#222] pb-4 mb-3">
                <p className="flex items-center text-xl">
                  <span className="bg-slate-950 rounded-lg mr-2 text-white tracking-widest font-bold text-lg px-1">CV</span>
                  {selectedChar.cvName}
                </p>
                <p className="flex items-center text-lg">
                  <span className="mr-3">{selectedChar.comments}</span>
                  <img src="src\assets\img\Character\contents_staffcast_icon_balloon.svg" alt="comments" className="size-6" />
                </p>
              </div>
              <div className="font-NotoJP text-base tracking-wider leading-7 text-slate-800 border-b-2 border-[#222] pb-4 mb-3 md:px-0">
                <p>{selectedChar.frstParagraph}</p>
                <p className="mb-5">{selectedChar.scndParagraph}</p>
                <p className="text-balance">{selectedChar.thrdParagraph}</p>
              </div>
            </div>

            <div className="w-full h-auto flex justify-center pt-2 px-4 pb-4 md:px-0">
              <img src={selectedChar.secondImage} alt="character face" className="w-auto max-h-60 lg:max-h-80 lg:mt-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
