import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { IPORTFOLIO_ITEM } from "@/app/types/components/portfolio-item";



const PortfolioItem: FC<IPORTFOLIO_ITEM> = ({ href, title, description, imageSrc }) => {
    return (
        <li className="relative py-8">
            <div className="hidden md:block absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#4D62CA] to-[#03072F] w-full"></div>

            <Link href={href} className="text-white flex flex-col items-center md:flex-row md:items-start md:gap-8">
                <div className="mb-4 md:mb-0 md:w-[263px] flex-shrink-0">
                    <Image src={imageSrc} width={263} height={140} alt="PortfolioItem_Image" />
                </div>

                <div className="w-full">
                    <div className="flex justify-center items-center gap-4 mt-6 mb-4 md:mt-0 md:justify-start">
                        <h3 className="uppercase text-2xl text-center md:text-left md:text-4xl">{title}</h3>
                        <Image src={'/images/Arrow 2.svg'} width={20} height={20} alt="Arrow icon" />
                    </div>
                    <p className="text-center text-sm md:text-left md:text-lg">
                        {description}
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default PortfolioItem;