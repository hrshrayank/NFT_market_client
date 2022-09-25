import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { NFTContext } from "../context/NFTContext";
import { Loader, NFTCard,Button } from "../components";
import Image from "next/image";
import NoData from "../assets/no-data-box.png";
import { useRouter } from "next/router";

// import Button from "../Button";

const Admin = () => {
  const { fetchMyNFTsOrCreatedNFTs,connectWallet } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchMyNFTsOrCreatedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
      setIsLoading(false);
      console.log(items);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
      <Head>
        <title>Admin</title>
      </Head>
      <div className="w-full minmd:w-4/5">
        <div className="mt-4">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl mt-2 ml-4 sm:ml-2 font-semibold">
            Admin Dashboard
          </h2>
          </div>
   
          <div className="mt-5 flexBetween justify-start md:justify-center">
          <p className="font-poppins dark:text-white text-nft-black-1 text-2xl mt-2 ml-4 sm:ml-2 font-semibold">Create NFT</p>
          <Button
            btnName="Create"
            btnType="primary"
            classStyles="mx-3 ml-5 rounded-xl"
            handleClick={() => {
          // setActive("");
            router.push("/create-nft");
            }}
          />
         
          </div>
      
      </div>
    </div>
  );
};

export default Admin;
