import React from "react";
import { useParams } from "react-router-dom";

export default function Customid() {
  const params = useParams();
  console.log(params);
  console.trace(params);
  return <div>Customid{params}</div>;
}
