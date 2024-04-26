export default function TwiceLayout({ h3text, firsth1text, secondh1text, fisrtdesc, seconddesc }) {
  return (
    <>
      <div className="flex flex-col font-gothic mt-4 text-slate-700">
        <h3 className="text-[#c840b6] text-sm font-bold tracking-[0.15em]">{h3text}</h3>
        <div className="flex gap-x-4">
          <h1 className="mt-1 flex gap-x-1 items-center text-lg font-semibold tracking-[0.15em]">{firsth1text}</h1>
          <h1 className="mt-1 flex gap-x-1 items-center text-lg font-semibold tracking-[0.15em]">{secondh1text}</h1>
        </div>
        <div className="flex gap-x-3">
          <p className="text-xs font-normal tracking-wider">{fisrtdesc}</p>
          <p className="text-xs font-normal tracking-wider">{seconddesc}</p>
        </div>
      </div>
    </>
  );
}
