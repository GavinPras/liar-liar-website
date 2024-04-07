import { useState } from "react";
import ProfileSection from "./components/CharacterComponents/ProfileSection";
import { CHARACTER_DATA } from "./components/CharacterComponents/CharacterData";
import ProfileDisplay from "./components/CharacterComponents/ProfileDisplay";

export default function Character() {
  const [selectedChar, setSelectedChar] = useState(CHARACTER_DATA[0]);

  const handleSelectCharacter = (characterIndex) => {
    setSelectedChar(CHARACTER_DATA.find((char) => char.id === characterIndex));
  };
  return (
    <main className="w-full h-auto overflow-hidden bg-[url('src/assets/img/Character/contents_staffcast_bg01.jpg')] bg-center bg-cover">
      <span className="flex justify-center mt-14">
        <img src="src/assets/img/Character/contents_header_character.png" alt="header" className="w-[60%] max-w-72" />
      </span>
      <ProfileSection handleSelect={handleSelectCharacter} id={setSelectedChar} />
      <ProfileDisplay selectedChar={selectedChar} />
    </main>
  );
}
