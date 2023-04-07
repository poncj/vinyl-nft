import styles from '../styles/Index.module.css';
import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import MintNFT from './MintNFT';
import Head from 'next/head';

export default function IndexPage() {
    
    const [showMintButton, setShowMintButton] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);
    const [contract, setContract] = useState(false);
    const [provider, setProvider] = useState(false);

    return (
        <main>
            <div className="container p-3">
                <div className="row g-0 ">
                    <div className="col-4 mx-auto">
                        <Navbar>
                            {
                                {
                                    walletConnected:walletConnected,
                                    setWalletConnected:setWalletConnected,
                                    showMintButton:showMintButton,
                                    setShowMintButton:setShowMintButton,
                                    contract:contract,
                                    setContract:setContract,
                                    provider:provider,
                                    setProvider:setProvider,
                                }
                            }
                        </Navbar>
                    </div>
                </div>
            </div>
            <div className="container p-3">
                <div className="row flex-column g-0">
                    <div className="col-4 mb-4 mx-auto">
                        <Carousel>
                            {
                                {
                                    contract:contract,
                                    provider:provider,
                                }
                            }
                        </Carousel>
                    </div>
                    <div className="col-4 mx-auto d-flex justify-content-center">
                        <MintNFT>
                            {
                                {
                                    showMintButton:showMintButton,
                                    contract:contract,
                                    provider:provider,
                                }
                            }
                        </MintNFT>
                    </div>
                </div>
            </div>
        </main>
    )
}
