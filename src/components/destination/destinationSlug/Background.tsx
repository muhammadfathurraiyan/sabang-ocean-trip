import Image, { StaticImageData } from "next/image";

export default function Background({ image }: { image: StaticImageData }) {
  return (
    <div className="h-[45vh] w-full">
      <Image
        src={image}
        alt="image"
        className="h-full w-full object-cover group-hover:scale-105 duration-300"
      />
    </div>
  );
}
