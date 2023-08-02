"use client";

import Box from "@/components/Box";
import { RingLoader} from "react-spinners";


const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
        <RingLoader color="#22c55e" size={45}/>
    </Box>
  )
}

export default Loading
