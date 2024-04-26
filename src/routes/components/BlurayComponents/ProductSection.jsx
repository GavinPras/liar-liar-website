export default function ProductSection({ volume, date, code, poster, chapter, jacket }) {
  return (
    <>
      <section className="w-full max-w-[60rem] mx-auto">
        <div className="mb-8 bg-[url('src/assets/img/Onair/contents_onair_head_bg01.png')] bg-cover bg-center w-full max-h-10 py-2 flex justify-center items-center">
          <h1 className="text-white font-NotoJP text-xl font-bold tracking-widest">{volume}</h1>
        </div>

        <div className="font-NotoJP text-center tracking-wider">
          <h1 className="text-[#c840b6] font-bold text-2xl lg:text-3xl lg:flex lg:items-baseline lg:justify-center">
            <span className="text-4xl font-bold">{date}</span>［WED］ <p>Release</p>
          </h1>
          <div className="mt-3 text-lg tracking-wider font-semibold font-gothic lg:flex lg:gap-x-5 lg:justify-center">
            <h3>価格：13,200円（税込）</h3>
            <h3>品番：{code}</h3>
          </div>
        </div>

        <div className="lg:flex lg:w-full md:flex md:w-full md:px-5">
          <figure className="mt-8 lg:w-[40%]">
            <div className="aspect-auto w-fit h-96 lg:h-full flex justify-center mx-auto border border-[#c840b6]">
              <img src={poster} alt="jacket" className="w-auto h-auto" />
            </div>
          </figure>

          <article className="font-NotoJP mt-8 px-5 flex flex-col gap-y-4 lg:w-[60%] lg:ml-3 lg:gap-y-8">
            <div className="tracking-widest">
              <h3 className="font-bold text-base lg:text-lg text-slate-900">収録話数</h3>
              <p className="font-normal text-base lg:text-lg text-slate-800">{chapter}</p>
            </div>
            <div className="tracking-widest">
              <h3 className="font-bold text-base lg:text-lg text-slate-900">音声・画面サイズ・層</h3>
              <p className="font-normal text-base lg:text-lg text-slate-800">リニアPCM 2.0ch ステレオ</p>
              <p className="font-normal text-base lg:text-lg text-slate-800">16:9［1080p/Hi-Def］</p>
              <p className="font-normal text-base lg:text-lg text-slate-800">BD50G</p>
            </div>
            <div className="tracking-widest">
              <h3 className="font-bold text-base lg:text-lg text-slate-900">外装特典</h3>
              <p className="font-normal text-base lg:text-lg text-slate-800">原作イラストkonomi（きのこのみ）描き下ろし三方背BOX</p>
            </div>
            <div>
              <h3 className="font-bold text-base lg:text-lg  text-slate-900">封入特典</h3>
              <ul className="list-disc pl-6 text-base lg:text-lg font-normal text-slate-800">
                <li>原作者久追遥希書き下ろし小説</li>
                <li>特製ブックレット</li>
                <li>不等辺三角関係プロモーションカード</li>
                <li>スケジュールステッカー</li>
              </ul>
            </div>
          </article>
        </div>

        <figure className="px-5 mt-10 lg:px-0">
          <div className="aspect-video w-fit h-auto flex justify-center mx-auto border border-[#c840b6]">
            <img src={jacket} alt="jacket" className="hover:opacity-50 transition-all" />
          </div>
        </figure>
      </section>
    </>
  );
}
