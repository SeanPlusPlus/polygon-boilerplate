import { createContext, useContext } from "react";

// import NFT from "../hardhat/artifacts/hardhat/contracts/NFT.sol/NFT.json";

const WAVE_PORTAL_ADDRESS = '0xf7BFa193035855DF416AeC3BAd97c6672142fC6C'

export const defaultValues = {
  // NFT,
  CONTRACT_ADDRESS: WAVE_PORTAL_ADDRESS,
};

const AppContext = createContext(defaultValues);

export default AppContext;

export const useAppContext = () => useContext(AppContext);