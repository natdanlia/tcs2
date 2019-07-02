import React, { Component} from 'react';
import {connect} from 'react-redux'

import { fetchData } from './actions/fetchData';
import Room  from './room'
import {Grid, Segment} from 'semantic-ui-react'

class App extends Component {



  componentDidMount(){
    console.log('alalal')
    this.props.fetchData()
  }
  
  render() {
    const sorted = this.props.data.sort((a, b) =>  a.id - b.id )
    return (
      <div>
        <Grid>
          {sorted.map((room, idx) => <Grid.Column width='3'><Segment ><Room key={room.id} room={room} /></Segment></Grid.Column>)}
        </Grid>
      </div>

      
    );
  }
}

const mapStateToProps = (state) => {
 return { data: state.data }
}

const mapDispathchToProps = (dispatch) => {
  console.log(fetchData())
  return {
   fetchData: () => {
    dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispathchToProps)(App)