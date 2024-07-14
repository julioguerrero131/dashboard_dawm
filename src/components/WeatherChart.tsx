import { Chart } from "react-google-charts";
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";

export default function WeatherChart({ value, dataGraphic }) {

  let [data, setData] = useState([])

  useEffect(() => {

    (async () => {

      {/* Procesar data */ }

      let processData = [
        ["Hora"]
      ]

      if (value == 0 || value == -1){

        processData[0].push("Precipitación")
        for(let item of dataGraphic) {
          processData.push([item.rangeHours, parseFloat(item.precipitation)])
        }
        
      } else if (value == 1) {

        processData[0].push("Humedad")
        for(let item of dataGraphic) {
          const humidity = await item.humidity.split(" ")[0]
          processData.push([item.rangeHours, parseInt(humidity)])
        }

      } else if (value == 2) {

        processData[0].push("Nubosidad")
        for(let item of dataGraphic) {
          const clouds = await item.clouds.split(" ")[2]
          processData.push([item.rangeHours, parseInt(clouds)])
        }

      }
      
      {/*
      for(let item of dataGraphic) {
        const humidity = await item.humidity.split(" ")[0]
        const clouds = await item.clouds.split(" ")[2]
        processData.push([item.rangeHours, parseFloat(item.precipitation), parseInt(humidity), parseInt(clouds)])
      }
      */}

      setData(processData)

    })()

  }, [value, dataGraphic])

  {/* Configuración */ }

  let options = {
    title: "Precipitación, Humedad y Nubosidad vs Hora",
    curveType: "function",
    legend: { position: "right" },
  }

  {/* Datos de las variables meteorológicas */ }
  // const data = [
  //   ["Hora", "Precipitación", "Humedad", "Nubosidad"],
  //   ["03:00", 13, 78, 75],
  //   ["06:00", 4, 81, 79],
  //   ["09:00", 7, 82, 69],
  //   ["12:00", 3, 73, 62],
  //   ["15:00", 4, 66, 75],
  //   ["18:00", 6, 64, 84],
  //   ["21:00", 5, 77, 99]
  // ];

  {/* JSX */ }

  return (
    <Paper
      sx={{
        // p: 1,
        pb: 3,
        display: 'flex',
        flexDirection: 'column'
      }}
      elevation={5}
      >
      <Chart
        chartType="LineChart"
        data={data}
        width="100%"
        height="500px"
        options={options}
        legendToggle
      />
    </Paper>
  )
}	