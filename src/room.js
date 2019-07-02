import React, { Component } from 'react';
import {connect } from 'react-redux'
import {selected} from './actions/selected'
import Selected from './Selected'
import NotSelected from './NotSelected'
import { Grid, Divider, Segment } from 'semantic-ui-react'

 
class room extends Component {
    constructor(props){
        super(props)
        this.state = {
            adult: props.room.adult,
            children: props.room.children,
        } 
    }
    

    handleChange = (event) => {
        let selected = event.target.name
        this.setState({ 
            [ selected ]: event.target.value 
        });
    }

    select = (num) => {
        if (!document.getElementById(num).checked) {
            num--
            this.setState({
                adult: 1,
                children: 0,
            })
        }
        const cheker = () => {
            for (let x of [2, 3, 4]) {
                document.getElementById(x).checked = (x <= num)
            }
        }
        cheker()
        this.props.selected(num)
    }
    
    render() {
  
      const { id } = this.props.room
        return (
            
            <Grid >
                <Grid.Row color='grey'>
                    <Grid.Column >
                        {id > 1 ? <input id={id} onChange={() => this.select(id)} type="checkbox" name="vehicle" /> : null}
                    </Grid.Column>
                    <Grid.Column  width='7'>
                        <h3>Room {id}</h3>
                    </Grid.Column>
                </Grid.Row>
                <Divider hidden />
                <Grid.Row centered >
                    
                     {id === 1 || this.props.isSelected >= id ?  <Selected as={Segment} children={this.state.children} adult={this.state.adult} handleChange={this.handleChange} /> : <NotSelected children={this.state.children} adult={this.state.adult} /> }
                </Grid.Row>
            </Grid>
        );
    }
}

function mapStateToProps(state){
   return {isSelected: state.isSelected}
}

export default connect(mapStateToProps, { selected })(room);