import bip39 from "bip39";
import hdkey from "ethereumjs-wallet/hdkey";
import EthereumWallet from "ethereumjs-wallet";

const mnemonic =
  "ecology bubble escape broken alarm source decorate jewel gadget clean surround version";
const seed = bip39.mnemonicToSeed(mnemonic);
const hdKey = hdkey.fromMasterSeed(seed);
const derivedHdKey = hdKey.derivePath("m/44'/60'/0'/0").deriveChild(0);
const wallet = derivedHdKey.getWallet();

const V3_ENCRYPTION_CONFIG = { kdf: "scrypt", n: 1024 };
const password = "132123123";
const v3Wallet = wallet.toV3String(password, V3_ENCRYPTION_CONFIG);
document.write(v3Wallet);
