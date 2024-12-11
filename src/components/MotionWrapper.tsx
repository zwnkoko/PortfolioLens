import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props{
    children: ReactNode,
    hoverScale?: number,
    tapScale?: number,
}

export const GestureWrapper = ({ children, hoverScale=1.2, tapScale=1 } : Props) => {
  return (
    <motion.div whileHover={{scale: hoverScale}} whileTap={{scale: tapScale}}>
        {children}
    </motion.div>
  )
}

