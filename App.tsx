import React, { useState, useEffect, useRef } from "react";
import Test from "./test";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import IfPrac from "./ifPrac/IfPrac";
import IfPrac2 from "./ifPrac/IfPrac2";
import IfPrac3 from "./ifPrac/IfPrac3";
import IfPrac4 from "./ifPrac/IfPrac4";
import IfPrac5 from "./ifPrac/IfPrac5";
import IfPrac6 from "./ifPrac/IfPrac6";
import Test2 from "./test2";
import myData from "./contextPrac"

const component = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
    console.log("렌더링 횟수", renderCount.current);
  });

  const renderingComponent: () => void = () => {
    if (count < 7) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <myData.Provider value={{hello: "world", name: "Prac", age:20}}>
      <h1>First Page</h1>
      <Test name={"이 문구가 나오면 성공입니다."} />
      <button onClick={renderingComponent}>렌더링</button>
      <Nav />
      <Routes>
        <Route path={"/IfPrac/1"} element={<IfPrac />} />
        <Route path={"/IfPrac/2"} element={<IfPrac2 />} />
        <Route path={"/IfPrac/3"} element={<IfPrac3 />} />
        <Route path={"/IfPrac/4"} element={<IfPrac4 />} />
        <Route path={"/IfPrac/5"} element={<IfPrac5 />} />
        <Route path={"/IfPrac/6"} element={<IfPrac6 />} />
        <Route path="/" element={<Test2 name={"Hello"}>world</Test2>} />
        {/* <Route path={"*"} element={<Navigator to='/' replace />} /> */}
      </Routes>
      {/* 두 번째 if 사용법*/}
      {/* {count===1 && <IfPrac />}
      {count===2 && <IfPrac2 />}
      {count===3 && <IfPrac3 />}
      {count===4 && <IfPrac4 />}
      {count===5 && <IfPrac5 />}
      {count===6 && <IfPrac6 />} */}

      {/* 첫 번째 if 사용법*/}
      {/* {pages[count]} */}
      </myData.Provider>
    </>
  );
};

export default component;
