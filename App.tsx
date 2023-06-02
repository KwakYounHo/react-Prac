import React, {useState, useEffect, useRef} from 'react';
import Test from './test';
import IfPrac from './ifPrac/IfPrac';
import IfPrac2 from './ifPrac/IfPrac2';
import IfPrac3 from './ifPrac/IfPrac3';
import IfPrac4 from './ifPrac/IfPrac4';
import IfPrac5 from './ifPrac/IfPrac5';
import IfPrac6 from './ifPrac/IfPrac6';

const component:React.FC = ()=>{
  const [count, setCount] = useState(0);
  const renderCount = useRef(0)

  useEffect(()=>{
    renderCount.current++
    console.log("렌더링 횟수", renderCount.current);
  });

  const renderingComponent:()=>void = () => {
    if (count < 7) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  //첫 번째 if 사용법
  const pages:any = {
    1 : <IfPrac />,
    2 : <IfPrac2 />,
    3 : <IfPrac3 />,
    4 : <IfPrac4 />,
    5 : <IfPrac5 />,
    6 : <IfPrac6 />
  }

  return (
    <div>
      <h1>First Page</h1>
      <Test name={"이 문구가 나오면 성공입니다."}/>
      <button onClick={renderingComponent}>렌더링</button>
      
      {/* 두 번째 if 사용법*/}
      {/* {count===1 && <IfPrac />}
      {count===2 && <IfPrac2 />}
      {count===3 && <IfPrac3 />}
      {count===4 && <IfPrac4 />}
      {count===5 && <IfPrac5 />}
      {count===6 && <IfPrac6 />} */}

      {/* 첫 번째 if 사용법*/}
      {pages[count]}

    </div>
  )
}

export default component