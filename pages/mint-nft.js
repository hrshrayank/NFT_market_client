import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import { NFTContext } from "../context/NFTContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader, NFTCard, SearchBar, Banner ,Button} from "../components";
// import { Button } from "@chakra-ui/core";
import { useCounter } from "@chakra-ui/counter"
import { MinusIcon, AddIcon } from '@chakra-ui/icons'


import images from "../assets";

const Minting = () => {
  const { fetchMyNFTsOrCreatedNFTs, publicMint } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSelect, setActiveSelect] = useState("Recently Added");
  const counter = useCounter({
    max: 10,
    min: 1,
    step: 1,
  })
  const publicminting = async () => {
    await publicMint();

    // router.push("/");
  };


  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-start items-center flex-col min-h-screen">
      <Head>
        <title>Minting</title>
      </Head>
      <div className="w-full flex-col flex-0">
        <Banner
          name="Minting"
          childStyles="text-center mb-4"
          parentStyle="h-60 justify-center"
        />
      </div>
      <div className="mt-7 flex justify-center" >
  
              <div className="containerMint dark:text-white text-nft-black-1">
              <MinusIcon onClick={() => counter.decrement()}/>
              
              {counter.value? (
                <input value={counter.value} className="dark:bg-nft-black-3 bg-white"/>
              ) :  (
                <input defaultValue="1" className="dark:bg-nft-black-3 bg-white"/>

              ) }

              <AddIcon onClick={() => counter.increment()}/>
                
              </div>
        </div>
           <div className="mt-7 flex justify-center">
           <button className="mintbutton" onClick={publicminting}>Mint</button>
       
       </div>
      
    </div>
  );
};

export default Minting;
