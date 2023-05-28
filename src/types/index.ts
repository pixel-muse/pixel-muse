interface Bot {
  title: string;
  username: string;
  url: string;
  image: string;
  alt: string;
  description: string;
}

interface Config {
  bots: Bot[];
}

interface Photo {
  image: string;
  firstColor: string;
  secondColor: string;
}

interface Error {
  error: string;
}

export { type Bot, type Config, type Photo, type Error };
