import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { NFTContext } from "../context/NFTContext";
import { Loader, NFTCard } from "../components";
import Image from "next/image";
import NoData from "../assets/no-data-box.png";

const CreatorDashboard = () => {
  const { fetchMyNFTsOrCreatedNFTs } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (!isLoading && nfts?.length === 0) {
    return (
      <div className="flexCenter flex-col sm:p-4 pr-16 pt-2 pb-16 pl-16 min-h-screen">
        <Head>
          <title>Listed NFTs</title>
        </Head>
        {/* <Image src={NoData} height={500} width={500} objectFit="contain" /> */}
        <h1 className="font-poppins dark:text-white -mt-4 text-nft-black-1 text-2xl ">
        Contrary to popular belief, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </h1>

      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
      <Head>
        <title>Listed NFTs</title>
      </Head>
      <div className="w-full minmd:w-4/5">
        <div className="mt-4">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl mt-2 ml-4 sm:ml-2 font-semibold">
            NFTs Listed for Sale janfalkmlkfam bjnadlnflan jnnnknk
          </h2>
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {nfts.map((nft) => (
              <NFTCard key={`nft-${nft.tokenId}`} nft={nft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
