import React, { useEffect, useState } from "react";
import { mintJusticeTokenContract } from "../contracts/index";
import AnimalCard from "./AnimalCard";
const Main = ({ account, nftInfo2 }) => {
  // remix 꺼졌으면 atAddress로 불러오기 가능, 주소 복사 필수
  const [newAnimalCard, setNewAnimalCard] = useState("");
  // nft정보를 저장
  const mint = async () => {
    try {
      if (!account) return;
      const res = await mintJusticeTokenContract.methods
        // .mintJusticeToken(
        //   "goldeHammer",
        //   "2017도17494",
        //   "살인",
        //   "2017-07-30 13:00",
        //   "징역24개월 집행유예36개월"
        // )
        // .mintJusticeToken(
        //   "goldeHammer",
        //   "2015도15101",
        //   "강간",
        //   "2015-07-31 13:30",
        //   "징역12개월 집행유예24개월"
        // )
        // .mintJusticeToken(
        //   "goldeHammer",
        //   "2016도13362",
        //   "강도",
        //   "20201618-07-30 9:00",
        //   "징역36개월 집행유예12개월"
        // )
        // .mintJusticeToken(
        //   "goldeHammer",
        //   "2015노1180",
        //   "살인",
        //   "2015-01-30 18:00",
        //   "징역120개월 집행유예48년"
        // )
        // .mintJusticeToken(
        //   "goldeHammer",
        //   "2022노3417",
        //   "특수상해",
        //   "2022-02-04 13:00",
        //   "징역60개월 집행유예12개월"
        // )
        // .mintJusticeToken(
        //   "goldeHammer",
        //   "2017도17494",
        //   "살인",
        //   "2017-07-30 13:00",
        //   "징역84개월 집행유예12개월"
        // )
        // .mintJusticeToken(
        //   "goldeHammer",
        //   "2017도17494",
        //   "살인",
        //   "2017-07-30 13:00",
        //   "징역24개월 집행유예12개월"
        // )
        .mintJusticeToken(
          "goldeHammer",
          "2015도15101",
          "강간",
          "2015-07-31 13:30",
          "징역1개월 집행유예3개월"
        )
        .send({ from: account });
      console.log(res);
      if (res.status) {
        const balance = await mintJusticeTokenContract.methods
          .balanceOf(account)
          .call();
        console.log(balance.length);
        const animalTokenId = await mintJusticeTokenContract.methods
          // 이 부분에서 balance.length를 사용할시 undefined가 발생한다. 따라서 balance는 민트된 nft의 양이므로 굳이 length를 쓰지 않고 일반 balance를 사용
          .tokenOfOwnerByIndex(account, parseInt(balance, 10) - 1)
          .call();
        console.log(animalTokenId);

        const animalType = await mintJusticeTokenContract.methods
          .justiceTypes(animalTokenId)
          .call();
        console.log(animalType);

        setNewAnimalCard(animalType);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {nftInfo2 == "" ? (
        <></>
      ) : (
        nftInfo2["0"].map((img, index) => {
          return (
            <ul>
              <li>{nftInfo2["0"][index]}</li>
              <li>{nftInfo2["1"][index]}</li>
              <li>{nftInfo2["2"][index]}</li>
              <li>{nftInfo2["3"][index]}</li>
              <li>{nftInfo2["4"][index]}</li>
            </ul>
          );
        })
      )}
      <button onClick={mint}>mint</button>
    </div>
  );
};

export default Main;
