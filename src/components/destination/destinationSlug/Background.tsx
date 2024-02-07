"use client";
import Image, { StaticImageData } from "next/image";
import BG3 from "../../../../public/bg3.jpg";
import BG4 from "../../../../public/bg4.jpg";
import BG7 from "../../../../public/bg7.jpg";
import BG8 from "../../../../public/bg8.jpg";
import BG9 from "../../../../public/bg9.jpg";
import BG10 from "../../../../public/bg10.jpg";
import BG11 from "../../../../public/bg11.jpg";
import BG12 from "../../../../public/bg12.jpg";
import BG13 from "../../../../public/bg13.jpg";
import { useEffect, useState } from "react";

export default function Background({ image }: { image: string }) {
  const [imageSrc, setImageSrc] = useState<StaticImageData | null>(null);
  useEffect(() => {
    if (image === "dolphin-trip") {
      setImageSrc(BG3);
    } else if (image === "diving") {
      setImageSrc(BG4);
    } else if (image === "snorkeling") {
      setImageSrc(BG8);
    } else if (image === "0-kilometer-indonesia") {
      setImageSrc(BG7);
    } else if (image === "rubiah-island") {
      setImageSrc(BG9);
    } else if (image === "sarang-cave") {
      setImageSrc(BG10);
    } else if (image === "gapang-beach") {
      setImageSrc(BG13);
    } else if (image === "sumur-tiga-beach") {
      setImageSrc(BG11);
    } else if (image === "anoi-itam-fortress") {
      setImageSrc(BG12);
    }
  },[]);

  if (imageSrc === null) {
    return <div className="h-[50vh] w-full" />;
  }

  return (
    <div className="h-[50vh] w-full">
      <Image
        src={imageSrc!}
        priority={true}
        alt="image"
        className="h-full w-full object-cover group-hover:scale-105 duration-300"
      />
    </div>
  );
}
