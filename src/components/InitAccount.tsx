import React from "react";
import useSolBank from "./useSolBank";
import * as anchor from "@coral-xyz/anchor";

export default function InitAccount() {
  const { programId, program, wallet } = useSolBank();

  const handleInitAccount = async () => {
    if (!program || !wallet) return;

    try {
      const [vaultPda] = anchor.web3.PublicKey.findProgramAddressSync(
        [wallet.publicKey.toBuffer()],
        programId
      );

      const sig = await program.methods
        .initUserVault()
        .accounts({
          userVaultAccount: vaultPda,
        })
        .rpc();
      console.log(`https://explorer.solana.com/tx/${sig}?cluster=custom`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleInitAccount}
      className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
    >
      Init Account
    </button>
  );
}
