import { motion } from 'framer-motion';
import { Text, Flex, Center } from "@chakra-ui/react"

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

const SectionDefault = ({children})=>{
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"70vh"}>
      <Text fontSize={"xl"}>{children}</Text>
    </Flex>
  )
}

export default function App() {
  return (
    <>
      <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 3, ease: "easeOut" }}
        >
        <Flex justifyContent={"center"} alignItems={"center"} height={"70vh"}>
          <Text fontSize={"xl"}>Coming soon...</Text>
        </Flex>
      </motion.div>
      <SectionDefault>CRM</SectionDefault>
      <SectionDefault>Marketing</SectionDefault>
      <SectionDefault>Presencia Onlince</SectionDefault>
      <SectionDefault>Branding</SectionDefault>
      <SectionDefault>Automatización</SectionDefault>
      <SectionDefault>Contenido R.S.</SectionDefault>
    </>
  )
}