import { FaRegFileLines } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion'

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dargElastic={.1} dragTransition={{bounceStiffness: 100, bounceDamping: 20}} className="overflow-hidden flex-shrink-0 relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-8 py-10">
      <FaRegFileLines size="1.5em"/>
      <p className="text-sm font-semibold leading-tight pt-5">{data.desc}</p>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between py-4 px-5">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600 flex items-center justify-center rounded-full text-white">
                {data.close ? <IoClose size=".8em"/> : <FiDownload size=".8em"/>}
            </span>
        </div>
        {data.tag.isOpen && 
            (<div className={`w-full py-4 ${data.tag.tagColor === "green" ? "bg-green-600": "bg-red-500"} flex items-center justify-center`}>
                <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
            </div>)
        }
        
      </div>
    </motion.div>
  )
}

export default Card
