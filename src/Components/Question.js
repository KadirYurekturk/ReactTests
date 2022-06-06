import React, { PureComponent } from 'react';

class questions extends Component {
    constructor(props) {
        super(props);
    }
    state = { test: 'test' }
    render() { 
        return ( this.state.test );
    }
}
 
export default questions;