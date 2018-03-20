import React, { Component } from 'react';


export default class Background extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/base/group_list_api')
            .then(results => {
                return results.json();
            }).then(data => {
                let pictures = data.results.map((pic) => {
                    return(
                        <div key={pic.results}>
                            <img src={pic.picture.medium}/>
                        </div>
                    )
                })
            this.setState({pictures: pictures});
                console.log("state", this.state.pictures);
        })
    }

    render() {
        return (
            <div className="container2">
                <div className="container1">
                    {this.state.pictures}
                </div>
            </div>
        )
    }
}