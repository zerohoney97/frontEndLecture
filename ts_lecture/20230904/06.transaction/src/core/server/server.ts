// 지갑 서버
import express from "express";
import Wallet from "@coreTransaction/wallet/index";
import path from "path";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
// 지갑 페이지 접속
app.get("/", (req, res) => {
  const page = fs.readFileSync(
    path.join(__dirname, "..", "wallet", "view.html"),
    "utf-8"
  );
  res.send(page);
});

// 지갑을 생성 요청
app.post("/newWallet", (req, res) => {
  res.json(new Wallet());
});

// 지갑들 불러오기
app.post("/walletList", (req, res) => {
  const list = Wallet.getWalletList();

  res.json(list);
});

// 해당 지갑 주소로 지갑 찾기
app.post("/walletSelect", (req, res) => {
  const { account } = req.body;
  console.log(account);
  const privateKey = Wallet.getWalletPrivateKey(account);
  res.json(new Wallet(privateKey));
});

app.listen(4000, () => {
  console.log("gogo");
});
