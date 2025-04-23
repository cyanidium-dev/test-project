import { portfolioItems } from "@/app/data/portfolio";
import PortfolioItem from "../../common/portfolio-item/PortfolioItem";

const PortfolioItemList = () => {
    return (
        <ul className="flex flex-col gap-14 mt-10">
            {
                portfolioItems.map((item) => (
                    <PortfolioItem
                        key={item.title}
                        href={item.href}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                    />
                ))
            }
        </ul>
    );
};

export default PortfolioItemList;