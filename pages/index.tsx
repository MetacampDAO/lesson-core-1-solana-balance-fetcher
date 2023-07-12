import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import AddressForm from "../components/AddressForm";
import * as Web3 from "@solana/web3.js";

const Home: NextPage = () => {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  // There's something wrong with this code, fix it
  const addressSubmittedHandler = async (address: string) => {
    // The variable address contain the pubkey of the user in type "String"
    setAddress(address);

    // Currently the balance state is hardcoded to the value 1000
    // Your task is to fetch the user current balance and update the state with the correct value
    setBalance(1000);

    // Challenge 1: Use the try-catch block to handle error and display the error using alert(error)
    // Challenge 2: Add wallet adapter. Hint => Google "Solana wallet adapter"
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>Start Your Solana Journey</p>
        <AddressForm handler={addressSubmittedHandler} />
        <p>{`Address: ${address}`}</p>
        <p>{`Balance: ${balance} SOL`}</p>
      </header>
    </div>
  );
};

export default Home;
