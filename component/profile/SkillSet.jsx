import Profilestyles from "../../styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SkillSet({ userData }) {
  // console.log(userData);
  return (
    <div className="bg-white shadow-sm rounded py-4 mt-3 px-4">
      <span className="font-bold">Skills</span>
      <div className="flex flex-wrap h-auto mt-2">
        {userData.skills?.map((skill) => (
          <div
            className={`px-5 h-7 rounded flex justify-center items-center mr-2 text-base mb-2 font-semibold	${Profilestyles?.skillCard}`}
            key={skill}
          >
            {skill.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
