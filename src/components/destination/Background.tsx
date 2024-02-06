import Image from "next/image";
import BG1 from "../../../public/bg2.jpg";

export default function Background() {
  return (
    <div className="h-[45vh] w-full">
      <Image
        src={BG1}
        alt="image"
        className="h-full w-full object-cover group-hover:scale-105 duration-300"
      />
    </div>
  );
}
