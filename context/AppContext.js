import { createContext, useContext } from "react";
import abi from '../utils/WavePortal.json';

const WAVE_PORTAL_ADDRESS = '0x39f257618a4AD5391ecaAe9A675FAc59a72dB837';
const WAVE_CONTRACT_ABI = abi;

export const defaultValues = {
  CONTRACT_ADDRESS: WAVE_PORTAL_ADDRESS,
  CONTRACT_ABI: WAVE_CONTRACT_ABI,
};

const AppContext = createContext(defaultValues);

export default AppContext;

export const useAppContext = () => useContext(AppContext);