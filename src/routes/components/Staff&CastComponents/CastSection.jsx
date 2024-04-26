import TwiceOneCommentLayout from "./Layout/TwiceOneCommentsLayout";

export default function CastSection() {
  return (
    <>
      <h1 className="text-[#c840b6] text-3xl tracking-widest font-bold mb-10">CAST</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {[
          { firsth3text: "篠原", secondh3text: "緋呂斗", firsth1text: "中村", secondh1text: "源太", fisrtdesc: "なかむら", seconddesc: "なかむら" },
          { firsth3text: "彩園寺", secondh3text: "更紗", firsth1text: "倉持", secondh1text: "若菜", fisrtdesc: "くらもち", seconddesc: "わかな" },
          { firsth3text: "姫路", secondh3text: "白雪", firsth1text: "首藤", secondh1text: "志奈", fisrtdesc: "しゅとう", seconddesc: "ゆきな" },
        ].map((item, index) => (
          <TwiceOneCommentLayout
            key={index}
            firsth3Text={item.firsth3text}
            secondh3Text={item.secondh3text}
            firsth1text={item.firsth1text}
            secondh1text={item.secondh1text}
            fisrtdesc={item.fisrtdesc}
            seconddesc={item.seconddesc}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 grid-rows-3 gap-0">
        {[
          { firsth3text: "秋月", secondh3text: "乃愛", firsth1text: "立花", secondh1text: "理香", fisrtdesc: "たちばな", seconddesc: "りか" },
          { firsth3text: "椎名", secondh3text: "紬", firsth1text: "森山", secondh1text: "由梨佳", fisrtdesc: "もりやま", seconddesc: "ゆりか" },
          { firsth3text: "一ノ瀬", secondh3text: "棗", firsth1text: "桑島", secondh1text: "法子", fisrtdesc: "くわしま", seconddesc: "ほうこ" },
          { firsth3text: "加賀谷", secondh3text: "亜未", firsth1text: "山村", secondh1text: "響", fisrtdesc: "やまむら", seconddesc: "ひびく" },
          { firsth3text: "多々良", secondh3text: "楓花", firsth1text: "瀬戸", secondh1text: "桃子", fisrtdesc: "せと", seconddesc: "ももこ" },
          { firsth3text: "辻", secondh3text: "友紀", firsth1text: "望月", secondh1text: "麻衣", fisrtdesc: "もちづき", seconddesc: "まい" },
        ].map((item, index) => (
          <TwiceOneCommentLayout
            key={index}
            firsth3Text={item.firsth3text}
            secondh3Text={item.secondh3text}
            firsth1text={item.firsth1text}
            secondh1text={item.secondh1text}
            fisrtdesc={item.fisrtdesc}
            seconddesc={item.seconddesc}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 grid-rows-3 gap-2">
        {[
          { firsth3text: "久我崎", secondh3text: "晴嵐", firsth1text: "福山", secondh1text: "潤", fisrtdesc: "ふくやま", seconddesc: "じゅん" },
          { firsth3text: "榎本", secondh3text: "進司", firsth1text: "榎木", secondh1text: "淳弥", fisrtdesc: "えのき", seconddesc: "じゅんや" },
          { firsth3text: "浅宮", secondh3text: "七瀬", firsth1text: "大西", secondh1text: "沙織", fisrtdesc: "おおにし", seconddesc: "さおり" },
          { firsth3text: "風見", secondh3text: "鈴蘭", firsth1text: "徳井", secondh1text: "青空", fisrtdesc: "とくい", seconddesc: "そら" },
        ].map((item, index) => (
          <TwiceOneCommentLayout
            key={index}
            firsth3Text={item.firsth3text}
            secondh3Text={item.secondh3text}
            firsth1text={item.firsth1text}
            secondh1text={item.secondh1text}
            fisrtdesc={item.fisrtdesc}
            seconddesc={item.seconddesc}
          />
        ))}
      </div>
    </>
  );
}
