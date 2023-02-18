<template>
    <div>
        <h2 class="text-white text-center">Deploy here</h2>

        <div class="mx-auto max-w-xl mb-10 px-4">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Please enter your solidity contract." v-model="question">
                <div class="input-group-append">
                    <button class="btn btn-dark" type="button" disabled v-if="apiFetching">
                        <font-awesome-icon icon="fa-spinner" spin />
                    </button>
                    <button class="btn btn-dark" type="button" @click="getCompilerCode" v-else>
                        Fetch
                    </button>
                </div>
            </div>
            <span class="text-danger" v-if="validation.error">{{ validation.message }}</span>

            <div v-if="code" class="mt-2">
                <h1 class="text-white text-center">Your Code</h1>
                <textarea v-model="code" class="text-box-align bg-gray-900 text-white" disabled></textarea>

                <div class="justify-content-center text-center" v-if="!walletAddress">
                    <h5 class="text-success text-center fw-bold">
                        Your contract executed successfully.Deploy your contract here...
                    </h5>
                    <button class="btn btn-dark" type="button" disabled v-if="deployFetching">
                        <font-awesome-icon icon="fa-spinner" spin />
                    </button>
                    <button class="btn btn-dark" type="button" @click="codeDeploy" v-else>
                        Deploy
                    </button>
                </div>                     
                <div v-else>
                    <h5 class="text-success text-center fw-bold">Your contract has been deployed to address {{  walletAddress }}</h5>
                </div>
            </div>                
        </div>
    </div>
</template>
<script>
import Web3 from 'web3'
import { Web3Storage } from "web3.storage";
import { useCompilerStore } from '@/stores/modules/compiler.module'

export default {
  name: 'DeployerView',  
  data() {
    return {
      question: '',
      code: '',
      abi: '',
      bytecode: '',
      validation: {
        error : false,
        message : '',
      },
      contractExecute: false,
      apiFetching: false,
      deployFetching: false,
      walletAddress: '',
      metaMaskAccount: '',
    }
  },
  setup() {
    const compilerStore = useCompilerStore()

    return { compilerStore }
  },
  computed: {
    web3AccessToken() {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRFN0VENEIxYjYyMUY1RTU5QThlNEQxODk3RDE5NjdGRThGOUFlNmUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY3MDY4MjAxMzYsIm5hbWUiOiJtYW5pIn0.kxOPF3kxqW4B7JTkAGbhtduw2TER7iJWwTQ8TLYmB7E'
    },
  },
  methods: {
    getCompilerCode() {
        if(!this.question) {
            this.validation = {
                error : true,
                message : 'Please enter your solidity contract.'
            }
            return false
        }

        this.apiFetching = true
        this.validation = {
            error : false,
            message : ''
        }

        this.compilerStore.fetchCode(this.question).then(
        (response) => {
            this.apiFetching = false

            if(response.code) {
                let value = 'SimpleStorage.sol'

                if(response.compile_data.contracts[value].SimpleStorage) {
                    this.abi = response.compile_data.contracts[value].SimpleStorage.abi
                    this.bytecode = response.compile_data.contracts[value].SimpleStorage.evm.bytecode.object
                } else {
                    this.abi = response.compile_data.contracts[value].Storage.abi
                    this.bytecode = response.compile_data.contracts[value].Storage.evm.bytecode.object
                }

                this.code = response.code
            }
        }).catch(() => {
            this.validation = {
                error : true,
                message : 'Something Went wrong. Please try again.'
            }

            this.apiFetching = false
        })
    },
    async codeDeploy() {
        if(!this.metaMaskAccount) {
            let accounts = await window.web3.eth.getAccounts();
            this.metaMaskAccount = accounts[0]
        }

        this.deployFetching = true
        var deployingContract = new window.web3.eth.Contract(this.abi).deploy({
            data: this.bytecode,
            arguments: []
        })

        await deployingContract.estimateGas();
        var deployedContract = await deployingContract.send({
            from: this.metaMaskAccount
        })       

        this.walletAddress = deployedContract.options.address

        this.storeContract({
            question: this.question,
            code: this.code,
            abi: this.abi,
            bytecode: this.bytecode,
            walletAddress: this.walletAddress,
        })        

        this.deployFetching = false
    },
    async storeContract(obj) {
        const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });       
        const files = [new File([blob], "contract.json")];
        const client = new Web3Storage({ token: this.web3AccessToken })        
        const cid = await client.put(files, {
            wrapWithDirectory: false,
        });

        let data = [];
        data = JSON.parse(localStorage.getItem('addressData')) || [];
        data.push({            
            address: this.walletAddress,
            cid: cid,
        })

        localStorage.setItem('addressData', JSON.stringify(data));

        return cid;
    },    
  },  
  async mounted() { 
    if(window.ethereum){
        window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        let accounts = await window.web3.eth.getAccounts();

        this.metaMaskAccount = accounts[0]        
    }
  }
}
</script>

<style scoped>
.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}
.max-w-xl {
    max-width: 36rem;
}
.mb-10 {
    margin-bottom: 2.5rem;
}
.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.text-box-align {
    width: 100%;
    height: 50vh;
    line-height: 1.75rem;
    font-size: 1.25rem;
    padding: 2.5rem;
    border-radius: 1rem;
}

.bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39/var(--tw-bg-opacity));
}

.mt-2 {
    margin-top: 2rem;
}
</style>