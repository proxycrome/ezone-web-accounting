import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';

const columns = [
  { id: 'AccountCode', label: 'Account Code', minWidth: 100 },
  { id: 'AccountName', label: 'Account Name', minWidth: 170 },
  { id: 'AccountType', label: 'Account Type', minWidth: 170 },
];

function createData(AccountCode, AccountName, AccountType) {
  // const density = population / size;
  return {
    AccountCode,
    AccountName,
    AccountType,
  };
}

const rows = [
  createData(1001, 'Land - Cost', 'Non Current Assets'),
  createData(1004, 'Acc dept Accounting Software', 'Inventories'),
  createData(13000, 'Trade Receivables', 'Trade Receivables'),
  createData(13010, 'Other Receivables', 'Other Current Asset'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  right: {
    float: 'right',
    marginTop: '56px',
  },
});

const Page3 = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div>
        <Typography variant="h3" className="mb-16" style={{ textAlign: 'center' }}>
          Welcome to <b style={{ color: 'blue' }}>EZONE</b> Accounting
        </Typography>
        <Typography variant="h4" className="mb-56" style={{ textAlign: 'center' }}>
          Setup your Accounting structure
        </Typography>
      </div>
      <hr />
      <Paper className={classes.root} style={{ paddingTop: '20px' }}>
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
      <div>
        <Typography variant="body1" className="my-20" style={{ float: 'left' }}>
          <b>Note:</b> You can edit account after setup
        </Typography>
      </div>
      <div className={classes.right}>
        <Button variant="contained" onClick={props.goBack}>
          <Icon className="text-20">arrow_back</Icon> Back
        </Button>
        <Button type="submit" variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
          Finish <Icon className="text-20">arrow_forward</Icon>
        </Button>
      </div>
    </div>
  );
};

export default Page3;
