// import Navbar from "../components/Navbar";
// import {Hero} from "../components/Hero";
// import {Footer} from "../components/Footer";
// //import { motion } from "framer-motion";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <motion.main>
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
      
//         <Hero />
//       </motion.main>
//       <Footer />
//     </div>
//   );
 //}
"use client";
import Navbar from "../components/Navbar";
import  Hero  from "../components/Hero";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import myImage from '../public/images/image1.png'
export default function Home() {
  return (
    <div >
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Image
          src={myImage}
          alt="Landscape picture"
          width={800}
          height={500}
        />
      </motion.main>
      <Footer />
    </div>
  );
}

