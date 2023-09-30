import { memo } from "react";

interface ErrorMsgProps {
  name: string;
  message: string;
}

function ErrorMsg({ name, message }: ErrorMsgProps) {
  if (!name || !message) return null;

  const styles: { [key: string]: string } = {
    image: "flex items-center justify-center h-full",
    boundary: "flex justify-center items-center h-3/4 text-xl",
    card: "max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg backdrop-brightness-150",
  };

  const style = styles[name];

  return (
    <div className={style}>
      {name === "card" ? (
        <div className="relative h-80 w-full">
          <div className="flex items-center justify-center h-full">
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default memo(ErrorMsg);
