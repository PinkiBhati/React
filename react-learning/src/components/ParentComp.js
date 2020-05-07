import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'pinki'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'pinki' })
        }, 2000)
    }


    render() {
        console.log('...Parent  comp render...')

        return (
            <div>
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp

