import { createContext, useContext } from "react";

// import NFT from "../hardhat/artifacts/hardhat/contracts/NFT.sol/NFT.json";

export const defaultValues = {
  // NFT,
  CONTRACT_ADDRESS: '0xb477ccf4f9411AE914CE91Dc0a87AFb08316f956',
};

const AppContext = createContext(defaultValues);

export default AppContext;

export const useAppContext = () => useContext(AppContext);