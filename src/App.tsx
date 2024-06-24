import Grid from '@mui/material/Unstable_Grid2'
import './App.css'
import Indicator from './components/Indicator'
import Summary from './components/Summary'
import BasicTable from './components/BasicTable'
import WeatherChart from './components/WeatherChart'
import ControlPanel from './components/ControlPanel'

function App() {

  return (
    <Grid container spacing={5}>
	    <Grid xs={6} sm={4} md={3} lg={2}>
			<Grid lg={12}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13}  />
			</Grid>
			<Grid lg={12}>
				<Summary></Summary>
			</Grid>
		</Grid>
		<Grid xs={6} sm={4} md={3} lg={2}>
			<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
		</Grid>
		<Grid xs={6} sm={4} md={3} lg={2}>
			<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
		</Grid>
		<Grid xs={6} sm={4} md={3} lg={2}>
			<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
		</Grid>
		<Grid xs={6} sm={4} md={3} lg={2}>
			<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
		</Grid>
		<Grid xs={6} sm={4} md={3} lg={2}>
			<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
		</Grid>
		
		<Grid xs={6} sm={4} md={3} lg={6}>
	        
	    </Grid> 
		<Grid xs={12} md={6} lg={12} >
	       <BasicTable />
	    </Grid>  

		<Grid xs={12} lg={2}>
             <ControlPanel />
         </Grid>

		<Grid xs={12} lg={10}>
            <WeatherChart></WeatherChart>
         </Grid> 
	</Grid>
  )
}

export default App
