import { IPORTFOLIO_LI } from "@/types/components/portfolio-li";
import Link from "next/link";
import { FC } from "react";

const PortfolioLi: FC<IPORTFOLIO_LI> = ({ href, text }) => {
    return (
        <li className="font-light text-white font-raleway text-[12px] md:text-[18px]">
            <Link href={href}>
                {text}
            </Link>
        </li>
    );
};

export default PortfolioLi;