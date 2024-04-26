export default function Navigation() {
  function NavButton({ title }) {
    return (
      <>
        <button className="w-auto min-w-20 h-9 px-6 rounded-3xl flex justify-center items-center cursor-pointer bg-white hover:bg-[#c840b6] transition-all border-solid border-2 border-[#c840bc]">
          <p className="w-full h-full text-lg font-semibold tracking-widest flex justify-center text-[#c840bc] items-center hover:text-white">{title}</p>
        </button>
      </>
    );
  }
  return (
    <>
      <div className="mx-auto px-6 h-auto flex flex-wrap justify-center gap-x-4 gap-y-4 font-gothic max-w-[60rem]">
        {[{ text: "第1巻" }, { text: "第2巻" }, { text: "第3巻" }, { text: "1巻特典小説" }, { text: "2巻特典小説" }, { text: "3巻特典小説" }].map((item, index) => (
          <NavButton key={index} title={item.text} />
        ))}
      </div>
    </>
  );
}
