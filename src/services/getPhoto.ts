import { Photo, ErrorData } from "@/types";

interface GetPhotoProps {
  isClient?: boolean;
  newColors?: { r: number; g: number; b: number }[];
  randValue?: number;
}

export async function getPhoto({
  isClient,
  newColors,
  randValue,
}: GetPhotoProps): Promise<Photo | ErrorData> {
  const url = isClient ? process.env.NEXT_PUBLIC_BOT_URL : process.env.BOT_URL;
  const hash = isClient
    ? process.env.NEXT_PUBLIC_WEB_HASH
    : process.env.WEB_HASH;

  const data = { isClient, newColors, randValue };
  try {
    const res = await fetch(url as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "web-hash": hash as string,
      },
      next: {
        revalidate: 1,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) return { error: "Something went wrong! 🙁" };
    const { image, colors, rand } = await res.json();
    return {
      image,
      colors,
      rand,
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong! 🙁" };
  }
}
