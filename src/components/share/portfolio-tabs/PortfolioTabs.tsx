import { FC } from "react";
import PortfolioTab from "@/components/common/portfolio-tab/PortfolioTab";
import { IPortfolioTabs } from "@/types/components/portfolio-tabs";

const PortfolioTabs: FC<IPortfolioTabs> = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div>
            <div className="overflow-x-auto mb-6">
                <ul className="flex flex-wrap gap-[12px] md:gap-[36px] overflow-hidden">
                    {tabs.map((tab) => (
                        <PortfolioTab
                            key={tab.text}
                            text={tab.text}
                            href={tab.href}
                            isActive={activeTab === tab.text}
                            onClick={() => onTabChange(tab.text)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PortfolioTabs;