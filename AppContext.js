import { createContext, useContext } from "react";
import axios from "axios";


// import { network, config } from '@/config';
// import NFT from "../hardhat/artifacts/hardhat/contracts/NFT.sol/NFT.json";
// import NFT from "@/lib/NFT.json";

const fetchData = async (week, year) => {
  const api = await axios.get(
      `/api/data`
  );
  console.log("api", api.data);
};

fetchData();

export const defaultValues = {
  // network,
  // config,
  // NFT,
  CONTRACT_ADDRESS: 'hello world',
};

const AppContext = createContext(defaultValues);

export default AppContext;

export const useAppContext = () => useContext(AppContext);