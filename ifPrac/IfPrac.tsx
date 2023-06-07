import React from "react";
import myData from "../contextPrac"
const componenet: React.FC = () => {
  const data = React.useContext(myData)
  return (
    <>
      <h1>두 번째 페이지</h1>
      헬로~{data.hello}!
      나의 프로젝트는 : {data.name} 입니다.
      나는 {data.age}살 입니다.
    </>
  );
};

export default componenet;
