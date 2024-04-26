export default function NovelSection({ volume, sample, firstParagraph, secondParagraph, thirdParagraph, fourthParagraph }) {
  return (
    <>
      <section className="w-full max-w-[60rem] mx-auto">
        <div className="mb-8 bg-[url('src/assets/img/Onair/contents_onair_head_bg01.png')] bg-cover bg-center w-full max-h-10 py-2 flex justify-center items-center">
          <h1 className="text-white font-NotoJP text-xl font-bold tracking-widest">{volume}</h1>
        </div>

        <div className="md:flex md:mx-6 lg:flex lg:w-full lg:mx-0">
          <figure className="mt-2 lg:w-[45%]">
            <div className="h-auto w-72 lg:w-full border flex justify-center mx-auto border-red-500">
              <img src={sample} alt="sample" className="w-auto h-auto" />
            </div>
          </figure>

          <div className="mt-5 md:mt-0 lg:w-[55%]">
            <article className="font-NotoJP mx-5 md:mx-0 md:ml-6">
              <h3 className="text-lg font-bold tracking-widest lg:text-xl">■あらすじ</h3>
              <div className="mt-5 text-base font-normal tracking-wider lg:text-lg">
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
                <p>{thirdParagraph}</p>
                <p>{fourthParagraph}</p>
              </div>
            </article>

            <span className="my-6 flex justify-center font-NotoJP text-sm font-light lg:text-base">※実際の商品と異なる場合がございます</span>

            <button className="mx-auto w-[85%] lg:w-[90%] h-10 bg-white border-2 border-[#c840b6] rounded-3xl flex justify-center items-center hover:bg-[#c840b6] transition-all">
              <span className="w-full h-full text-[#c840b6] text-lg font-bold font-NotoJP tracking-widest hover:text-white">試し読みはこちら</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
