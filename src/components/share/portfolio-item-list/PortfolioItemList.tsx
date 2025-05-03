import { portfolioItems } from "@/data/portfolio";
import PortfolioItem from "../../common/portfolio-item/PortfolioItem";
import { FC } from "react";

interface PortfolioItemListProps {
    category?: string;
  }

const PortfolioItemList:FC<PortfolioItemListProps> = ({ category }) => {
    const filteredItems = category && category !== "all"
        ? portfolioItems.filter(item => item.category === category)
        : portfolioItems;
    
    return (
        <ul className="flex flex-col gap-14 mt-10">
            {
                filteredItems.map((item) => (
                    <PortfolioItem
                        key={item.title}
                        href={item.href}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc} category={item.category}                    />
                ))
            }
        </ul>
    );
};

export default PortfolioItemList;