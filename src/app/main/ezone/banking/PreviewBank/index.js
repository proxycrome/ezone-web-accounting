import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '@material-ui/core/Icon';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50; // + rand();
  const left = 50; // + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    minWidth: 275,
  },
  bullet: {
    display: 'inline',
  },
  bullet2: {
    display: 'inline',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  margin: {
    marginLeft: '10px',
  },
  BalCard: {
    backgroundColor: '#1A88E1',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

function PreviewBank() {
  const [newTransaction, setNewTransaction] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const backward = () => {
    history.goBack();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <Typography variant="subtitle1" className="ml-6 my-6" style={{ textAlign: 'left' }}>
          Money In
        </Typography>
        <Link to="/banking/transfer/from">
          <Typography variant="h6" className="mb-16" style={{ textAlign: 'center' }}>
            Transfer from another account
          </Typography>
        </Link>
      </div>
      <hr />
      <div>
        <Typography variant="subtitle1" className="ml-6 my-6" style={{ textAlign: 'left' }}>
          Money Out
        </Typography>
        <Link to="/banking/transfer/to">
          <Typography variant="h6" className="mb-16" style={{ textAlign: 'center' }}>
            Transfer to another account
          </Typography>
        </Link>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
      >
        <Typography
          className="flex items-center sm:mb-12"
          component={Link}
          role="button"
          // to="/banking"
          onClick={backward}
          color="inherit"
        >
          <Icon className="text-20">
            {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
          </Icon>
          <span className="hidden sm:flex mx-4 font-medium">Back</span>
        </Typography>
      </motion.div>
      <Card className={classes.root}>
        <CardContent>
          <table className="mb-16">
            <tbody>
              <tr>
                <td className="pb-4">
                  <Typography variant="h6" color="textSecondary">
                    Account Name
                  </Typography>
                </td>
                <td className="pb-4">
                  <Typography variant="subtitle1">Sales Accounts</Typography>
                </td>
              </tr>

              <tr>
                <td className="pb-5">
                  <Typography color="textSecondary" variant="h6">
                    Account Code
                  </Typography>
                </td>
                <td className="pb-5">
                  <Typography variant="subtitle1">0097</Typography>
                </td>
              </tr>

              <tr>
                <td className="pb-5">
                  <Typography color="textSecondary" variant="h6">
                    Account Type
                  </Typography>
                </td>
                <td className="pb-5">
                  <Typography variant="subtitle1">Fixed Assets</Typography>
                </td>
              </tr>

              <tr>
                <td className="pb-5">
                  <Typography color="textSecondary" variant="h6">
                    Bank Name
                  </Typography>
                </td>
                <td className="pb-5">
                  <Typography variant="subtitle1">Zenith Bank</Typography>
                </td>
              </tr>

              <tr>
                <td className="pb-5" colSpan={2}>
                  <Typography color="textSecondary" className={classes.bullet}>
                    Description
                  </Typography>
                  <Typography className={[classes.bullet, classes.margin]}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quo
                    distinctio nulla animi tenetur quae totam corrupti minima unde culpa.
                  </Typography>
                </td>
              </tr>

              <tr>
                <td className="pb-5">
                  <Typography color="textSecondary" variant="h6">
                    Transaction Period
                  </Typography>
                </td>
                <td className="pb-5">
                  <Typography variant="subtitle1">3rd Jul 2020 to 7th Jun 2021</Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
      <Card className={classes.BalCard}>
        <CardContent>
          <div className={classes.flex}>
            <Typography variant="h6" className={classes.bullet2}>
              Closing Balance
            </Typography>
            <Typography variant="h6" className={classes.bullet2}>
              NGN 0.00
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div style={{ display: 'flex' }} className="my-12">
        <Typography
          variant="h6"
          className={classes.bullet}
          style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}
        >
          Transactions
        </Typography>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
          {!newTransaction ? (
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add transactions
            </Button>
          ) : null}
          <Button size="small" color="primary" className="ml-6">
            export
          </Button>
        </div>
      </div>
      <Card>
        <CardContent>
          <div>
            {!newTransaction ? (
              <>
                <Table className="simple">
                  <TableHead>
                    <TableRow>
                      <TableCell>Trs Date</TableCell>
                      <TableCell>Reference no</TableCell>
                      <TableCell align="right">Credit</TableCell>
                      <TableCell align="right">Debit</TableCell>
                      <TableCell align="right">Balance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle1">3rd Jul 2020</Typography>
                      </TableCell>
                      <TableCell>09089</TableCell>
                      <TableCell align="right">$2000</TableCell>
                      <TableCell align="right">$10000</TableCell>
                      <TableCell align="right">$100000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle1">Total</Typography>
                      </TableCell>
                      <TableCell />
                      <TableCell align="right">$30000</TableCell>
                      <TableCell align="right">$30000</TableCell>
                      <TableCell align="right">$200000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </>
            ) : (
              <div className={classes.center}>
                <Typography variant="h6" className="mb-16">
                  You haven't recorded any transactions for this account
                </Typography>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                  Add transactions
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default PreviewBank;
