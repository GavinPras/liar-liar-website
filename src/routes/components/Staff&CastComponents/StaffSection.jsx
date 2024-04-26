import BasicLayout from "./Layout/BasicLayout";
import OnceLayout from "./Layout/OnceLayout";
import TwiceLayout from "./Layout/TwiceLayout";
import TwiceCommentLayout from "./Layout/TwiceCommentLayout";

export default function StaffSection() {
  return (
    <>
      <h1 className="text-[#c840b6] text-3xl tracking-widest font-bold mb-10">STAFF</h1>
      <OnceLayout h3text={"原作"} h1text={"久追遥希"} desc={"（MF文庫J『ライアー・ライアー』／KADOKAWA刊）"} />
      <TwiceCommentLayout h3text={"キャラクター原案"} firsth1text={"Konomi"} secondh1text={"幸奈ふな"} desc={"（きのこのみ）"} />
      <TwiceCommentLayout h3text={"監督"} firsth1text={"大野悟"} secondh1text={"松浦直紀"} desc={" "} />
      <div className="mt-3 grid grid-cols-2 grid-rows-4 gap-3">
        {[
          { h3text: "シリーズ構成", h1text: "豊田百香" },
          { h3text: "キャラクターデザイン", h1text: "中村ユミ" },
          { h3text: "色彩設計", h1text: "油木安弥" },
          { h3text: "美術監督", h1text: "朴智宇" },
          { h3text: "テクニカルディレクター", h1text: "蔡伯崙" },
          { h3text: "編集", h1text: "柳圭介" },
          { h3text: "音響監督", h1text: "納谷僚介" },
        ].map((item, index) => (
          <BasicLayout key={index} h3text={item.h3text} h1text={item.h1text} />
        ))}
      </div>
      <TwiceLayout h3text={"音楽"} firsth1text={"音楽"} secondh1text={"広川恵一"} fisrtdesc={"(MONACA)"} seconddesc={"(MONACA)"} />
      <TwiceLayout h3text={"音楽制作"} firsth1text={"MONACA"} secondh1text={"CyberAgent"} />
      <BasicLayout h3text={"アニメーション制作"} h1text={"GEEKTOYS"} />
    </>
  );
}
