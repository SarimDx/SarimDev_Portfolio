'use client';

import Image from "next/image";
import images from "../../constants/images";

import {thmgalleryImages} from "../../lib/Thmimages";
import {galleryImages} from "../../lib/images";

import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const AboutMe = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div
      className="min-h-full  "
      id="AboutMe"
      style={{ background: "#edf2f8" }}
    >
      <div className=" mx-4 pt-10 flex flex-col justify-between items-center lg:items-start " >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }} 
        className="flex w-full  lg:flex-row flex-col   items-center ">
          {/* ? Left Side  */}
          <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
            className="text-white   gap-7 px-5 py-14 lg:w-1/3  rounded-3xl flex flex-col justify-around"
            style={{ background: "#004D99" }}
          >
            {/* Image Box */}
            <div className="mx-auto">
              <Image
                src={images.aboutMe}
                alt="profile"
                width={450}
                height={450}
                className="rounded-3xl"
              />
            </div>
            {/* Text Box */}
            <div className="flex flex-col justify-center items-center gap-10">
              <p>Software Engineer / Web Developer</p>
              <button className="bg-white p-2 font-semibold rounded-md shadow-2xl hover:bg-gray-700 hover:text-white text-opacity-80 text-cyan-950 " style={{transition: '0.3s' }}   >Contact Me</button>
            </div>
            {/* Socials  Box */}
            <div className="flex gap-3 justify-center items-center text-3xl">
              
              <a
                href="https://www.linkedin.com/in/kerroucha-abdelbari-sarim/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/SarimDx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-950"

              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/sarimabdebari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700"

              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"

              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>
          {/* ! Right Side  */}
          <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
          className="  w-full lg:w-2/3  h-screen p-4  flex flex-col justify-around">
          {/* Gallery */}
          <div className="w-full">
          <Swiper
  loop={true}
  spaceBetween={10}
  navigation={true}
  thumbs={{
    swiper:
      thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
  }}
  modules={[FreeMode, Navigation, Thumbs]}
  className='h-96 rounded-3xl'
>
  {galleryImages.map((image, index) => (
    <SwiperSlide key={index}>
      <div className='flex h-full items-center justify-center'>
        <Image
          src={image.src}
          alt={image.alt}
          className='block h-full w-full object-contain rounded-3xl'
          
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

             {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {thmgalleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center flex-wrap'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-contain'
              
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
            </div>
           
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;


{/* <div className="flex flex-col   w-full mx-2  p-4  text-start bg-gray-50  rounded-xl  bg-opacity-60 shadow-2xl">
              <p>My Story</p>
              {/* <p>
                a Web Developer and Software Engineer. Starting as a Front-End
                Developer, I've evolved into the MERN Stack for Back-End
                Development. With a foundation in HTML, CSS, and JavaScript,
                I've expanded my skills into React and Next Js Frameworks. Since
                2022, freelancing has been a significant part of my journey,
                allowing me to collaborate with clients and continuously sharpen
                my skills. Committed to ongoing learning, I'm excited about
                contributing to innovative projects and making a positive impact
                in the tech world.
              </p> 
            </div>
            <div className="flex w-full mx-2  p-4  text-start bg-gray-50  rounded-xl  bg-opacity-60 shadow-2xl">
              <p>Computer Science</p>
              {/* <p>
                I hold a degree in Computer Science from a reputable institution
                in Algeria, providing me with a solid theoretical foundation.
                This academic background equips me with the knowledge to tackle
                complex challenges in the field. My education has nurtured my
                curiosity and drive to explore emerging technologies, forming an
                essential part of my journey as a software engineer.
              </p> 
            </div>
            <div className="flex w-full  mx-2 p-4  text-start bg-gray-50  rounded-xl  bg-opacity-60 shadow-2xl">
              <p>Career</p>
              {/* <p>
                Since 2022, I've actively engaged in freelancing projects,
                evolving from a Front-End Developer to a proficient Full Stack
                Web Developer and Software Engineer. This journey reflects my
                commitment to staying at the forefront of technological
                advancements. My roles have not only enhanced my technical
                expertise but also honed my ability to collaborate effectively
                with clients and team members. Looking ahead, I'm enthusiastic
                about contributing my skills to innovative projects and making a
                lasting impact in the ever-evolving tech landscape.
              </p> 
            </div>
            <div className="flex  w-full mx-2 p-4  flex-col justify-center text-start bg-gray-50  rounded-xl  bg-opacity-60 shadow-2xl">
              <p>Languges That I Know</p>
              <div className="flex flex-wrap">
                
                <Image
                  src={images.react}
                  alt="profile"
                  width={75}
                  height={75}
                  className=" rounded-full"
                  />
              </div>
            </div> */}