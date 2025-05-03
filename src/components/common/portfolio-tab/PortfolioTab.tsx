import { FC } from "react";
import { IPortfolioTab } from "@/types/components/portfolio-tab";

const PortfolioTab: FC<IPortfolioTab> = ({ text, href, isActive, onClick }) => {
    return (
        <a
            href={href}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            className={`relative transition-colors duration-300 ${isActive
                ? "text-white after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white"
                : "text-gray-400 hover:text-white"
                }`}
        >
            {text}
        </a>
    );
};

export default PortfolioTab;