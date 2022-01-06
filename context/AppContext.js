import { createContext, useContext } from "react";
import abi from '../utils/WavePortal.json';

const WAVE_PORTAL_ADDRESS = '0xf7BFa193035855DF416AeC3BAd97c6672142fC6C';
const WAVE_CONTRACT_ABI = abi;

export const defaultValues = {
  CONTRACT_ADDRESS: WAVE_PORTAL_ADDRESS,
  CONTRACT_ABI: WAVE_CONTRACT_ABI,
};

const AppContext = createContext(defaultValues);

export default AppContext;

export const useAppContext = () => useContext(AppContext);