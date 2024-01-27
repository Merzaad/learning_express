import { generateKeyPair } from "crypto";
import fs from "fs";
generateKeyPair(
  "rsa",
  {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "top secret",
    },
  },
  (err, publicKey, privateKey) => {
    fs.writeFile("./public.pem", publicKey, (error) => {
      if (error) {
        console.log(error);
      }
    });
    fs.writeFile("./private.pem", privateKey, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
);
