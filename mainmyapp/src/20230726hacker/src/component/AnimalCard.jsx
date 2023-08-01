import React from "react";
const AnimalCard = ({ animalType }) => {
  const newAni = animalType.toString();
  console.log(newAni);
  console.log(typeof newAni);
  return (
    <div>
      <img src={`img/${newAni}.jpeg`} style={{width:'300px',height:'300px'}}alt="" />
    </div>
  );
};

export default AnimalCard;
