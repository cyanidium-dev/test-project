import PortfolioLi from "../../common/portfolio-li/PortfolioLi";
import { portfolioLinks } from "@/app/data/portfolio";

const PortfolioNavList = () => {
    return (
        <ul className="flex flex-wrap gap-[12px] md:gap-[36px]">
            {portfolioLinks.map(el => <PortfolioLi {...el} key={el.text} />)}
        </ul>
    );
};

export default PortfolioNavList;