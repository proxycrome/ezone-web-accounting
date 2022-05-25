import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Page2 from './page2';

const useStyles = makeStyles({
  flex: {
    display: 'flex',
  },
  divide1: {
    flex: '1',
  },
  divide2: {
    flex: '1',
    padding: '20px',
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    float: 'right',
    width: '15ch',
  },
});

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31,
];

const months = [
  {
    id: 1,
    value: 'January',
    label: 'January',
  },
  {
    id: 2,
    value: 'February',
    label: 'February',
  },
  {
    id: 3,
    value: 'March',
    label: 'March',
  },
  {
    id: 4,
    value: 'April',
    label: 'April',
  },
  {
    id: 5,
    value: 'May',
    label: 'May',
  },
  {
    id: 6,
    value: 'June',
    label: 'June',
  },
  {
    id: 7,
    value: 'July',
    label: 'July',
  },
  {
    id: 8,
    value: 'August',
    label: 'August',
  },
  {
    id: 9,
    value: 'September',
    label: 'September',
  },
  {
    id: 10,
    value: 'October',
    label: 'October',
  },
  {
    id: 11,
    value: 'November',
    label: 'November',
  },
  {
    id: 12,
    value: 'December',
    label: 'December',
  },
];

const AccSetupForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [month, setMonth] = useState('January');
  const [day, setDay] = useState(1);
  const [value, setValue] = useState('Accrual');
  const [state, setState] = useState({
    multiCurrency: true,
  });

  const handleCheckChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const classes = useStyles();

  if (isClicked) {
    return <Page2 goBackward={() => setIsClicked(!isClicked)} />;
  }

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
      <div className={classes.flex}>
        <div className={classes.divide1}>
          <img
            src="assets/images/demo-content/setupImage.png"
            alt="setup"
            style={{
              maxWidth: '640px',
              width: '100%',
            }}
            className="rounded-6"
          />
        </div>
        <div className={[classes.divide2]}>
          <form>
            <Typography variant="h6" className="mb-6">
              Financial year starts:
            </Typography>
            <Typography variant="body1" className="mb-20">
              Financial year is any annual period at the end of which firm's account books are
              closed, profit or loss is computed and financial reports are prepared for filling.
            </Typography>

            <Typography variant="h6" className="mb-6">
              Start date
            </Typography>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Select Month"
              value={month}
              className="mb-12"
              style={{ width: '25ch' }}
              onChange={handleMonthChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {/* <option value="">Select Month</option> */}
              {months.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <br />
            <TextField
              id="outlined-select-currency-native"
              select
              label="Select Day"
              value={day}
              style={{ width: '25ch' }}
              className="mb-20"
              onChange={handleDayChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {/* <option value="">Select Month</option> */}
              {days.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>

            <Typography variant="h6" className="mb-6">
              Accounting method:
            </Typography>
            <RadioGroup
              aria-label="accounting"
              name="accountingMethod"
              value={value}
              onChange={handleChange}
              className="mb-20"
            >
              <div className={classes.inline}>
                <FormControlLabel
                  value="Accrual"
                  control={<Radio />}
                  label="Accrual"
                  style={{ width: '15ch' }}
                />
                <small>
                  Accrual accounting reports revenue and expenses as they are earned and incurred
                </small>
              </div>
              <div className={classes.inline}>
                <FormControlLabel
                  value="Cash"
                  control={<Radio />}
                  label="Cash"
                  style={{ width: '15ch' }}
                />
                <small>
                  Cash accounting reports revenue and expenses as they are received and paid
                </small>
              </div>
            </RadioGroup>

            <Typography variant="h6" className="mb-6">
              Business Activity:
            </Typography>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Business Activity"
              className="mb-20"
              style={{ width: '25ch' }}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <option>Service Company</option>
              <option>Logistics Company</option>
            </TextField>

            <Typography variant="h6" className="mb-6">
              Currency:
            </Typography>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Currency"
              className="mb-12"
              style={{ width: '35ch' }}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <option>NGN - Nigerian Naira</option>
              <option>USD - United States Dollar</option>
            </TextField>

            <FormGroup row className="mb-12">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!state.multiCurrency}
                    onChange={handleCheckChange}
                    name="multiCurrency"
                  />
                }
                label="Enable Multicurrency"
              />
            </FormGroup>

            <Typography variant="body1" className="mb-12">
              Note: ****Provide correct notes here ****
            </Typography>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.right}
              onClick={() => setIsClicked(true)}
            >
              Next
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccSetupForm;
