import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Page1 from './page1';

const useStyles = makeStyles({
  root: {
    padding: 24,
  },
});

const AccSetup = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Page1 />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccSetup;
