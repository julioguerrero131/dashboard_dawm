import Grid from '@mui/material/Unstable_Grid2'
import './App.css'
import Indicator from './components/Indicator'
import Summary from './components/Summary'
import BasicTable from './components/BasicTable'

function App() {

  return (
    <Grid container spacing={5}>
	    <Grid xs={6} sm={4} md={3} lg={2}>
			<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13}  />
			<Summary></Summary>
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
	</Grid>
  )
}

export default App
