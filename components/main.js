import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { ethers } from "ethers";
import { useWeb3 } from "@3rdweb/hooks";
import { useAppContext } from "../context/AppContext";
import Nav from './nav'

export default function Main() {
  const [currentAccount, setCurrentAccount] = useState("");

  const { address } = useWeb3();
  const { CONTRACT_ADDRESS, CONTRACT_ABI } = useAppContext();

  const ABI = CONTRACT_ABI.abi;

  console.log('*', ABI);

  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const waves = await wavePortalContract.getAllWaves();
 
        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        let wavesCleaned = [];
        waves.forEach(wave => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message
          });
        });

        /*
         * Store our data in React State
         */
        console.log('wavesCleaned', wavesCleaned);
        wavesCleaned.reverse();
        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        getAllWaves();
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected();
    getAllWaves();

    let wavePortalContract;

    const onNewWave = (from, timestamp, message) => {
      console.log('*** NewWave', from, timestamp, message);
      getAllWaves();
    };

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      wavePortalContract.on('NewWave', onNewWave);
    }

    return () => {
      if (wavePortalContract) {
        wavePortalContract.off('NewWave', onNewWave);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const data = [
    {
      address: 'f727',
      message: 'stoked',
    }
  ];

  return (
    <div>
      <Head>
        <title>Web3 Boilerplate</title>
        <meta name="description" content="SeanPlusPlus NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav address={address} />

      <main className="md:container md:mx-auto px-2">
        <h1 className="text-4xl font-bold mb-4 mt-4">
          Hello world!
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">
          {data.map((item, idx) => (
            <div key={idx} className="card shadow-lg compact side bg-base-100">
              <div className="flex-row items-center space-x-4 card-body">
                <div className="flex-1">
                  <h2 className="card-title">{item.address}</h2>
                  <p className="text-base-content text-opacity-40">
                    {item.message}
                  </p>
                </div>
                <div className="flex-0">
                  <button className="btn btn-sm">Follow</button>
                </div>
              </div>
            </div> 
          ))}
        </div>
      </main>

      <footer className="text-center pb-10 pt-10">
        <a
          href="https://twitter.com/SeanPlusPlus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by SeanPlusPlus
        </a>
      </footer>
    </div>
  )
}
