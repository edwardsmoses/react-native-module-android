import { NativeModules } from 'react-native';

type PocAndroidType = {
  multiply(a: number, b: number): Promise<number>;
};

const { PocAndroid } = NativeModules;

export default PocAndroid as PocAndroidType;
