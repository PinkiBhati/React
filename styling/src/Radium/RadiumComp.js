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
                
               <p style={mobile}>Mobile devices</p>
               <p style={desktop}>Desktop devices</p>
            </div >
        )
    }
}

export default Radium(RadiumComp);
