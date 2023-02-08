import axios from 'axios';

const API_KEY = 'I8AQAEGPWBJNJZ4TWYZTY5IEKSQZK2KAQF';
const API_BALANCE = (address: string) =>
  `http://api.bscscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`;

async function getAmt(addr: string) {
  return await axios.get(API_BALANCE(addr));
}

function formatCurrency(amt: string) {
  const belowOnes = amt.slice(amt.length - 5, amt.length);
  const onesAndAbove = amt.slice(0, amt.length - 5);
  return `${(
    Math.round(parseInt(onesAndAbove) * 100) / 100
  ).toLocaleString()}.${belowOnes}`;
}

// Define the Contract Address for the target smart contract
const contractAddresses = [
  '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
];

for (let addr of contractAddresses) {
  getAmt(addr).then((res) => {
    const { message, result } = res.data;
    if (message === 'OK') {
      console.log(`${addr} ${formatCurrency(result)}`);
    }
  });
}
