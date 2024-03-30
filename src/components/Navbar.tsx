import React from "react";
import dynamic from "next/dynamic";

export default function Navbar() {
  const WalletMultiButton = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );

  return (
    <div className="h-20 w-full bg-gray-900 flex justify-end items-center px-5">
      <WalletMultiButton />
    </div>
  );
}
