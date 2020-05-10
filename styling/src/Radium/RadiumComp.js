import React, { Component } from 'react'
import Radium from 'radium';

class RadiumComp extends Component {
    render() {


        const desktop = {
            color: 'red',
            '@media screen and (max-width: 500px)': {
                display:'none'

            },
            ':hover':{
                color:'blue'
            }
        };

        const mobile = {
            color: 'green',
            '@media screen and (min-width: 501px)': {
                display:'none'

            }

        }

    

    return(
            <div>
               <div style={mobile}>Mobile devices</div>
               <div style={desktop}>Desktop devices</div>
            </div >
        )
    }
}

export default Radium(RadiumComp);
