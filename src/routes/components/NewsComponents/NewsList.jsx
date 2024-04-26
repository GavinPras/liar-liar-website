import { NewsData } from "./NewsData";

export default function NewsList() {
  return (
    <>
      <div className="container w-[90%] lg:max-w-[70rem]">
        <header>
          <img src="src\assets\img\Hero\contents_header_news.png" alt="header-news" className="w-[30%] mx-auto md:max-w-36" />
        </header>
        <ul>
          {NewsData.map((item, index) => (
            <li key={index} className="mt-5">
              <p className="text-xl font-bold text-[#d55098]">{item.date}</p>
              <a href={item.link} className="text-base md:text-lg font-normal font-NotoJP text-[#231815] text-wrap tracking-widest leading-8 hover:underline">
                {item.title}
              </a>
              <div className="border-b-2 border-[#ff008a] mt-6 " />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
