import { createContext, useContext } from "react";
import abi from '../utils/WavePortal.json';

const WAVE_PORTAL_ADDRESS = '0x88A5722d8d26D3c30389D2AeE39AAbe75988Cb78';
const WAVE_CONTRACT_ABI = abi;

export const defaultValues = {
  CONTRACT_ADDRESS: WAVE_PORTAL_ADDRESS,
  CONTRACT_ABI: WAVE_CONTRACT_ABI,
};

const AppContext = createContext(defaultValues);

export default AppContext;

export const useAppContext = () => useContext(AppContext);