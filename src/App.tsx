import Grid from '@mui/material/Unstable_Grid2'
import './styles/App.css'
import Indicator from './components/Indicator'
import Summary from './components/Summary'
import BasicTable from './components/BasicTable'
import WeatherChart from './components/WeatherChart'
import ControlPanel from './components/ControlPanel'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  {/* Variable de estado y función de actualización */ }

  let [indicators, setIndicators] = useState([])
  let [rowsTable, setRowsTable] = useState([])
  let [dataGraphic, setDataGraphic] = useState([])
  let [tunnel, setTunnel] = useState([])


  {/* Hook: useEffect */ }

  {/* Función para el efecto secundario a ejecutar y Arreglo de dependencias */ }

  useEffect(() => {

    (async () => {

      // {/* Request */ }

      // let API_KEY = "36f32d81d506e434b4d202f2d33bf699"
      // let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
      // let savedTextXML = await response.text();

      {/* LocalStorage */ }

      let savedTextXML = localStorage.getItem("openWeatherMap")
      let expiringTime = localStorage.getItem("expiringTime")

      let nowTime = (new Date()).getTime();

      {/* 4. Realiza la petición asicrónica cuando: 
          (1) La estampa de tiempo de expiración (expiringTime) es nula, o  
          (2) La estampa de tiempo actual es mayor al tiempo de expiración 
      */}

      if (expiringTime === null || nowTime > parseInt(expiringTime)) {

        {/* 5. Request */ }

        let API_KEY = "36f32d81d506e434b4d202f2d33bf699"
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
        savedTextXML = await response.text();


        {/* 6. Diferencia de tiempo */ }

        let hours = 1
        let delay = hours * 3600000


        {/* 7. En el LocalStorage, almacena texto en la clave openWeatherMap y la estampa de tiempo de expiración */ }

        localStorage.setItem("openWeatherMap", savedTextXML)
        localStorage.setItem("expiringTime", (nowTime + delay).toString())
      }

      {/* XML Parser */ }

      const parser = new DOMParser();
      const xml = parser.parseFromString(savedTextXML, "application/xml");

      {/* Arreglo para agregar los resultados */ }

      let dataToIndicators = new Array()

      {/* 
        Análisis, extracción y almacenamiento del contenido del XML 
        en el arreglo de resultados
      */}

      let location = xml.getElementsByTagName("location")[1]

      let name = xml.getElementsByTagName("name")[0]
      dataToIndicators.push(["Ciudad", "Ciudad", name.innerHTML])

      let altitude = location.getAttribute("altitude")
      dataToIndicators.push(["Altitud", "Altitud", altitude])

      let latitude = location.getAttribute("latitude")
      dataToIndicators.push(["Latitud", "Latitud", latitude])

      let longitude = location.getAttribute("longitude")
      dataToIndicators.push(["Longitud", "Longitud", longitude])

      // console.log(dataToIndicators)


      {/* Renderice el arreglo de resultados en un arreglo de elementos Indicator */ }

      let indicatorsElements = Array.from(dataToIndicators).map(
        (element) => <Indicator title={element[0]} subtitle={element[1]} value={element[2]} />
      )

      {/* Modificación de la variable de estado mediante la función de actualización */ }

      setIndicators(indicatorsElements)

      {/* 
        2. Procese los resultados de acuerdo con el diseño anterior.
        Revise la estructura del documento XML para extraer los datos necesarios. 
      */}

      let arrayObjects = Array.from(xml.getElementsByTagName("time")).map((timeElement) => {

        let rangeHours = timeElement.getAttribute("from").split("T")[1] + " - " + timeElement.getAttribute("to").split("T")[1]

        let windDirection = timeElement.getElementsByTagName("windDirection")[0].getAttribute("deg") + " " + timeElement.getElementsByTagName("windDirection")[0].getAttribute("code")

        let precipitation = timeElement.getElementsByTagName("precipitation")[0].getAttribute("probability")

        let humidity = timeElement.getElementsByTagName("humidity")[0].getAttribute("value") + " " + timeElement.getElementsByTagName("humidity")[0].getAttribute("unit")

        let clouds = timeElement.getElementsByTagName("clouds")[0].getAttribute("value") + ": " + timeElement.getElementsByTagName("clouds")[0].getAttribute("all") + " " + timeElement.getElementsByTagName("clouds")[0].getAttribute("unit")

        return {
          "rangeHours": rangeHours,
          "windDirection": windDirection,
          "precipitation": precipitation,
          "humidity": humidity,
          "clouds": clouds
        }

      })


      // arrayObjects = arrayObjects.slice(0, 20)
      setDataGraphic(arrayObjects)

      arrayObjects = arrayObjects.slice(0, 8)
      {/* 3. Actualice de la variable de estado mediante la función de actualización */ }
      setRowsTable(arrayObjects)

    })()

  }, [])

  return (
    <>
      <Grid container rowGap={2} sx={{ width: '100%' }}>

        <Grid sm={12} md={12} lg={12} sx={{ padding: 0, margin: 0, width: '100%' }}>
          <Navbar />
        </Grid>

        <Grid container sm={12} md={12} lg={12} id="summary" sx={{ width: '100%', marginY: 3, padding: 2, alignItems: 'center' }}>

          <Grid sm={8} md={8} lg={8} sx={{ textAlign: 'left', marginY: 3, padding: 2 }}>
            <h3>Clima Guayaquil</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos mollitia suscipit sed quas at. Fugit neque porro quae tempore omnis, temporibus unde tenetur amet ex odio error, architecto sint?</p>
          </Grid>

          <Grid sm={4} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Summary></Summary>
          </Grid>

        </Grid>

        <Grid container lg={12} id="indicators" sx={{ width: '100%', margin: 5, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>

          <Grid xs={12} sm={12} md={12} lg={12} id="title">
            <h2>Indicadores</h2>
          </Grid>

          <Grid xs={6} sm={4} md={3} lg={2} sx={{ flexGrow: 1 }}>
            {indicators[0]}
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={2} sx={{ flexGrow: 1 }}>
            {indicators[1]}
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={2} sx={{ flexGrow: 1 }}>
            {indicators[2]}
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={2} sx={{ flexGrow: 1 }}>
            {indicators[3]}
          </Grid>

        </Grid>

        <Grid container xs={12} md={12} lg={12} id="table">

          <Grid xs={12} md={12} lg={12} id="title">
            <h2>Tabla</h2>
          </Grid>

          <Grid xs={12} md={12} lg={12} sx={{ marginX: 5 }}>
            {/* 4. Envíe la variable de estado (dataTable) como prop (input) del componente (BasicTable) */}
            <BasicTable rows={rowsTable}></BasicTable>
          </Grid>

        </Grid>

        <Grid container xs={12} md={12} lg={12} id="graphic" sx={{ margin: 5 }}>
          <Grid xs={12} sm={12} md={12} lg={12} id="title">
            <h2>Grafico</h2>
          </Grid>

          <Grid xs={12} sm={12} md={3} lg={2} sx={{ paddingRight: 2 }}>
            <ControlPanel setValue={setTunnel} />
          </Grid>

          <Grid xs={12} sm={12} md={9} lg={10}>
            <WeatherChart value={tunnel} dataGraphic={dataGraphic}></WeatherChart>
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}

export default App
