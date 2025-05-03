import { IPORTFOLIO_BUTTON } from "@/types/components/portfolio-button";
import { FC } from "react";

const buttonStyles = {
    fontWeight: 'bold',
    backgroundImage: `
      radial-gradient(circle at 0% 10%, #a7c7ff 5%, transparent 25%),
      radial-gradient(circle at 80% 100%, #91baff 5%, transparent 25%)
    `,
    backgroundColor: '#d2e4ff',
};

const PortfolioButton: FC<IPORTFOLIO_BUTTON> = ({
    children,
    type = "button",
    ...props
}) => {
    return (
        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#9097FC] to-[#0D104F] w-[280px] md:w-[314px]">
            <button
                type={type}
                style={buttonStyles}
                className="cursor-pointer w-full h-12 rounded-full text-[#020418] font-semibold flex items-center justify-center uppercase tracking-wide transition-all duration-300 hover:text-[#cce0ff] hover:!bg-[#020518] hover:!bg-none"
                {...props}
            >
                {children}
            </button>
        </div>
    );
};

export default PortfolioButton;