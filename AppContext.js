import { createContext, useContext } from "react";
// import { network, config } from '@/config';
// import NFT from "../hardhat/artifacts/hardhat/contracts/NFT.sol/NFT.json";
// import NFT from "@/lib/NFT.json";

export const defaultValues = {
  // network,
  // config,
  // NFT,
  CONTRACT_ADDRESS: "<hello_world>",
};

const AppContext = createContext(defaultValues);

export default AppContext;

export const useAppContext = () => useContext(AppContext);