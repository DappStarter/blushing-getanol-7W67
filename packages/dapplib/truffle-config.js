require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain uncover inner arena orange summer'; 
let testAccounts = [
"0xd00b952bdf8e536a1ddcc79f6f30e1d6d2fb9ad33c0a79eb7a41865b5e4f70c9",
"0x5dbfa8f387d228cab427211d4eba775fd61137c6900ad7843969a9c82ea47428",
"0xd3f051cc3f52146ea1384c9980fae346f82bd965d6ee4a7422e243148384ac6b",
"0xb5d8f09a38bbcdbf568f1f8179339e4c35d5f7fe4f7cfc3bce5141f35fe6c34f",
"0xf987680e2aba3ef3a2231bb8c48ae8d6ab3672277488e2f203ac305397e2eb6e",
"0x9c0acae728a712b45fb8f4f4869d88e2661cd68dbf62f55215131372c29fda2e",
"0xa74c9a3c0357b14596a5c568959514e62ee68902359adaa5e556f30ae1949fe3",
"0x935f487b43de26c30608671acd53e0bd08209d9103e6abc5d7b34f5c6224c0e4",
"0x5a95513fa1b7ecf0927aa027fa0a3f5a255e87a3a2ce4090e154bbe1e6a7241b",
"0x3c8e075e6e3efba8282bfc5a52cca816711370a31c3ca4cb19d5006ba2b403c9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

