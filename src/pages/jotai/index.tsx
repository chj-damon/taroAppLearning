import { Button } from '@taroify/core';
import { View } from '@tarojs/components';
import { atomA, atomB, atomC, atomD } from './localAtom';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

export default function JotaiDemo() {
  const updateAtomA = useUpdateAtom(atomA);
  const updateAtomB = useUpdateAtom(atomB);
  const updateAtomC = useUpdateAtom(atomC);
  const updateAtomD = useUpdateAtom(atomD);

  const modifyAtomA = () => {
    updateAtomA(atomA => atomA + 1);
  };
  const modifyAtomB = () => {
    updateAtomB('world');
  };
  const modifyAtomC = () => {
    updateAtomC({ name: 'jie' });
  };
  const modifyAtomD = () => {
    updateAtomD(atomD => !atomD);
  };

  return (
    <View>
      <DisplayAtomA />
      <Button color="primary" onClick={modifyAtomA}>
        修改atomA
      </Button>
      <View style={{ height: 10, backgroundColor: '#eee' }} />
      <DisplayAtomB />
      <Button color="primary" onClick={modifyAtomB}>
        修改atomB
      </Button>
      <View style={{ height: 10, backgroundColor: '#eee' }} />
      <DisplayAtomC />
      <Button color="primary" onClick={modifyAtomC}>
        修改atomC
      </Button>
      <View style={{ height: 10, backgroundColor: '#eee' }} />
      <DisplayAtomD />
      <Button color="primary" onClick={modifyAtomD}>
        修改atomD
      </Button>
      <View style={{ height: 10, backgroundColor: '#eee' }} />
    </View>
  );
}

const DisplayAtomA = () => {
  const atomAValue = useAtomValue(atomA);
  return <View>{atomAValue}</View>;
};
const DisplayAtomB = () => {
  const atomBValue = useAtomValue(atomB);
  return <View>{atomBValue}</View>;
};
const DisplayAtomC = () => {
  const atomCValue = useAtomValue(atomC);
  return <View>{atomCValue.name}</View>;
};
const DisplayAtomD = () => {
  const atomDValue = useAtomValue(atomD);
  return <View>{String(atomDValue)}</View>;
};
