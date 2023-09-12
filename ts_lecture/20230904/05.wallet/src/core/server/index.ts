import Block from "@coreP2P/block/block";
import P2P from "./p2p";
import express, { Express, Request, Response } from "express";
import os from "os";
import cors from "cors";
const app: Express = express();
const ws: P2P = new P2P();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    // 도메인 혀용 옵션
    // 접근을 허용할 도메인
    // 여러개의 도메인을 허용하고 싶다면 배열의 형태로 넣어주면 된다.
    origin: "http://127.0.0.1:5501",
    // 클라이언트의 요청에 쿠키를 포함할지의 속성
    credentials: true,
  })
);
app.get("/chains", (req: Request, res: Response) => {
  res.json(ws.get());
});

app.post("/block/mine", (req: Request, res: Response) => {
  // 블록에 기록할 내용을 받고
  const { data }: { data: Array<string> } = req.body;
  const newBlock: Block | null = Block.generateBlock(
    ws.latestBlock(),
    data,
    ws.getAdjustmentBlock()
  );
  if (newBlock === null) {
    res.send("error newBlock is null");
  }

  ws.addToChain(newBlock);
  res.json(newBlock);
});

// post 작성을 했지만 get으로 바꿈=> 오타 문제 때문에 v4를 자신의 os에서 가지고 올거임
app.get("/peer/add", (req: Request, res: Response) => {
  const networkInterface = os.networkInterfaces();
  let v4: string;
  for (const key in networkInterface) {
    const Array = networkInterface[key];

    for (const key of Array) {
      if (!key.internal && key.family === "IPv4") {
        v4 = key.address;
        // v4 ip 주소
      }
    }
  }
  ws.addToPeer(`ws://${v4}:7545`);
  res.end();
});

app.get("/peer", (req: Request, res: Response) => {
  const sockets = ws.getSocket();
  res.json(sockets);
});



app.listen(8080, () => {
  console.log("gogo");
  ws.listen(7545);
});

// http://172.25.176.1:8080/peer/add
