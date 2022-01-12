import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Head from 'next/head'
import { ethers } from "ethers";
import { useWeb3 } from "@3rdweb/hooks";
import { useAppContext } from "../context/AppContext";

import Nav from './nav'
import About from './about'
import Mining from './mining'

export default function Main() {
  const [allWaves, setAllWaves] = useState([]);
  const [newMessage, setNewMessage] = useState(false);
  const [mining, setMining] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { register, reset, handleSubmit } = useForm();
  const { address } = useWeb3();
  const { CONTRACT_ADDRESS, CONTRACT_ABI } = useAppContext();
  const ABI = CONTRACT_ABI.abi;

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
        wavesCleaned.reverse();
        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const wave = async (message) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        let count = await wavePortalContract.getTotalWaves();

        /*
        * Execute the actual wave from your smart contract
        */
        const waveTxn = await wavePortalContract.wave(message, { gasLimit: 300000 })
        setMining(true);
        await waveTxn.wait();

        /*
        * Once we have the count we're good to go
        */
        count = await wavePortalContract.getTotalWaves();
        setMining(false);

        const waves = await wavePortalContract.getAllWaves();
        let wavesCleaned = [];
        waves.forEach(wave => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message
          });
        });
        wavesCleaned.reverse();
        setAllWaves(wavesCleaned);
        setDisabled(false);
        setNewMessage(true)
        reset();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
      setNewMessage(true)
    }
  }

  useEffect(() => {
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

  const onSubmit = (data, e) => {
    e.preventDefault();
    setDisabled(true);
    console.log(data);
    wave(data.message);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>
      <Head>
        <title>Web3 Boilerplate</title>
        <meta name="description" content="SeanPlusPlus NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav address={address} />

      <main className="flex m-2">
        <div className="lg:w-3/12 m-1 hidden lg:block">
          <div className="grid grid-cols-1 gap-6 lg:p-10 lg:bg-base-200 rounded-box mb-5">
            <div className="card shadow-lg compact side bg-base-100 mb-1">
              <div className="card-body">
                <h2 className="my-4 text-4xl font-bold card-title">
                  Hello <span role="img" aria-label="wave">👋</span>
                </h2>
                <div className="bio">
                  <About />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto lg:w-6/12 m-1">
          <div className="grid grid-cols-1 gap-6 lg:p-10 lg:bg-base-200 rounded-box">
            <div className="card shadow-lg compact side bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <div className="relative">
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                      <input
                        {...register("message")}
                        type="text"
                        placeholder="New Message"
                        className="w-full pr-16 input input-bordered"
                        autoComplete="off"
                        disabled={disabled}
                      /> 
                      <button
                        className="absolute top-0 right-0 rounded-l-none btn btn-primary"
                        disabled={disabled}
                      >
                        send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {mining &&
              <Mining />
            }
            {allWaves.map((wave, idx) => {
              return (
                <div key={idx} className="card shadow-lg compact side bg-base-100">
                  <div className="flex-row items-center space-x-4 card-body">
                    <div className="flex-1">
                      <h3 className="card-title">
                        {wave.message}
                      </h3>
                      <p className="text-base-content text-opacity-40">
                        {wave.address}
                      </p>
                      <p className="text-base-content text-opacity-40">
                        {wave.timestamp.toString()}
                      </p>
                    </div>
                    {newMessage && idx === 0 && (
                      <div className="flex-0">
                        <div className="badge badge-success">
                          New Message
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="lg:w-3/12 m-1 hidden lg:block">
          <div className="grid grid-cols-1 gap-6 p-10 sm:bg-base-200 rounded-box mb-5 m-h-600">
            <div className="card shadow-lg compact side bg-base-100">
              <div className="card-body">
                <div className="stat-value text-primary">{allWaves.length}</div> 
                <div className="stat-title">Messages so far</div> 
              </div>
            </div>
          </div>
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
