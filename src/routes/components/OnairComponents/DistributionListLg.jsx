import { buttonSvodData } from "./ButtonDistributionData";
import ButtonOnair from "./ButtonOnair";

export default function DistributionListLg() {
  return (
    <>
      <div className="w-full max-w-[65rem] mx-auto px-4 mt-10 mb-20 hidden lg:block">
        <div className="mx-auto">
          <h1 className="text-[#c840b6] font-extrabold text-xl tracking-widest text-start leading-relaxed">7月8日より毎週土曜23時00分～ 地上波1週間先行配信 ※第2話より</h1>
          <div className="mt-4 mb-8 w-1/3 pr-4">
            <ButtonOnair text={"ABEMA"} />
          </div>
        </div>

        <div className="mx-auto">
          <h1 className="text-[#c840b6] font-extrabold text-xl tracking-widest text-start leading-relaxed">7月12日より毎週水曜23時00分～ 地上波3日間先行配信 ※第2話より</h1>
          <div className="mt-4 mb-8 w-2/3 flex gap-x-5">
            <ButtonOnair text={"U-NEXT"} />
            <ButtonOnair text={"アニメ放題"} />
          </div>
        </div>

        <div className="mx-auto">
          <h1 className="text-[#c840b6] font-extrabold text-xl tracking-widest text-start leading-relaxed">7月15日より毎週土曜22時30分～ 順次配信※第2話より</h1>
          <h2 className="text-base mt-5 mb-6 text-start tracking-widest font-semibold leading-relaxed">【SVOD】見放題配信</h2>
          <div className="mt-4 mb-5 flex gap-x-5">
            {buttonSvodData.slice(0, 3).map((item, index) => (
              <ButtonOnair key={index} text={item.label} />
            ))}
          </div>

          <div className="flex gap-x-5 w-full">
            <span className="w-1/3">
              <ButtonOnair text={"dアニメストア"} />
            </span>
            <span className="w-2/3">
              <ButtonOnair text={"dアニメストア for Prime Video"} />
            </span>
          </div>

          <div className="mt-4 flex gap-x-5">
            {buttonSvodData.slice(5, 8).map((item, index) => (
              <ButtonOnair key={index} text={item.label} />
            ))}
          </div>

          <div className="mt-4 flex gap-x-5">
            {buttonSvodData.slice(8, 11).map((item, index) => (
              <ButtonOnair key={index} text={item.label} />
            ))}
          </div>

          <div className="mt-4 flex w-2/3 pr-2">
            <ButtonOnair text={"J:COMオンデマンド メガパック"} />
          </div>

          <div className="mt-4 flex w-full gap-x-5">
            <span className="w-2/3">
              <ButtonOnair text={"milplus 見放題パックプライム"} />
            </span>
            <span className="w-1/3">
              <ButtonOnair text={"TELASA（見放題プラン）"} />
            </span>
          </div>

          <h2 className="text-base mt-5 mb-6 text-start tracking-widest font-semibold leading-relaxed">【AVOD】最新話 期間限定 無料配信</h2>
          <div className="mt-4 flex w-full gap-x-5">
            <span className="w-1/3 pr-4">
              <ButtonOnair text={"ニコニコ生放送"} />
            </span>
          </div>

          <h2 className="text-base mt-5 mb-6 text-start tracking-widest font-semibold leading-relaxed">【TVOD】レンタル配信</h2>
          <div className="mt-4 flex w-full gap-x-5">
            <span className="w-1/3">
              <ButtonOnair text={"Google Play"} />
            </span>
            <span className="w-1/3">
              <ButtonOnair text={"HAPPY!動画"} />
            </span>
            <span className="w-1/3">
              <ButtonOnair text={"J:COMオンデマンド"} />
            </span>
          </div>

          <div className="mt-4 flex w-full gap-x-5">
            <span className="w-1/3">
              <ButtonOnair text={"milplus"} />
            </span>
            <span className="w-1/3">
              <ButtonOnair text={"music.jp"} />
            </span>
            <span className="w-1/3">
              <ButtonOnair text={"TELASA（レンタル）"} />
            </span>
          </div>

          <div className="mt-4 flex w-full gap-x-5">
            <span className="w-1/3">
              <ButtonOnair text={"Video Market"} />
            </span>
            <span className="w-1/3">
              <ButtonOnair text={"クランクイン！ビデオ"} />
            </span>
            <span className="w-1/3">
              <ButtonOnair text={"ニコニコチャンネル"} />
            </span>
          </div>

          <span className="mt-10 text-sm tracking-widest block text-center text-red-500">※配信開始日・配信日時は編成の都合などにより変更となる場合がございます。予めご了承ください。</span>
        </div>
      </div>
    </>
  );
}
