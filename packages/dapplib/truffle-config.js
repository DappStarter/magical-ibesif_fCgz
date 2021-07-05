require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth pitch erosion inflict enroll metal genius'; 
let testAccounts = [
"0xa42b1dd4370ed2eafc132988fe91fc9dc5d1ca76e42cc352c9213350110407c1",
"0xee526f4e43aea524a5a963d4f085b9c6b3fba69af823051e99135f43c7249a63",
"0xdd48b6b0895461a7cca6c28c32f23891843298de0ec452372ff7ad8371a994ff",
"0x1a9f68854d8238eca76390f80c1b7579ac004c2cc6249c1b82dbf634105bae32",
"0xc20b399d5478013150be843f72d24de755f92b2866ad4e5565c05d84119f042d",
"0xc7addca73bd3476a3384eb190df1dbe72d3f82047aba8c0717936f9795ae5261",
"0x4b48437ac8de2713f90f034940b02e33f8ea3b80ddf44d3a4d4b0b9284991701",
"0xc250d656e2d69030e6a594000057ef82382c71005bbd45dffc4b27ed6601f19e",
"0xe1465321827976d0194479314ce7a96172befae6357cad7af6e1495c8a79ab37",
"0x75269605142d802f0bb1e7e64180ae0f2d4ad3ea01c3955b237350cfbc219bbe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

