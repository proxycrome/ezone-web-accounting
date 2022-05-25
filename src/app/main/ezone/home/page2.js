import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Page3 from './page3';

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
  flex: {
    display: 'flex',
  },
  divide1: {
    flex: '1',
  },
  divide2: {
    flex: '1',
    padding: '50px 20px',
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
  right: {
    float: 'right',
    width: '15ch',
    marginLeft: '10px',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '24px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Form2 = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState('Create your Chart of Accounts');
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="subtitle1" className="ml-6 my-6" style={{ textAlign: 'left' }}>
        Import Options
      </Typography>
      <RadioGroup
        aria-label="import"
        name="importOption"
        value={value}
        onChange={handleChange}
        className="mb-20"
      >
        <div>
          <FormControlLabel
            value="Import from Computer"
            control={<Radio />}
            label="Import from Computer"
            style={{ display: 'block' }}
          />
          <Typography variant="caption" style={{ marginLeft: '24px' }}>
            Maximum File Size 5 MB | File Format: CSV or TSV or XLS
          </Typography>
        </div>
        <div className={classes.inline} style={{ marginTop: '30px' }}>
          <FormControlLabel
            value="Import from IFRS website"
            control={<Radio />}
            label="Import from IFRS website"
          />
        </div>
      </RadioGroup>
      <div className={classes.center}>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
          Save
        </Button>
      </div>
    </div>
  );

  if (isClicked) {
    return <Page3 goBack={() => setIsClicked(!isClicked)} />;
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
            <RadioGroup
              aria-label="accounting"
              name="accountingMethod"
              value={value}
              onChange={handleChange}
              className="mb-20"
            >
              <div className={classes.inline}>
                <FormControlLabel
                  value="Create your Chart of Accounts"
                  control={<Radio />}
                  label="Create your Chart of Accounts"
                />
                {/* <small>
                  Accrual accounting reports revenue and expenses as they are earned and incurred
                </small> */}
              </div>
              <div className={classes.inline}>
                <FormControlLabel
                  value="import"
                  control={<Radio />}
                  label="Import Existing Chart of Accounts"
                  onClick={handleOpen}
                />
                {/* <small>
                  Accrual accounting reports revenue and expenses as they are earned and incurred
                </small> */}
              </div>
              <div className={classes.inline}>
                <FormControlLabel
                  value="system generated"
                  control={<Radio />}
                  label="Use system generated Chart of Account"
                />
                <small>(This is mostly for non-accountants)</small>
              </div>
            </RadioGroup>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.right}
              onClick={() => setIsClicked(true)}
            >
              Next <Icon className="text-20">arrow_forward</Icon>
            </Button>
            <Button variant="contained" className={classes.right} onClick={props.goBackward}>
              <Icon className="text-20">arrow_back</Icon> Back
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
