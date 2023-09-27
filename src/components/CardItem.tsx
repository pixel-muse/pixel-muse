import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBot } from "@/types";

function CardItem({
  title,
  username,
  url,
  description,
  image,
  imageAlt,
  type,
}: IBot) {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-200 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1 cursor-pointer backdrop-brightness-150"
      aria-label={type}
    >
      <Link target="_blank" href={url} aria-label={url}>
        <div className="relative h-52 w-full">
          <Image
            src={image}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="font-medium text-sm mb-2">{username}</div>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default memo(CardItem);
