import { motion } from 'framer-motion'
import React from 'react'

export const Sidebar = ({children}) => {
  return (
    <div className="side-bar">
        <motion.div animate={{width : "200px"}} >
            <main>
            {children}
            </main>
         
        </motion.div>
    </div>
  )
}
