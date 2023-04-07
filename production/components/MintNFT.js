import { ethers } from "ethers";
import { useCallback, useState } from "react";

export default function MintNFT(props) {

    if (!props.children.showMintButton) {
        return false;
    }
    
    const [message, setMessage] = useState("");
    
    const safeMint = useCallback(async() => {
        try {
            const signer = await props.children.provider.getSigner();
            const address = await signer.getAddress();
            await props.children.contract.safeMint(address, {
                value: ethers.utils.parseEther("0.0001")
            });

            setMessage("Success");
            
        } catch(err) {
            setMessage("Error");
            console.log(err);
            return false;
        }
    }); 

    const printMessage = (message) => {
        if (message == 'Success') {
            return (
                <div className="alert alert-success mt-3">
                    <div>{message}</div>
                </div>
            );
        } else {
            return (
                <div className="alert alert-danger mt-3">
                    <div>{message}</div>
                </div>
            );
        }
    };

    return (
        <div>
            <div>   
                <button className="btn btn-success btn-lg shadow" onClick={safeMint}>Mint</button>
            </div>
            {message != "" ? printMessage(message) : ""}
        </div>
    )
}