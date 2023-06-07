import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

const component123: React.FC = () => {
  let title: string[] = [
    "IfPrac",
    "IfPrac2",
    "IfPrac3",
    "IfPrac4",
    "IfPrac5",
    "IfPrac6",
  ];
  let lis: ReactElement[] = [];
  for (let i = 0; i < title.length; i++) {
    lis.push(<p key={i+1}><NavLink to={"/IfPrac/" + String(i+1)}>{title[i]}</NavLink></p>);
  }
  return <>{lis}</>;
};

export default component123;