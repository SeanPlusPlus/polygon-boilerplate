import { createContext, useContext } from "react";
import abi from '../utils/WavePortal.json';

const WAVE_PORTAL_ADDRESS = '0x25af1A7f3bCf842503da9951D46C16D905eE4eF6';
const WAVE_CONTRACT_ABI = abi;

export const defaultValues = {
  CONTRACT_ADDRESS: WAVE_PORTAL_ADDRESS,
  CONTRACT_ABI: WAVE_CONTRACT_ABI,
};

const AppContext = createContext(defaultValues);

export default AppContext;

export const useAppContext = () => useContext(AppContext);