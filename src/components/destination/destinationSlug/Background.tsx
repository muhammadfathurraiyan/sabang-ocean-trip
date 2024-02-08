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
  const [position, setPosition] = useState("");
  useEffect(() => {
    if (image === "dolphin-trip") {
      setImageSrc(BG3);
      setPosition("object-center");
    } else if (image === "diving") {
      setImageSrc(BG4);
      setPosition("object-center");
    } else if (image === "snorkeling") {
      setImageSrc(BG8);
      setPosition("object-center");
    } else if (image === "0-kilometer-indonesia") {
      setImageSrc(BG7);
      setPosition("object-bottom");
    } else if (image === "rubiah-island") {
      setPosition("object-center");
      setImageSrc(BG9);
    } else if (image === "sarang-cave") {
      setImageSrc(BG10);
      setPosition("object-[center_left]");
    } else if (image === "gapang-beach") {
      setImageSrc(BG13);
      setPosition("object-[center_left]");
    } else if (image === "sumur-tiga-beach") {
      setImageSrc(BG11);
      setPosition("object-bottom");
    } else if (image === "anoi-itam-fortress") {
      setImageSrc(BG12);
      setPosition("object-[center_right]");
    }
  }, []);

  if (imageSrc === null) {
    return <div className="h-[50vh] w-full" />;
  }

  return (
    <div className="h-[50vh] w-full">
      <Image
        src={imageSrc!}
        priority={true}
        alt="image"
        className={`h-full w-full object-cover ${position}`}
      />
    </div>
  );
}
