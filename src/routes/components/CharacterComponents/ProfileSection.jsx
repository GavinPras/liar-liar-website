import { profileImgData } from "./ProfileImgData";

export default function ProfileSection({ handleSelect }) {
  function Profile({ size, src, id }) {
    return (
      <button onClick={() => handleSelect(id)} className={`${size} lg:size-20 h-auto rounded-full cursor-pointer overflow-hidden transition-all hover:border-4 hover:border-orange-400`}>
        <img src={src} alt="character" className="lg:size-22 h-auto aspect-square rounded-full hover:scale-125 transition-all" />
      </button>
    );
  }

  function ProfileGroup({ start, end, extraClass = "" }) {
    return (
      <div className={`w-full flex justify-center gap-x-5 my-3 ${extraClass}`}>
        {profileImgData.slice(start, end).map((item, index) => (
          <Profile key={index} id={start + index} size={"size-[4rem]"} src={item.src} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="px-5">
        <ProfileGroup start={0} end={3} extraClass="mt-12" />

        {/* Mobile Views */}
        <ProfileGroup start={3} end={7} extraClass="mt-5 lg:hidden" />
        <ProfileGroup start={7} end={11} extraClass="lg:hidden" />
        <ProfileGroup start={11} end={13} extraClass="lg:hidden" />

        {/* Desktop Views */}
        <ProfileGroup start={3} end={9} extraClass="mt-8 hidden lg:flex" />
        <ProfileGroup start={9} end={13} extraClass="hidden lg:flex" />
      </div>
    </>
  );
}
