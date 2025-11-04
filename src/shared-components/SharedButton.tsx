// import Enter2 from "../assets/Vector2.svg";

// const SharedButton = ({
//   label,
//   gradientDirection = "ltr",
// }: {
//   label: string;
//   gradientDirection?: "ltr" | "rtl" | "ttb" | "btt";
// }) => {
//   return (
//     <button className="mb-12 flex cursor-pointer items-center justify-center space-x-1 rounded-lg bg-[linear-gradient(106.57deg,rgba(228,150,0,0.8)_14.6%,#CA8500_111.87%)] px-4 py-3 font-semibold text-white shadow-md shadow-amber-300 sm:space-x-3 sm:px-5 md:space-x-5 md:px-8 lg:space-x-5 lg:px-8">
//       <span className="text-[14px] text-white">{label}</span>
//       <img src={Enter2} alt="" className="h-[15px] w-[15px]" />
//     </button>
//   );
// };

// export default SharedButton;

import React, { type ButtonHTMLAttributes } from "react";
import Enter2 from "../assets/Vector2.svg";

interface SharedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  gradientDirection?: "ltr" | "rtl" | "ttb" | "btt";
}

const gradientMap: Record<
  NonNullable<SharedButtonProps["gradientDirection"]>,
  string
> = {
  ltr: "linear-gradient(106.57deg, rgba(228,150,0,0.8) 14.6%, #CA8500 111.87%)",
  rtl: "linear-gradient(286.57deg, rgba(228,150,0,0.8) 14.6%, #CA8500 111.87%)",
  ttb: "linear-gradient(180deg, rgba(228,150,0,0.8) 14.6%, #CA8500 111.87%)",
  btt: "linear-gradient(0deg, rgba(228,150,0,0.8) 14.6%, #CA8500 111.87%)",
};

const SharedButton: React.FC<SharedButtonProps> = ({
  label,
  gradientDirection = "ltr",
  ...props
}) => {
  const background = gradientMap[gradientDirection];

  return (
    <button
      {...props}
      className={`mb-12 flex cursor-pointer items-center justify-center space-x-1 rounded-lg px-4 py-3 font-semibold text-white shadow-md shadow-amber-300 sm:space-x-3 sm:px-5 md:space-x-5 md:px-8 lg:space-x-5 lg:px-8 ${props.className}`}
      style={{ background }}
    >
      <span className="text-[14px] text-white">{label}</span>
      <img src={Enter2} alt="" className="h-[15px] w-[15px]" />
    </button>
  );
};

export default SharedButton;
