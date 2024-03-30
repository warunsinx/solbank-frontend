import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@coral-xyz/anchor";
import { useEffect, useState } from "react";
import idl from "../anchor_solbank_program.json";

const PROGRAM_ID = new anchor.web3.PublicKey(
  `DVNJZ33NMmtUsng1muNqzfnNKcCW2EYbKcH3uAxP7tyC`
);

export default function useSolBank() {
  const [program, setProgram] = useState<anchor.Program>();
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  useEffect(() => {
    let provider: anchor.Provider;

    try {
      provider = anchor.getProvider();
    } catch {
      if (!wallet) return;
      provider = new anchor.AnchorProvider(connection, wallet, {});
      anchor.setProvider(provider);
    }

    const program = new anchor.Program(idl as anchor.Idl, PROGRAM_ID);
    setProgram(program);
  }, [connection, wallet]);

  return { programId: PROGRAM_ID, program, wallet };
}
