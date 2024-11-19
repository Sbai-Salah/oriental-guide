import React from "react";
import { motion } from "framer-motion";
import { IoMdBookmark } from "react-icons/io";
import { CurrentSliderData, Data } from "@/app/page";
import OtherInfo from "./OtherInfo";


type Props = {
transitionData: Data;
currentSlideData: CurrentSliderData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
return (
    <>
        <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
        <OtherInfo data={transitionData ? transitionData : currentSlideData.data} />
        <motion.div layout className=" mt-5 flex items-center gap-3">
            <button
            className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs tran
            duration-300 ease-in-out hover:opacity-80 "

            >
                <IoMdBookmark className="text-xl" />
            </button>

            <button
            className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300
            ease-in-out hover:bg-white hover:text-black"
            onClick={() => window.location.href = `/city/${transitionData.location}`}
            >
            DÉCOUVRIR LA VILLE
            </button>
        </motion.div> 
   </>
);
}

export default SlideInfo;