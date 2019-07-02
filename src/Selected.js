import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react'

class Selected extends Component {
   
    
    render() {
        return (
            <Grid color='grey' >

                <Grid.Column width='6'>
                    <p>Adults <br /> (18+)</p>

                    <select name='adult' onChange={this.props.handleChange}  >
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </Grid.Column>

                <Grid.Column width="10">
                    <p>Children <br /> (0-17)</p>

                    <select name='children' onChange={this.props.handleChange} >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </Grid.Column>

            </Grid>
        );
    }
}

export default Selected;