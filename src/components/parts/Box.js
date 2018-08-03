import React, { Component } from 'react'


export default class Box extends Component {
    constructor(props) {
        super(props)
        this.handleRef = React.createRef()
    }
    
    render() {        
        return (
            
                
                    <div className={'box'}>
                        <div className={'boxHead'}>
                            <h3>Init</h3>
                        </div>
                        <div className={'boxBody'}>
                            <div className={'boxIn'}>
                                In
                            </div>
                            <div className={'BoxOut'}>
                                Out
                            </div>
                        </div>
                        <div className={'boxFooter'}>
                            <input onChange={() => {}} value={'10'} />
                        </div>
                    </div>
        )
    }
}