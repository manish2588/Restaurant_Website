import NavBar from "./NavBar";
import { easeInOut, motion } from "framer-motion";

function Header() {
  return (
    <div className="relative">
     
      <motion.div className="bg-slate-300 h-screen w-full bg-[url('/image/BG.jpg')] bg-cover bg-no-repeat bg-center relative"
      initial={{opacity:0}}
      animate={{opacity:[0.5,1]}}
      transition={{
        duration:1,
        ease:easeInOut
      }}
      >
        
        <div className="absolute inset-0 bg-gray-600 opacity-50"></div>

       
        <div className="fixed w-full z-50">
          <NavBar />
        </div>

       
        <div className="flex flex-col justify-center items-center h-full w-full relative z-10">
          <motion.h1 className="text-white font-serif text-6xl font-medium text-center"
          initial={{
            x:-500
          }}
          animate={{
            x:0,
            transition:{
              duration:0.5,
              type:"spring",
              damping:30,
              ease:easeInOut
              
            }
          }}
          >
            Authentic Nepali
          </motion.h1>
          <motion.h1 className="text-white font-serif text-6xl font-medium text-center"
           initial={{
            x:1000
          }}
          animate={{
            x:0,
            transition:{
              duration:0.5,
              type:"spring",
              damping:30,
              ease:easeInOut,
              delay:0.5
              
            }
          }}
          >
            Restaurant
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
