import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  table: {
    minWidth: 650
  },
  tableRow: {
    '&:hover': {
      background: '#CCC'
    },
    '&:hover td': {
      color: '#FFF'
    }
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: theme.spacing(2)
    }
  }
}));
