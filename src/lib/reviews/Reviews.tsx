import SectionTitle from "@/components/common/section-title/SectionTitle";
import Carousel from "@/components/share/carousel/Carousel";

const Reviews = () => {
    return (
        <section className="mt-12">
            <div className="mx-[32px] md:mx-[100px]">
                <SectionTitle name={"Відгуки – що про нас говорять наші клієнти"} useGradient={true}/>
            </div>
            <div className="mt-10">
                <Carousel />
            </div>
        </section>
    );
};

export default Reviews;
