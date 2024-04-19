import Arrow from "../assets/arrow.svg";
import ArrowWhite from "../assets/arrow-white.svg";

export const Button = ({
  title,
  variant = "Light",
  showIcon = true,
}: {
  title: string;
  variant?: "Light" | "Primary";
  showIcon?: boolean;
}) => {
  return (
    <button
      className={`py-3 w-[180px] flex flex-grow-0 justify-center items-center gap-2 p-2 rounded-md ${
        variant === "Light"
          ? "bg-white text-gray border border-1 border-gray"
          : "bg-primary text-white"
      }`}
    >
      {title}
      {variant === "Light" ? (
        <Arrow className="w-4 h-4" />
      ) : (
        <ArrowWhite className="h-4 w-4" />
      )}
    </button>
  );
};
