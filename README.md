# 🥳 FVM-AI-Deploy

If You are a builder on the FVM Chain and you see the future and potential of this amazing Chain, Then FVM-AI-Deploy is for you.

<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/SNC6YFxb/code.png' border='0' alt='code'/></a>

### 👨‍🔬 What is this and what was this built for?

FVM-AI-Deploy was built for the purpose of improving the developer experience on the FVM Chains, For FVM to be used and adopted widely the developer experience has to improve and FVM-AI-Deploy was built with the same goal. Not only does it improve the deployment, interaction and verification process but it also allows **generate the contract code automatically based on user request with the power of AI**. If you want to deploy a contract asap or are you beginer on writing contract, FVM-AI-Deploy is a place for you to genearte contract and deploy in a mins.

## 🤔 Why FVM-AI-Deploy?

Writing flaw less contracts are time consuming and also if begginer wanna explore more kind of contracts based on differnet logics, currently no platform that help for that. So with the ultimate power of AI, FVM-AI-Deploy helps to solve the problem by generating contracts based on yours input.

1. FVM-AI-Deploy will **generate and deploy the contracts** in a mins based on user requirments.

2. It have explore option to explore the depolyed **contracts code , abi and bytecode**. so that devs can easily export those into there frontend to interact with them.

3. It push Contract code, abi, bytecode to the IPFS using **Web3.storage**. Explore option interact with the IPFS to fetch these deatils to our platform.

4. Registery Contract on FVM HyperSpace -> **0xA5A51315b449C7026164111ED142E87cd1C865B7**. Once contract deployed it register on our registery contract with the details like who owns this contract and ipfs links.


## Platform ( Note currently deploy will support FEVM / FVM )

1. Explorer - It fetch the generated contract code, abi and byte code based on your contract search.

2. Deployer - It Generate, compile and deploy contract based on user input

AI mechanism - FVM-AI-Deploy use fine tune version of open-AI Generate model. Here we tweaked that model more into generate storage related contract development. so our results comes well for storage related contracts. Currently we are working on improve the model more into generation on erc20,erc721 and erc1155 development.

--> APIs for developers 👇

API Docs:- https://abi-test.onrender.com/docs#/

- /code [ It generate contract based on user inputs ]

- /compile [ It generate contract, abi, byte code and also it push these deatils to web3.storage {ipfs} ]

<img width="750" alt="Screenshot 2023-02-06 at 6 50 21 PM" src="https://i.postimg.cc/hj2xgcsV/fastapi.png">
