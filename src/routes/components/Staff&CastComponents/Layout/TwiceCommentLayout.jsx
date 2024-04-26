

export default function TwiceCommentLayout({ h3text, firsth1text, secondh1text, desc }) {
  return (
    <>
      <div className="flex flex-col font-gothic mt-4 text-slate-700">
        <h3 className="text-[#c840b6] text-sm font-bold tracking-[0.15em]">{h3text}</h3>
        <div className="flex gap-x-5">
          <h1 className="mt-1 flex gap-x-1 items-center text-lg font-semibold tracking-[0.15em]">
            {firsth1text}
            <span>
              <img src={"src/assets/img/Staff&Cast/contents_staffcast_icon_balloon.svg"} alt="img" className="w-5 h-5" />
            </span>
          </h1>
          <h1 className="mt-1 flex gap-x-1 items-center text-lg font-semibold tracking-[0.15em]">
            {secondh1text}
            <span>
              <img src={"src/assets/img/Staff&Cast/contents_staffcast_icon_balloon.svg"} alt="img" className="w-5 h-5" />
            </span>
          </h1>
        </div>
        <p className="text-xs font-extralight tracking-wider">{desc}</p>
      </div>
    </>
  );
}
