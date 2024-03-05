import { Button, Card, Container, Flex, Grid, Kbd, Paper, SegmentedControl, Text, Title } from '@mantine/core';
import { keys, keyboardView } from '.././settings.json';
import { useState } from 'react';

type KeyboardHelpProps = {
  onClose: () => void;
};

const KeyboardHelp = (data: KeyboardHelpProps) => {
  const [currentKey, setCurrentKey] = useState(null);
  const [keyType, setKeyType] = useState('walk');

  if (!keyboardView.showFull) {
    return (

      <Paper
          shadow="xs"
          radius="md"
          bg = {"blackblur.5"}
          w = {"100%"}
        >
        <Flex direction={"column"} gap={8} p={4} >
        <Title c={"white"} p={4}>Key List</Title>
          {Object.keys(keyboardView.keyList).map((keys) => (
            <Paper>
              <Flex key={keys}>
                <Kbd>{keys.toUpperCase()}</Kbd>
                <Flex direction={"column"}>
                  <Text size="lg">{keyboardView.keyList[keys as keyof typeof keyboardView.keyList].title}</Text>
                  <Text size="sm">{keyboardView.keyList[keys as keyof typeof keyboardView.keyList].description}</Text>
                </Flex>
              </Flex>
            </Paper>
          ))}
        </Flex>
      </Paper>
    );
  };

  return (
    <Card p="xs" style={{gap:"0.5rem"}} w="35vw" pos="absolute" right="1rem" top="15vh">
      <Title ta={"center"} size={"h2"} w={"100%"} onClick={() => data?.onClose()}>In Game Keys</Title>
        <SegmentedControl
          data={[
            { label: "Walk", value: "walk" },
            { label: "Vehicle", value: "veh" },
          ]}
          value={keyType}
          onChange={(value) => setKeyType(value)}
        />

      <Card ta={"center"} p="xs" style={{gap: "0.25rem"}}>
        {keys.map((key, index) => (
          <Flex key={index} gap={4}>
            {Object.keys(key).map((keyName, index) => {
              const currentKeyType = key[keyName] as { walk: string[]; veh: string[]; };
              return (
                <Kbd
                  key={index}
                  className={`${
                    (keyName === 'ctrl' || keyName ===  'alt')? '' : 'grow'
                  }
                  ${currentKeyType[keyType] ? '' : 'opacity-50'}`}

                  onClick={() => {
                    setCurrentKey(currentKeyType);
                  }}
                >
                  {keyName.toUpperCase()}
                </Kbd>
              );
            })}
          </Flex>
        ))}
      </Card>
      <Card style={{flexGrow:1, justifyContent:"center", alignItems:"center"}}>
        <Text ta={"center"}>
          {currentKey && currentKey[keyType] ? (currentKey[keyType] as string[]).map((msg) => (
            <Text key={msg} size="sm">
              {msg}
            </Text>
          )) : 'Click on a key to see its function'}
        </Text>
      </Card>
    </Card>
  );
};

export default KeyboardHelp;

