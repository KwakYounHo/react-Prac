import React, {useState, useEffect, useRef} from 'react';
import Test from './test';

const component:React.FC = ()=>{
  const [count, setCount] = useState(0);
  const renderCount = useRef(0)

  useEffect(()=>{
    renderCount.current++
    console.log("렌더링 횟수", renderCount.current);
  });

  const renderingComponent:()=>void = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>First Page</h1>
      <Test name={"이 문구가 나오면 성공입니다."}/>
      <button onClick={renderingComponent}>렌더링</button>
    </div>
  )
}

export default component