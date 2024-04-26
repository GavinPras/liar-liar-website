import Navigation from "./components/BlurayComponents/Navigation";
import NovelSection from "./components/BlurayComponents/NovelSection";
import ProductSection from "./components/BlurayComponents/ProductSection";

export default function BluRay() {
  return (
    <>
      <main className="w-full h-auto bg-[url('src/assets/img/Staff&Cast/contents_staffcast_bg01.jpg')] bg-auto bg-no-repeat bg-fixed bg-bottom pt-16 pb-16">
        <header className="w-[60%] max-w-36 flex justify-center mx-auto">
          <img src="src/assets/img/Bluray/contents_header_bluray.png" alt="header" />
        </header>
        <nav className="my-16">
          <Navigation />
        </nav>

        <section className="flex flex-col gap-y-16">
          <ProductSection
            volume={"第1巻"}
            date={"2023.11.29"}
            code={"SHBR-0707"}
            poster={"src/assets/img/Bluray/jacket01.jpg"}
            chapter={"第1話・第2話・第3話・第4話"}
            jacket={"src/assets/img/Bluray/jacket01_open.jpg"}
          />
          <ProductSection
            volume={"第2巻"}
            date={"2023.12.20"}
            code={"SHBR-0708"}
            poster={"src/assets/img/Bluray/jacket02.jpg"}
            chapter={"第5話・第6話・第7話・第8話"}
            jacket={"src/assets/img/Bluray/jacket02_open.jpg"}
          />
          <ProductSection
            volume={"第3巻"}
            date={"2024.1.24"}
            code={"SHBR-0709"}
            poster={"src/assets/img/Bluray/jacket03.jpg"}
            chapter={"第9話・第10話・第11話・第12話"}
            jacket={"src/assets/img/Bluray/jacket03_open.jpg"}
          />

          <NovelSection
            volume={"1巻特典小説　試し読み"}
            sample={"src/assets/img/Bluray/all1.jpg"}
            firstParagraph={
              "ある日、緋呂斗と白雪は全く連絡がつかない加賀屋さんを心配して、加賀屋さんの部屋を訪れると、加賀屋さんは無事ではあったが、朝からずっとダラダラと寝て過ごしていたと説明を受ける。"
            }
            secondParagraph={"白雪は加賀屋さんに足りないものは生活力だと指摘するが、加賀屋さんからは白雪に足りないものは普通の女の子力であると逆に指摘されてしまう。"}
            thirdParagraph={"加賀屋さんが1日家事をして過ごすことで生活力を向上させる代わりに、白雪は普通の女の子力の向上させるために、緋呂斗とデートに行くことを指示される。"}
            fourthParagraph={
              "加賀屋さんから、ご主人様呼びの禁止など、ルールを設けられ、あくまで普通の女の子として、デートすることに…。果たして、白雪は緋呂斗をなんて呼ぶのか？　どんなデートになるのか？"
            }
          />

          <NovelSection
            volume={"2巻特典小説　試し読み"}
            sample={"src/assets/img/Bluray/all2.jpg"}
            firstParagraph={
              "ある日、更紗が緋呂斗をショッピングに誘う。翌日２人は変装をしてショッピングを楽しんでいたものの、その途中で２人は意外な人物、学園島の大人気レポーター・風見鈴蘭に遭遇してしまう"
            }
            secondParagraph={
              "鈴蘭は、緋呂斗と更紗が一緒にいるところを目撃し、すぐに「大スクープを逃してはならない！」と情報収集班のメンバーを呼び寄せ、緋呂斗と更紗をカメラに収めようと包囲網を張って追い詰める。"
            }
            thirdParagraph={"休日デートの楽しい雰囲気から一転、ショッピングモールからの脱出ミッションに挑戦することとなってしまう。"}
            fourthParagraph={"果たして更紗との脱出作戦の結果は？そして、緋呂斗をショッピングに誘った更紗の思惑とは？"}
          />

          <NovelSection
            volume={"3巻特典小説　試し読み"}
            sample={"src/assets/img/Bluray/all3.jpg"}
            firstParagraph={
              "１年に１度の超特製チョココロネ販売日。英明学園全体を舞台としたゲーム「コマンドレース」に勝利したものが、超特製チョココロネを手にすることができる。学園のほとんどの生徒が参加をするその大規模イベントに参加する中で、緋呂斗も当然参加をする。"
            }
            secondParagraph={"手強い多々良、辻との勝負を繰り広げる中、そんな緋呂斗の前に立ちはだかる乃愛。"}
            thirdParagraph={"決闘の勝利の女神は誰に微笑むのか？果たして緋呂斗は超特製チョココロネを手にできるのか？"}
            fourthParagraph={"そして、余談では腐れ縁の幼馴染２人が壮絶な戦いを繰り広げていて！？"}
          />
        </section>
      </main>
    </>
  );
}
