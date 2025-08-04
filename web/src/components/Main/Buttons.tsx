import { Flex } from "@mantine/core";
import { useSettings } from "../../stores/settings";
import { Button } from "./Button";
import { motion } from "framer-motion";


export default function Buttons() {
  const links = useSettings((state) => state.links);

  return (
    <Flex pos='absolute' bottom='1vh' right='1vh' gap='sm'>
      {links.map((link, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: '10vh' }}
          animate={{ opacity: 1, y: '0vh' }}
          transition={{ delay: index * 0.2, duration: 0.4, ease: 'easeOut' }}
        >
          <Button
            text={link.title}
            icon={link.icon}
            onClick={() => {
              // @ts-expect-error There is no such thing as invokeNative outside FiveM
              window.invokeNative("openUrl", link.url);
            }}
          />
        </motion.div>
      ))}
    </Flex>
  );
}
