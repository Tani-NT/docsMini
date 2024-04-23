import React from "react"
import Card from "./Card"
import { useRef } from "react"

function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            desc: "Lorem ipsum ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "Laviossa ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: "0.10mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Close",
                tagColor: "red"
            }
        },
        {
            desc: "Peter Parker ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: "0.4mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Close",
                tagColor: "red"
            }
        },
        {
            desc: "Peter Parker ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: "0.4mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Upload",
                tagColor: "green"
            }
        },
        {
            desc: "Peter Parker ipsum dolor sit, amet consectetur adipisicing.",
            fileSize: "0.4mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Close",
                tagColor: "red"
            }
        },
    ]


  return (
    <div ref={ref}  className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-4">
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground
