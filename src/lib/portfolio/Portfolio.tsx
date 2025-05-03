'use client'

import { SetStateAction, useState } from "react";
import PortfolioButton from "@/components/share/portfolio-button/PortfolioButton";
import SectionTitle from "@/components/common/section-title/SectionTitle";
import PortfolioItemList from "@/components/share/portfolio-item-list/PortfolioItemList";
import PortfolioTabs from "@/components/share/portfolio-tabs/PortfolioTabs";
import { portfolioLinks } from "@/data/portfolio";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(portfolioLinks[0]?.text || "");

  const handleTabChange = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <section className="px-[32px] md:px-[100px]">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <SectionTitle name={'Наше портфоліо'} />
        <div className="hidden md:block">
          <PortfolioButton>Переглянути Більше</PortfolioButton>
        </div>
      </div>
      <div>
        <PortfolioTabs
          tabs={portfolioLinks}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <PortfolioItemList category={activeTab} />
      </div>
      <div className="flex justify-center mt-8 md:hidden">
        <PortfolioButton>Дивитись Більше</PortfolioButton>
      </div>
    </section>
  );
};

export default Portfolio;