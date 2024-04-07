import TableLg from "./TableLg";
import TableSm from "./TableSm";

export default function TableContent() {
  return (
    <>
      <span className="mb-10">
        <img src="./assets\img\Onair\contents_header_onair.png" alt="header" className="w-[40%] mx-auto max-w-40" />
      </span>

      <div className="w-full max-w-[65rem] mx-auto">
        <div className="mb-8 bg-[url('./assets/img/Onair/contents_onair_head_bg01.png')] bg-cover bg-center w-full max-h-10 py-2 flex justify-center items-center">
          <h1 className="text-white font-NotoJP text-xl font-bold tracking-widest">放送情報</h1>
        </div>

        <div className="text-[#c840b6] font-extrabold text-2xl tracking-widest px-5 text-center leading-relaxed">
          <h1>
            <span className="text-4xl">2023</span>年<span className="text-4xl">7</span>月<span className="text-4xl">8</span>日(土)より
          </h1>
          <h2>TOKYO MX／BS朝日／サンテレビほかにて放送開始！</h2>
        </div>

        <div className="mt-8 lg:mt-10 w-full">
          <TableLg />
          <TableSm />
        </div>
      </div>
    </>
  );
}
