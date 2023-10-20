import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";
import axios from "axios";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Main = ({user,web3}) => {
  const [productList, setProductList] = useState([
    {
      name: "믿음",
      content: "사람에 대한 믿음을 도매직속으로 싸게 내 놨습니다.",
      detail: [
        "니체의 철학에 의하면 다음과 같습니다.",
        `자기 신뢰와 믿음: 니체는 자기 자신을 믿음의 출발점으로 간주합니다.
    그는 믿음이 자기 자신에 대한 확신과 자신감에서 비롯된다고
    주장했습니다.`,
        ` 종교와 믿음: 니체는 종교의 영향력과 믿음에 대해 비판적인 입장을
    취했습니다. 그는 "신의 죽음"이라고 말하며 종교 믿음이 쇠퇴하고 인간
    중심의 가치 체계가 대신 떠오르는 것을 예언했습니다.`,
        ` 의지의 믿음: 니체는 인간의 의지와 결단력을 강조하며, 이러한 의지를
    통해 개인이 자신의 가치와 목표를 찾아나갈 수 있다고 믿었습니다.`,
        ` '아모르 파티'와 믿음: 니체는 사랑과 믿음을 연결시키며 '아모르
    파티'라고 불렀습니다. 이것은 우정과 연민을 기반으로 한 진정한 믿음의
    형태를 나타냅니다.`,
        `    도덕적 믿음과 초월적 믿음: 니체는 도덕적 믿음을 비판하며 도덕적
    가치를 초월적인 개념으로 바라보았습니다. 그는 개인의 힘과 창의성에
    믿음을 두었으며, 도덕적 규범을 뛰어넘는 독립적인 믿음을 지지했습니다`,
      ],
      img: "/imgs/trust.jpeg",
    },
    {
      name: "희망",
      content: "희망이 뭔지 알기위해서 주식을 한다.",
      detail: [
        `비관적 관점과 희망: 니체는 종종 비관적인 관점을 제시하며, 특히 희망을 비판적으로 다루었습니다. 그는 희망을 현재에 대한 불만과 미래에 대한 허상적인 기대로 해석했습니다. 니체는 이러한 희망이 인간의 창의성과 열정을 억누르며 삶의 진정한 가치를 상실시킬 수 있다고 주장했습니다. 따라서 그는 인간이 현재 순간을 받아들이고 변화를 추구하는 중요성을 강조하며 희망에 대한 비판적 입장을 취했습니다`,
        `니체는 희망이 삶의 의미와 연결된 측면도 다뤘습니다. 그는 인간이 자신의 욕구와 가치를 발견하고 이를 실현하기 위해 희망을 가질 수 있다고 믿었습니다. 그러나 이러한 희망은 단순한 허상이 아니라 실제 행동과 변화를 동반해야 한다고 강조했습니다. 따라서 희망을 삶의 의미를 찾고 실현하기 위한 원동력으로 볼 수 있다고 주장했습니다`,
      ],
      img: "/imgs/hope.jpeg",
    },
    {
      name: "사랑",
      content: "옆 편의점 보다 싸게 팝니다.",
      detail: [
        `사랑과 힘: 니체는 사랑을 힘과 관련시켰습니다. 그는 사랑이 욕구와 열정의 표현으로 작용한다고 봤으며, 사랑을 통해 인간은 자신의 감정과 욕구를 표출하고 강화할 수 있다고 주장했습니다. 그러나 니체는 사랑이 종종 욕망의 충족보다는 힘의 교환과 관련이 있다고 믿었습니다. 따라서 그는 사랑을 힘의 흐름으로 해석하며, 이를 인간의 생명력과 창의성을 부각시키는 중요한 원동력으로 보았습니다`,
        `애정과 이타주의에 대한 비판: 니체는 사랑을 이타주의에 대한 비판의 대상으로도 다뤘습니다. 그는 이타주의적인 사랑이 개인의 힘을 약화시키고 독립성을 위협한다고 주장했습니다. 그 대신, 니체는 애정과 사랑이 개인의 욕구와 가치를 추구하며 높이는 데 도움이 되어야 한다고 주장했습니다. 따라서 니체는 자기 사랑과 개인의 발전을 중시하며 사랑을 이러한 관점에서 바라보았습니다`,
      ],
      img: "/imgs/love.jpeg",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedProductImg, setSelectedProductImg] = useState([]);

  const enrollProduct = async () => {
    const body = {
      selectedProduct,
      selectedProductImg,
      user:user.account
    };
    const result = await axios.post("http://localhost:8080/saveCart", body);
    console.log(result);
  };

  return (
    <>
      {" "}
      <Grid
        container
        spacing={3}
        alignItems="center"
        style={{ minHeight: "100vh" }}
        justifyContent="center"
      >
        <Grid item style={{ width: "300px" }}>
          <ProductCard
            product={productList[0]}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            setSelectedProductImg={setSelectedProductImg}
            selectedProductImg={selectedProductImg}
          />
        </Grid>
        <Grid item style={{ width: "300px" }}>
          <ProductCard
            product={productList[1]}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            setSelectedProductImg={setSelectedProductImg}
            selectedProductImg={selectedProductImg}
          />
        </Grid>
        <Grid item style={{ width: "300px" }}>
          <ProductCard
            product={productList[2]}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            setSelectedProductImg={setSelectedProductImg}
            selectedProductImg={selectedProductImg}
          />
        </Grid>
      </Grid>
      <Button
        style={{ position: "relative", left: "75%", marginTop: "10px" }}
        variant="contained"
        onClick={enrollProduct}
      >
        구매하기
      </Button>
    </>
  );
};

export default Main;
