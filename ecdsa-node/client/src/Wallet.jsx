import server from "./server";
import * as secp from '@noble/curves/secp256k1'; 


function Wallet({ address, setAddress, balance, setBalance,privateKey,setPrivateKey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    var address = secp.getPublicKey(privateKey);
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type in a private key" value={privateKey} onChange={onChange}></input>
      </label>

      <div>
        Address: {address.slice(0,10)}...
      </div>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
