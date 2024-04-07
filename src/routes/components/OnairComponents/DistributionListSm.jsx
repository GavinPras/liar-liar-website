import ButtonOnair from "./ButtonOnair";
import { buttonSvodData, buttonTvodData } from "./ButtonDistributionData";

export default function DistributionListSm() {
  const renderButtons = (data) => {
    if (!Array.isArray(data)) return null;
    return data.map((item, index) => (
      <div key={item.label || index}>
        <ButtonOnair text={item.label} />
        <br />
      </div>
    ));
  };

  return (
    <div className="w-full max-w-[65rem] mx-auto px-4 mt-10 mb-20 lg:hidden">
      {[
        { date: "7月8日より毎週土曜23時00分～ 地上波1週間先行配信 ※第2話より", buttons: [{ label: "ABEMA" }] },
        { date: "7月12日より毎週水曜23時00分～ 地上波3日間先行配信 ※第2話より", buttons: [{ label: "U-NEXT" }, { label: "アニメ放題" }] },
        { date: "7月15日より毎週土曜22時30分～ 順次配信※第2話より" },
        { src: "【SVOD】見放題配信", buttons: buttonSvodData },
        { src: "【AVOD】最新話 期間限定 無料配信", buttons: [{ label: "ニコニコ生放送" }] },
        { src: "【TVOD】レンタル配信", buttons: buttonTvodData },
      ].map((section, index) => (
        <div className="mx-auto" key={section.date || section.src || index}>
          {section.date && <h2 className="text-[#c840b6] font-extrabold text-xl tracking-widest text-start leading-relaxed">{section.date}</h2>}
          {section.src && <h3 className="text-base mt-5 mb-6 text-start tracking-widest font-semibold leading-relaxed">{section.src}</h3>}
          <div className="mt-4 mb-8">{renderButtons(section.buttons)}</div>
        </div>
      ))}

      <span className="text-sm tracking-widest block text-center text-red-500">※配信開始日・配信日時は編成の都合などにより変更となる場合がございます。予めご了承ください。</span>
    </div>
  );
}
