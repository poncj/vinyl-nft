# Assignment 4 | Vinyl NFT | Next.js

## How to use

Everything in the `/deploy/` folder is intended to be used on local machine.

Everything in the `/production/` folder is for use on the local machine and for configuring the frontend of the application.
At the end of the setup you will have an `/out/` folder to upload to the hosting.

So for a successful installation, we must first deploy the contract, and then upload the files from the production folder to the hosting.

### How to /deploy/ contract

1. Download full repository to your local machine.

2. Open /deploy/ folder via VS Code

3. Create the .env file inside /deploy/ folder and specify your `TBNB_PRIVATE_KEY` in it from which the contract will be deployed.

3. Also specify `TBNB_RPC_URL` in the .env file.

3. Open terminal and start to execute commands:

This command will install all the libraries needed to deploy the contracts

```bash
npm i
```

4. Type next command. It will deploy the contract.

```bash
npx hardhat run scripts/deploy.js --network tbnb
```

4. Аfter executing the previous command in the terminal we should see the contract address. You must copy this address and specify it in your .env as `TBNB_CONTRACT_ADDRESS`.

This is where the deployment of contract ends. Now we need to configure the files of the /production/ folder.

### How to configure /production/

1. Open /production/ folder via VS Code.

2. In `/constants/constants.js` specify the `CONTRACT_ADDRESS`, as `TBNB_CONTRACT_ADDRESS` you specified earlier in the .env.

3. Open terminal and start to execute commands:

This command will install everything you need to configure the frontend for application

```bash
npm i
```

4. Type next command. It will build frontend files for application.

```bash
npx next build
```

5. Type next command. It will prepare frontend files for upload.

```bash
npx next export
```

Now you will see that we have a new directory `/production/out/`. You need to upload the files of the `/out/` folder to the hosting.

## Done!
