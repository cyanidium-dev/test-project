import { FC } from "react";
import { ISECTION_TYPE } from "@/app/types/components/section-title";
import localFont from 'next/font/local';

const actayFont = localFont({
  src: '../../../fonts/ActayWide-Bold.otf',
  display: 'swap',
  weight: '700',
});

const SectionTitle: FC<ISECTION_TYPE> = ({ name = 'Title', useGradient = false }) => {
  return (
    <h2
      className={`
        uppercase text-[32px] md:text-[64px] max-w-[240px] md:max-w-none 
        break-words font-semibold ${actayFont.className}
        ${useGradient 
          ? 'bg-gradient-to-bl from-[#EAEBFF] to-[#6A8FFF] text-transparent bg-clip-text from-50% via-30% to-100%' 
          : 'text-white'}
      `}
    >
      {name}
    </h2>
  );
};

export default SectionTitle;
