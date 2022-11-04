import React from "react";
import Plot from 'react-plotly.js';
import './Graph.css'

export default function Graph() {
  const data = [
    {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mode: "markers",
    },
  ];
  const layout = { title: "Chart Title" };

  return(
    <div className = {"graph"}>
      <Plot data={data} layout={layout} />
    </div>
  );
}