import { Link } from "react-router-dom";

export default function Header({ onNavigation }) {
  const buttonList = [
    { label: "Introduction", link: "/introduction" },
    { label: "01", link: 0 },
    { label: "02", link: 1 },
    { label: "03", link: 2 },
    { label: "04", link: 3 },
    { label: "05", link: 4 },
    { label: "06", link: 5 },
    { label: "07", link: 6 },
    { label: "08", link: 7 },
    { label: "09", link: 8 },
    { label: "10", link: 9 },
    { label: "11", link: 10 },
    { label: "12", link: 11 },
  ];
  return (
    <>
      <span>
        <img src="./assets\img\Story\contents_header_story.png" alt="header-story" className="w-[35%] mx-auto md:max-w-[10rem]" />
      </span>
      <div className="px-6 h-auto mt-16 flex flex-wrap justify-center gap-x-4 gap-y-2 font-gothic max-w-[60rem]">
        {buttonList.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            onClick={() => onNavigation(item.link)}
            className="w-auto min-w-20 h-10 px-4 rounded-3xl flex justify-center items-center cursor-pointer bg-white hover:bg-[#c840b6] border-solid border-2 border-[#c840b6]">
            <span className="tracking-widest uppercase font-extrabold text-lg text-[#c840b6] hover:text-white">{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
