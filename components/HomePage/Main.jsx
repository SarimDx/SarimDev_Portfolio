'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '../../constants/images';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Main = () => {
  return (
    <div className=" bg-cover bg-no-repeat  min-h-screen " id="home" style={{ backgroundImage:`url('./assets/bgImg.png')` }}>
      {/* Header Info Section */}
      <div className='container  mx-auto px-4 pt-32 flex flex-col md:flex-row  items-center justify-center'>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="flex flex-col  text-center     "
      >
       
        {/*  Badge */}
        <div className="flex items-center  p-4 bg-white bg-opacity-25 rounded-xl  shadow-2xl m-4">
          <span className="text-2xl font-bold ">👋</span>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-800">Hello I Am</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Kerroucha <br /> Sarim Abdelbari
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <div className="flex  flex-col  p-4  text-start bg-blue-500  rounded-xl  shadow-2xl m-4" style={{background:"#004D99"}}>
          <p className=" font-medium ml-10 text-white text-base">- Web Developer</p>
          <p className=" font-medium ml-10 text-white text-base">- Freelancer</p>
          <p className=" font-medium ml-10 text-white text-base">- Computer Science Graduate</p>
        </div>
      </motion.div>

      {/* Profile Image Section */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="relative"
      >

        <Image src={images.profile1} alt="profile" width={500} height={500} className=" absolute inset-0 rounded-full" />

        <Image src={images.circle} alt="profile_circle" className="  " />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex flex-wrap justify-center mt-8 "
      >
        {[images.nextjs, images.react, images.tailwind].map((circle, index) => (
          <div key={`circle-${index}`} className="w-32 h-32 rounded-full overflow-hidden m-4 p-5 bg-white">
            <Image src={circle} alt="circle" width={240} height={240} className="object-cover rounded-full" />
            
          </div>
        ))}
      </motion.div>
      </div>

    </div>
  );
};

export default Main;




















