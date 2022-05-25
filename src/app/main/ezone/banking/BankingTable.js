import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const columns = [
  { id: 'AccountName', label: 'Account Name', minWidth: 170 },
  { id: 'AccountCode', label: 'Account Code', minWidth: 100 },
  {
    id: 'AccountNo',
    label: 'Account Number',
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'BankName',
    label: 'Bank Name',
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'BankBalance',
    label: 'Bank Balance',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'Action',
    label: 'Action',
    minWidth: 170,
    // format: (value) => value.toFixed(2),
  },
];

function createData(AccountName, AccountCode, AccountNo, BankName, BankBalance, Status, Action) {
  // const density = population / size;
  return {
    AccountName,
    AccountCode,
    AccountNo,
    BankName,
    BankBalance,
    Status,
    Action,
  };
}

const rows = [
  createData(
    'India',
    'IN',
    1324171354,
    3287263,
    20000,
    'Active',
    <Link to="/banking/preview/12">
      <Button variant="contained">option</Button>
    </Link>
  ),
  createData('China', 'CN', 1403500365, 9596961, 20000, 'Active'),
  createData('Italy', 'IT', 60483973, 301340, 20000, 'Active'),
  createData('United States', 'US', 327167434, 9833520, 20000, 'Active'),
  createData('Canada', 'CA', 37602103, 9984670, 20000, 'Active'),
  createData('Australia', 'AU', 25475400, 7692024, 20000, 'Active'),
  createData('Germany', 'DE', 83019200, 357578, 20000, 'Active'),
  createData('Ireland', 'IE', 4857000, 70273, 20000, 'Active'),
  createData('Mexico', 'MX', 126577691, 1972550, 20000, 'Active'),
  createData('Japan', 'JP', 126317000, 377973, 20000, 'Active'),
  createData('France', 'FR', 67022000, 640679, 20000, 'Active'),
  createData('United Kingdom', 'GB', 67545757, 242495, 20000, 'Active'),
  createData('Russia', 'RU', 146793744, 17098246, 20000, 'Active'),
  createData('Nigeria', 'NG', 200962417, 923768, 20000, 'Active'),
  createData('Brazil', 'BR', 210147125, 8515767, 20000, 'Active'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column, indexCol) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={indexCol} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
