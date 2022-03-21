import React from "react";

const Button = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <button
      className="bg-primary-color min-w-[340px] pt-2 pb-2 mt-4 rounded-md hover:opacity-75 transition-all"
      onClick={onClick}
    >
      <span className="text-white font-semibold">{name}</span>
    </button>
  );
};

export default Button;
