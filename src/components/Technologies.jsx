import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiAdobephotoshop } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"; 
import { SiTailwindcss } from "react-icons/si"; 
import { SiFramer } from "react-icons/si"; 
import {animate, motion} from "framer-motion";
import "../index.css";

const iconVar=(duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse",
        }
    }
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <motion.h1
        id="technology"
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
         className="my-20 text-center text-4xl">My <span className="text-neutral-500">Skills</span></motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5,delay:0.5}}
         className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div
            variants={iconVar(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVar(5)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-5xl "/>
            </motion.div>
            <motion.div variants={iconVar(3)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-5xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVar(5)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-5xl text-blue-900"/>
            </motion.div>
            <motion.div variants={iconVar(2)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobephotoshop className="text-5xl text-indigo-500"/>
            </motion.div>
            <motion.div variants={iconVar(6)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FiFigma className="text-5xl "/>
            </motion.div>
            <motion.div variants={iconVar(4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-5xl "/>
            </motion.div>
            <motion.div variants={iconVar(4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-5xl "/>
            </motion.div>
            <motion.div variants={iconVar(4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss  className="text-5xl text-blue-600 "/>
            </motion.div>
            <motion.div variants={iconVar(4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFramer  className="text-5xl "/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies