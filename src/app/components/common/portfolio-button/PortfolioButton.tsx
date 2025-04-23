import { IPORTFOLIO_BUTTON } from "@/app/types/components/portfolio-button";
import { FC } from "react";

const PortfolioButton: FC<IPORTFOLIO_BUTTON> = ({ name = 'button' }) => {
    return (
        <button className="cursor-pointer bg-[#cce0ff] border-2 border-[#7aa5ef] rounded-full text-[#020418] font-semibold py-3 px-8 shadow-md uppercase tracking-wide transition-all duration-300 hover:bg-[#020518] hover:text-[#cce0ff] hover:border-[#020518]">
            {name}
        </button>
    );
};

export default PortfolioButton;