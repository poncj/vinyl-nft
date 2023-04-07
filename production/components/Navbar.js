import { useState, useCallback, useEffect, useRef } from "react";
import Web3Modal from 'web3modal';
import * as ethers from 'ethers';
import { CONTRACT_ABI, CONTRACT_ADDRESS, CHAIN_ID } from '../constants/constants';

export default function Navbar(props) {

  const Web3ModalRef = useRef();

  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!props.children.walletConnected) {
        Web3ModalRef.current = new Web3Modal({
            network: 97,
            providerOptions: {},
            disableInjectedProvider: false
        });
    }
  }, [props.children.walletConnected]);

  const getProvider = async () => {
    try {
      const provider = await Web3ModalRef.current.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const {chainId} = await web3Provider.getNetwork();
      if (chainId != CHAIN_ID) {
          window.alert("change network to chainId 97");
      }
      return web3Provider;
    } catch(err) {
      console.log(err);
      return false;
    }
  };

  const getContract = async (provider) => {
    try {
      const signer = await provider.getSigner();
      const contract = await new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      return contract;  
    } catch(err) {
      console.log(err);
      return false;
    }
  };

  const handleClick = useCallback(async () => {
      
      if (props.children.walletConnected) {
        props.children.setProvider(false);
        props.children.setContract(false);
        props.children.setWalletConnected(false);
        props.children.setShowMintButton(false);
        setAddress("");
        return false;
      }

      const provider = await getProvider();
      
      if (!provider) {
        return false;
      }
      
      const contract = await getContract(provider);

      if (!contract) {
        return false;
      }

      const address = await provider.getSigner();

      setAddress(await address.getAddress());

      props.children.setProvider(provider);
      props.children.setContract(contract);

      props.children.setWalletConnected(true);
      props.children.setShowMintButton(true);
    }
  );

  return (
    <nav className="navbar rounded navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><i>Vinyl NFT</i></a>
            <a title={address} className="navbar-brand btn btn-primary mx-0 text-white" href="#" onClick={handleClick}>{props.children.showMintButton ? "Sign out":  "Sign in"}</a>
        </div>
    </nav>
  )
}
