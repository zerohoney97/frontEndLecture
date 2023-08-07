import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
const Chart = ({ account, nftArr }) => {
  const casenum = "2017도17492";
  const [selectedCase, setSelectesCase] = useState([]);
  //   징역모음
  //   const [imprisonment, setImprisonment] = useState([]);
  //   집행유예 모음
  //   const [probation, setProbation] = useState([]);
  //   형량 총정리
  const [result, setResult] = useState([]);

  useEffect(() => {
    let tempArr = [...selectedCase];
    tempArr = nftArr.filter((el) => {
      return el.caseNum === casenum;
    });
    setSelectesCase(tempArr);
  }, [nftArr]);

  const [option, setOption] = useState({
    series: [
      {
        name: "Actual",
        data: [
          //   {
          //     x: "2018",
          //     y: 6553,
          //     goals: [
          //       {
          //         name: "Expected",
          //         value: 7300,
          //         strokeHeight: 2,
          //         strokeDashArray: 2,
          //         strokeColor: "#775DD0",
          //       },
          //     ],
          //   },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "60%",
        },
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"],
        },
      },
    },
  });
  //  result에있는 중복확인
  const validateDuplication = (arr, imprisonment, probation) => {
    let value = true;
    arr.forEach((eachEle, index) => {
      console.log(eachEle.imprisonment, "dasdsad", imprisonment);
      if (eachEle.imprisonment === imprisonment) {
        arr[index] = {
          ...arr[index],
          probation: [...arr[index].probation, parseInt(probation)],
          count: arr[index].count + 1,
        };
        value = false;
      }
    });
    return value;
  };

  // 징역과 집행유예를 각각 imprisonment,probation에 나눠주는 함수
  const changeOption = () => {
    const regex = /\d+개월/g;
    const temp1 = [];
    const temp2 = [];
    selectedCase.forEach((el) => {
      const numbers = el.sentence.match(regex);
      if (numbers) {
        // 24년개월,144개월 등등..에서 숫자와 년을 나눠줌
        temp1.push(numbers[0].slice(0, -2));
        temp2.push(numbers[1].slice(0, -2));

        let tempResult = [];
        temp1.forEach((element, index) => {
          if (tempResult.length === 0) {
            tempResult.push({
              imprisonment: temp1[index],
              probation: [parseInt(temp2[index])],
              count: 1,
            });
          } else {
            if (
              validateDuplication(tempResult, temp1[index], temp2[index]) ===
              true
            ) {
              console.log("들어옴");
              tempResult.push({
                imprisonment: temp1[index],
                probation: [temp2[index]],
                count: 1,
              });
            }
          }
        });
        setResult(tempResult);
      } else {
        console.log("No numbers found.");
      }
    });
  };

  //   집행유예평균 구하는 함수
  const getProbationAvg = (el) => {
    console.log(el);
    const sum = el.probation.reduce((acc, num) => {
      return acc + num;
    }, 0);
    const avg = sum / el.probation.length;
    return avg;
  };

  //  선택된 케이스가 있을 때 실행
  useEffect(() => {
    if (selectedCase.length !== 0) {
      changeOption();
    }
  }, [selectedCase]);

  useEffect(() => {
    let tempOption = { ...option };
    console.log(result);

    result.forEach((el, index) => {
      let temp = getProbationAvg(el);
      tempOption.series[0].data.push({
        x: el.imprisonment,
        y: el.count,
        goals: [
          {
            name: "Expected",
            value: temp,
            strokeHeight: 2,
            strokeDashArray: 2,
            strokeColor: "#775DD0",
          },
        ],
      });
    });
    setOption(tempOption);
  }, [result]);
  useEffect(() => {
    console.log(option);
  }, [option]);
  return (
    <div id="chart">
      <ReactApexChart
        options={option.options}
        series={option.series}
        type="bar"
        height={350}
      />
      {selectedCase.length === 0 ? (
        <></>
      ) : (
        selectedCase.map((el) => {
          return (
            <ul>
              <li>{el.img}</li>
              <li>{el.caseNum}</li>
              <li>{el.caseName}</li>
              <li>{el.date}</li>
              <li>{el.sentence}</li>
            </ul>
          );
        })
      )}
    </div>
  );
};

export default Chart;
