import { memo } from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <p>Loading...</p>
    </div>
  );
};

export default memo(Loader);
