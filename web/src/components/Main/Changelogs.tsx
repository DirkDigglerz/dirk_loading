import { Flex, Text, useMantineTheme } from "@mantine/core";
import SlideSection from "./SlideSection";
import { useSettings } from "../../stores/settings";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

export type ChangeLogProps = {
  title: string;
  date: string;
  bgImg: string;
  entries: {
    type: 'addition' | 'change' | 'removal';
    content: string;
  }[];
};

export default function Changelog() {
  const theme = useMantineTheme();
  const changelogs = useSettings((state) => state.changelogs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextChangelog = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % changelogs.length);
  };

  const prevChangelog = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + changelogs.length) % changelogs.length);
  };

  const currentChangelog = useMemo(() => {
    return changelogs[currentIndex];
  }, [currentIndex, changelogs]);

  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < changelogs.length - 1;

  return (
    <SlideSection
      top='1vh'
      right='1vh'
      title='CHANGELOG'
      side='right'
      icon='book'
      miw='35vh'
    >
      <Flex
        w='100%'
        p='xs'
        bg='rgba(0, 0, 0, 0.5)'
        style={{
          backdropFilter: 'blur(0.5vh)',
          borderRadius: theme.radius.xxs,
          boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
        }}
        align='center'
        justify='space-between'
        gap='sm'
      >
        <FontAwesomeIcon
          icon='angle-left'
          style={{
            cursor: 'pointer',
            color: canGoLeft ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
            pointerEvents: canGoLeft ? 'auto' : 'none',
            fontSize: '1.6vh',
          }}
          onClick={prevChangelog}
        />

        <Flex
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            height: '4vh',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentChangelog.title + currentChangelog.date}
              initial={{
                x: direction === 'left' ? '-100%' : '100%',
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction === 'left' ? '100%' : '-100%',
                opacity: 0,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Text
                fz='xs'
                c='rgba(255, 255, 255, 0.8)'
                style={{
                  fontWeight: 'bold',
                  letterSpacing: '0.1vh',
                  textAlign: 'center',
                }}
              >
                {currentChangelog.title}
              </Text>
              <Text
                size='xxs'
                c='dimmed'
              >
                {currentChangelog.date}
              </Text>
            </motion.div>
          </AnimatePresence>
        </Flex>

        <FontAwesomeIcon
          icon='angle-right'
          style={{
            cursor: 'pointer',
            color: canGoRight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
            pointerEvents: canGoRight ? 'auto' : 'none',
            fontSize: '1.6vh',
          }}
          onClick={nextChangelog}
        />
      </Flex>

      <motion.div
        layout
        initial={false}
        animate={{ height: "auto" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        style={{
          width: '100%',
          padding: theme.spacing.xs,
          gap: theme.spacing.sm,
          background: 'rgba(0, 0, 0, 0.5)',
          maxHeight: '30vh',
          overflowY: 'auto',
          backdropFilter: 'blur(0.5vh)',
          borderRadius: theme.radius.xxs,
          boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {currentChangelog.entries.map((change, index) => (
          <motion.div
            key={`${currentIndex}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.xs,
            }}
          >
            <FontAwesomeIcon
              icon={
                change.type === 'addition' ? 'plus' :
                  change.type === 'change' ? 'pen' : 'trash'
              }
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: theme.fontSizes.xxs,
                aspectRatio: '16:9',
                marginRight: '0.5vh',
                minWidth: '2.5vh',
                borderRadius: theme.radius.xxs,
                padding: '0.5vh',
                backgroundColor:
                  change.type === 'addition' ? 'rgba(26, 120, 26, 0.3)' :
                    change.type === 'change' ? 'rgba(19, 42, 133, 0.46)' :
                      'rgba(255, 0, 0, 0.3)',
              }}
            />

            <Text
              size='xxs'
              c='rgba(255, 255, 255, 0.8)'
              style={{
                fontWeight: 500,
                letterSpacing: '0.1vh',
              }}
            >
              {change.content}
            </Text>
          </motion.div>
        ))}
      </motion.div>
    </SlideSection>
  );
}
