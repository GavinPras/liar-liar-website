export default function ButtonOnair({ text }) {
  return (
    <button className="border-[#c840b6] border-2 w-full h-10 rounded-3xl flex flex-row justify-between items-center px-5 text-[#222] hover:transition hover:opacity-95 hover:text-[#c840b6]">
      <p className="text-lg tracking-wide font-medium font-gothic hover">{text}</p>
      <div>
        <img src="src/assets/img/Onair/contents_onair_button_icon01.svg" alt="btn-icon" />
      </div>
    </button>
  );
}
