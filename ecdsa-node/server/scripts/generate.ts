const { secp256k1 } = require('@noble/curves/secp256k1'); 
const { toHex } = require("ethereum-cryptography/utils");

// Generate a random private key
const privateKey = secp256k1.utils.randomPrivateKey();

console.log('private key:', toHex(privateKey));

const publicKey = secp256k1.getPublicKey(privateKey);

console.log('public key:', toHex(publicKey));