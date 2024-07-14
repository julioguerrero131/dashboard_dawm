import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

interface Config {
  rows: Array<object>;
}

export default function BasicTable(data: Config) {

  let [rows, setRows] = useState([])

  useEffect(() => {

    (() => {

      setRows(data.rows)

    })()

  }, [data])

  {/* JSX */ }

  return (
    <TableContainer component={Paper} elevation={5} sx={{ borderRadius: '5px' }}>
      <Table sx={{ minWidth: 540 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rango de horas</TableCell>
            <TableCell align="right">Precipitación</TableCell>
            <TableCell align="right">Humedad</TableCell>
            <TableCell align="right">Nubosidad</TableCell>
            <TableCell align="right">Dirección del viento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.rangeHours}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rangeHours}
              </TableCell>
              <TableCell scope="row" align="right">
                {row.precipitation}
              </TableCell>
              <TableCell scope="row" align="right">
                {row.humidity}
              </TableCell>
              <TableCell scope="row" align="right">
                {row.clouds}
              </TableCell>
              <TableCell align="right">
                {row.windDirection}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}