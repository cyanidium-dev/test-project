import SectionTitle from "@/app/components/common/section-title/SectionTitle";
import Carousel from "@/app/components/share/carousel/Carousel";

const Reviews = () => {
    return (
        <section className="mt-12">
            <div className="mx-[32px] md:mx-[100px]">
                <SectionTitle name={"Відгуки – що про нас говорять наші клієнти"} />
            </div>
            <div className="mt-10">
                <Carousel />
            </div>
        </section>
    );
};

export default Reviews;
