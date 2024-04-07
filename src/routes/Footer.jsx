import { Link } from "react-router-dom";

export default function Footer() {
  const navigationItems = [
    { label: "Top", link: "/" },
    { label: "News", link: "/news" },
    { label: "Introduction", link: "/introduction" },
    { label: "Story", link: "/story" },
    { label: "Character", link: "#" },
    { label: "Staff & Cast", link: "#" },
    { label: "Blu-Ray", link: "#" },
    { label: "Music", link: "#" },
    { label: "Books", link: "#" },
    { label: "Special", link: "#" },
    { label: "Twitter", link: "#" },
  ];

  const mediaIcon = [
    { src: "./assets/img/Footer/footer_icon_twitter.svg", alt: "twitter-icon" },
    { src: "./assets/img/Footer/footer_icon_facebook.svg", alt: "facebook-icon" },
    { src: "./assets/img/Footer/footer_icon_line.svg", alt: "line-icon" },
  ];

  return (
    <>
      {/* #151839 */}
      <footer className="bg-[#151839] w-full h-auto flex flex-col justify-between">
        <span>
          <img src="./assets\img\Footer\footer_border_bg.png" alt="footer-border" className="h-3" />
        </span>

        <div className="container w-full px-8 mt-8 flex flex-col mx-auto">
          <ul className="text-white text-center text-lg font-bold flex flex-wrap justify-center gap-x-5 gap-y-5 uppercase lg:text-xl">
            {navigationItems.map((item, index) => (
              <li key={index} className="hover:text-[#c840b6] duration-300">
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row w-full justify-center items-center gap-x-10 mt-8">
          {mediaIcon.map((item, index) => (
            <img key={index} src={item.src} alt={item.alt} className="max-w-11 h-auto hover:opacity-50 duration-300 cursor-pointer" />
          ))}
        </div>

        <div className="flex flex-row justify-center items-center gap-x-2 mt-8">
          <span>
            <p className="text-white font-semibold">Contact: </p>
          </span>
          <a href="#">
            <img src="./assets\img\Footer\footer_contact_mail.svg" alt="email" className="hover:opacity-50 duration-300 cursor-pointer" />
          </a>
        </div>

        <span className="flex justify-center my-8">
          <p className="text-white font-semibold text-xs px-3 text-center">©2023 久追遥希/KADOKAWA/ライアー・ライアー製作委員会</p>
        </span>
      </footer>
    </>
  );
}
