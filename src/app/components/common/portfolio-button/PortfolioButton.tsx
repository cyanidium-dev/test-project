import { IPORTFOLIO_BUTTON } from "@/app/types/components/portfolio-button";
import { FC } from "react";

const PortfolioButton: FC<IPORTFOLIO_BUTTON> = ({ name = 'button' }) => {
    return (
        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#9097FC] to-[#0D104F] w-[280px] md:w-[314px] ">
            <button
                style={{
                    fontWeight: 'bold',
                    backgroundImage: `
                      radial-gradient(circle at 0% 10%, #a7c7ff 5%, transparent 25%),
                      radial-gradient(circle at 80% 100%, #91baff 5%, transparent 25%)
                    `,
                    backgroundColor: '#d2e4ff',
                }}
                className="cursor-pointer w-full h-12 rounded-full text-[#020418] font-semibold flex items-center justify-center uppercase tracking-wide transition-all duration-300 hover:bg-[#020518]! hover:text-[#cce0ff] hover:bg-none!"
            >
                {name}
            </button>
        </div>
    );
};

export default PortfolioButton;
