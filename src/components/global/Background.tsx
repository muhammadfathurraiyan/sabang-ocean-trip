import Image from "next/image";
import BG1 from "../../../public/bg2.jpg";

export default function Background() {
  return (
    <div className="h-[50vh] w-full">
      <Image src={BG1} alt="image" className="h-full w-full object-cover" />
    </div>
  );
}
