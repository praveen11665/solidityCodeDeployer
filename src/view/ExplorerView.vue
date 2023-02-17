<template>
    <div>
        <h2 class="text-white text-center">Explore here</h2>  
        <div class="mx-auto max-w-xl mb-10 px-4">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Please enter your address." v-model="address">
                <div class="input-group-append">                    
                    <button class="btn btn-dark" type="button" @click="getExploreData">
                        <font-awesome-icon icon="fa-search" />
                    </button>
                </div>
            </div>
            <span class="text-danger" v-if="validation.error">{{ validation.message }}</span>            
            <div v-if="code" class="mt-2">
                <h1 class="text-white text-center">Your Code</h1>
                <textarea v-model="code" class="text-box-align bg-gray-900 text-white" disabled rows="10"></textarea>              
            </div>
        </div> 
        <div class="justify-content-center text-muted" v-if="code">
            <h5 class="fw-bold text-break">ABI: <br>{{ abi }}</h5>                    
            <h5 class="fw-bold text-break">ByteCode: {{ bytecode.trim() }}</h5>   
            <h3 class="text-success text-center fw-bold">
                Your contract has been deployed to address {{  walletAddress }}
            </h3>                 
        </div> 
    </div>
</template>
<script>
export default {
  name: 'ExplorerView',  
  data() {
    return {
        address: '',
        code: '',
        abi: '',
        walletAddress: '',
        bytecode: '',
        validation: {
            error : false,
            message : '',
        },
    }
  },
  methods: {
    getExploreData() {
        if(!this.address) {
            this.validation = {
                error : true,
                message : 'Please enter your address.'
            }
            return false
        }

        let  addressData = JSON.parse(window.localStorage.getItem('addressData'))

        let findData = addressData.find((v) => {
            return v.walletAddress == this.address
        })

        if(!findData) {
            this.validation = {
                error : true,
                message : 'Given address not found.'
            }

            return false
        }

        //this.code = findData.code.split('      ').map((x) => '\n'+ x.trim()).join('\n')
        this.code = findData.code
        this.abi  = findData.abi
        this.bytecode  = findData.bytecode
        this.walletAddress = findData.walletAddress
    }
  },
  mounted() { 
    console.log(JSON.parse(window.localStorage.getItem('addressData')))    
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
    height: auto;
    line-height: 1.75rem;
    font-size: 1.25rem;
    padding: 2.5rem;
    border-radius: 1rem;
    overflow:hidden;
    min-height:100%;
}

.bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39/var(--tw-bg-opacity));
}

.mt-2 {
    margin-top: 2rem;
}
</style>