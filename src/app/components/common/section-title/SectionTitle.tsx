import { FC } from "react";
import { ISECTION_TYPE } from "@/app/types/components/section-title";

const SectionTitle:FC<ISECTION_TYPE> = ({name}) => {
    return (
        <h2 className="text-white uppercase text-[32px] md:text-[64px] max-w-[240px] md:max-w-none break-words tracking-tight font-semibold font-actay">
            {name}
        </h2>
    );
};

export default SectionTitle;