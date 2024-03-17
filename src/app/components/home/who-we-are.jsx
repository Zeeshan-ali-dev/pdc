import Image from "next/image";

//imgs
import DynamicTitle from "../utils/dynamic-title";
import { motion } from "framer-motion";
import VideoComp from "../common/VideoComp/VideoComp";

export default function WhoWeAreSection() {
  return (
    <div className="container px-5 md:pb-[149px] pb-[50px] mx-auto ">
      <DynamicTitle title="Introduction" description="" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="rounded-[16px] group relative max-w-full md:h-[80vh] mx-auto  overflow-hidden "
      >
        {/* <Image
                    src={whowe}
                    className="mx-auto group-hover:scale-[1.1] transition duration-300 ease-in-out object-cover object-center w-full rounded-2xl "
                    alt="placeholder"
                /> */}
        <VideoComp
          muted={false}
          loop="true"
          controls="false"
          url={"/video/video1.mp4"}
        />
        {/* <div className="w-full h-full absolute top-0 left-0">
                    <div className="absolute top-[50%] left-[50%] w-[86px] h-[86px] translate-x-[-50%] rounded-full translate-y-[-50%] hover:scale-125 transition-all z-10 flex items-center justify-center text-center">
                       
                        <Image src={Play} height={86} width={86} alt='Play_btn'/>
                       
                    </div>
                </div> */}
      </motion.div>
    </div>
  );
}
