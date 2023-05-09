import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { isFeatureEnabled } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { contractAddress } from "../const/Details";

export default function Login() {
  const address = useAddress();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black ">
      // private section
      <h1 className="text-4xl font-semibold tracking-tight text-white lg:text-6xl">
        <span className="text-transparent bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text ">
          NFT
        </span>{" "}
        Gated Content 👀
      </h1>
      <p className="mx-20 mt-4 text-lg text-center text-gray-400 lg:text-2xl lg:mt-8 lg:mx-60">
        This content is reserved for members only! Acquire one of our NFT's to
        unlock the content
      </p>
      <p className="">
        You cannot access the <Link href="/">main page</Link> unless you own an
        NFT from our collection!
      </p>
      <hr />
      <>
        {address ? (
          <p>
            Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet className="p-4 " />
      </>
    </div>
  );
}
