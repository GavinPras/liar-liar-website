export default function DistributionContent() {
  return (
    <>
      <div className="w-full max-w-[65rem] mx-auto mt-16">
        <div className="mb-8 bg-[url('./assets/img/Onair/contents_onair_head_bg01.png')] bg-cover bg-center w-full max-h-10 py-2 flex justify-center items-center">
          <h1 className="text-white font-NotoJP text-xl font-bold tracking-widest">配信情報</h1>
        </div>
      </div>

      <div className="text-[#c840b6] font-extrabold text-2xl tracking-widest px-5 text-center leading-relaxed">
        <h1>
          <span className="text-4xl">7</span>月<span className="text-4xl">8</span>日より
          <br className="lg:hidden" />
          毎週<span className="text-4xl">土</span>曜<span className="text-4xl">22:30～</span>
        </h1>
        <h2>各種配信サービスにて地上波同時一斉配信開始！</h2>
      </div>
    </>
  );
}
