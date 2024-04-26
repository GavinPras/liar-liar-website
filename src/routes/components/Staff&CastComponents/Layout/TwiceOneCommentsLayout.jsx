export default function TwiceOneCommentLayout({ firsth3Text, secondh3Text, firsth1text, secondh1text, fisrtdesc, seconddesc }) {
  return (
    <>
      <div className="flex flex-col font-gothic mt-4 text-slate-700">
        <div className="flex gap-x-4">
          <h3 className="text-[#c840b6] text-sm font-bold tracking-[0.15em]">{firsth3Text}</h3>
          <h3 className="text-[#c840b6] text-sm font-bold tracking-[0.15em]">{secondh3Text}</h3>
        </div>
        <div className="flex gap-x-4">
          <h1 className="mt-1 flex gap-x-1 items-center text-lg font-semibold tracking-[0.15em]">{firsth1text}</h1>
          <h1 className="mt-1 flex gap-x-1 items-center text-lg font-semibold tracking-[0.15em]">
            {secondh1text}
            <span>
              <img src={"src/assets/img/Staff&Cast/contents_staffcast_icon_balloon.svg"} alt="img" className="w-5 h-5" />
            </span>
          </h1>
        </div>
        <div className="flex gap-x-3">
          <p className="text-xs font-normal tracking-wider">{fisrtdesc}</p>
          <p className="text-xs font-normal tracking-wider">{seconddesc}</p>
        </div>
      </div>
    </>
  );
}
