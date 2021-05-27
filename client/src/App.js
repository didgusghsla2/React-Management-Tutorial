import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id' : 17,
    'image' : 'https://placeimg.com/64/64/1',
    // 'image' : 'https://dthumb-phinf.pstatic.net/?src=https://sports-phinf.pstatic.net/team/wfootball/default/11.png&type=f25_25&refresh=1',
    'name': 'Kevin De Bruyne',
    'birthday' : '91.06.28',
    'gender' : 'MF',
    'job' : 'Manchester City'
  },
  {
    'id' : 7,
    'image' : 'https://placeimg.com/64/64/2',
    // 'image' : 'https://dthumb-phinf.pstatic.net/?src=https://sports-phinf.pstatic.net/team/wfootball/default/19.png&type=f25_25&refresh=1',
    'name': 'Son Heung Min',
    'birthday' : '92.07.08',
    'gender' : 'FW',
    'job' : 'Tottenham Hotspur'
  },
  {
    'id' : 10,
    'image' : 'https://placeimg.com/64/64/3',
    // 'image' : 'https://dthumb-phinf.pstatic.net/?src=https://sports-phinf.pstatic.net/team/wfootball/default/26300.png&type=f25_25&refresh=1',
    'name': 'Lionel Messi',
    'birthday' : '87.06.24',
    'gender' : 'FW',
    'job' : 'FC Barcelona'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Team</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);