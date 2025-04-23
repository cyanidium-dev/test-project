import PortfolioButton from "@/app/components/common/portfolio-button/PortfolioButton";
import SectionTitle from "@/app/components/common/section-title/SectionTitle";
import PortfolioItemList from "@/app/components/share/portfolio-item-list/PortfolioItemList";
import PortfolioUlList from "@/app/components/share/portfolio-nav-list/PortfolioUlList";

const Portfolio = () => {
    return (
        <section className="px-[32px] md:px-[100px]">
            <div className="md:flex md:items-center md:justify-between mb-8 content-center">
                <SectionTitle name={'Наше портфоліо'} />
                <div className="hidden md:block">
                    <PortfolioButton name={"Переглянути Більше"} />
                </div>
            </div>
            <div>
                <PortfolioUlList />
                <PortfolioItemList />
            </div>
            <div className="flex justify-center mt-8 md:hidden">
                <PortfolioButton name={"Дивіться Більше"} />
            </div>
        </section>
    );
};

export default Portfolio;