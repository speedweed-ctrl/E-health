import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, dosage, code, vitality, date) {
  return { name, dosage, code, vitality, date };
}
const color1='red'
const color2='yellow'
const color3='green'
const rows = [
  createData('doliprane', 500, '67854h', 'vital', '24/07/2021'),
  createData('doliprane', 500, '67854h', 'vital', '24/07/2021'),
  createData('doliprane', 500, '67854h', 'vital', '24/07/2021'),
  createData('doliprane', 500, '67854h', 'vital', '24/07/2021'),
  createData('doliprane', 500, '67854h', 'vital', '24/07/2021'),
  createData('doliprane', 500, '67854h', 'vital', '24/07/2021'),
  
];

export default function DrugTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell>nom du medicament</TableCell>
            <TableCell align="right">dosage &nbsp;(mg)</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">neccesite</TableCell>
            <TableCell align="right">data de rupture</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dosage}</TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right" sx={{color:`${color1}`}}>{row.vitality}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
