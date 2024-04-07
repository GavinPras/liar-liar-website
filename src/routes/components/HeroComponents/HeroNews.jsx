export default function HeroNews() {
  const newsData = [
    { date: "2023/10/17", title: "TVアニメ『ライアー・ライアー』 VS SMILE PRINCESS マチ★アソビVol.27 参戦決定！", link: "https://liar-liar-anime.com/news/569" },
    { date: "2023/9/22", title: "Blu-ray発売記念イベント（2回目）にて、来場者特典が決定！さらに参加抽選権の対象法人を拡大！", link: "https://liar-liar-anime.com/news/553" },
    { date: "2023/9/19", title: "#12『ずっとみんなと』　あらすじ＆先行カット解禁！", link: "https://liar-liar-anime.com/news/509" },
    { date: "2023/9/16", title: "【一挙放送情報】ABEMAにてTVアニメ『ライアー・ライアー』11話振返り一挙放送決定！", link: "https://liar-liar-anime.com/news/552" },
  ];

  return (
    <>
      <section className="w-full bg-[url('src/assets/img/Hero/contents_top_bg01.jpg')] bg-cover bg-bottom h-auto flex justify-center mt-24 pb-36">
        <div className="container w-[90%] lg:max-w-[70rem]">
          <span>
            <img src="src\assets\img\Hero\contents_header_news.png" alt="header-news" className="w-[30%] mx-auto md:max-w-36" />
          </span>
          <div className="mt-14">
            <ul>
              {newsData.map((item, index) => (
                <li key={index} className="mt-5">
                  <p className="text-xl font-bold text-[#d55098]">{item.date}</p>
                  <a href={item.link} className="text-lg font-normal font-NotoJP text-[#231815] text-wrap tracking-widest leading-8 hover:underline">
                    {item.title}
                  </a>
                  <div className="border-b-2 border-[#ff008a] mt-6 " />
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex justify-center">
            <button className="cursor-pointer hover:opacity-50 duration-300 mt-12">
              <img className="max-w-[185px]" src="src\assets\img\Hero\contents_news_more_button.svg" alt="more-news" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
