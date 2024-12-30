import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const ThemeButton = ({ children, className="" }: { children: ReactNode, className?: string }) => {
  return (
    <button className={twMerge(`w-full flex items-center gap-2 text-center justify-center relative bg-[#6962fb] py-[10px] pl-[14px] pr-[10px] rounded-[8px] text-white overflow-hidden shadow-[0px_0px_0px_1px_#335cff,0px_1px_2px_0px_rgba(14,18,27,0.24)] text-[14px] font-[400] leading-[20px] tracking-[-0.006em]`, className)}>
      {children}
      <div className="absolute bg-gradient-to-b from-white to-white/0 z-10 w-full h-full top-0 left-0" style={{opacity: ".15"}}></div>
      <div className="absolute rounded-[8px] bg-gradient-to-b from-white/10 to-white/0 w-[calc(100%-2px)] h-[calc(100%-2px)] top-[1px] left-[1px]"></div>
    </button>
  );
};
export default ThemeButton;
