import React, {Component} from 'react';
import './css/Main.css';

export default class GroupList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/base/group_list_api')
            .then((Response) => Response.json())
            .then((findresponse) => {
                console.log(findresponse);
                this.setState({
                    data: findresponse,
                })

            })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="navbar-header">
                </div>
                <ul className="nav">
                    <div className="jumbotron wide">
                        <h1>Bootstrap Tutorial</h1>
                        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive,
                            mobile-first projects on the web.</p>
                    </div>
                </ul>
                <div className="row body">
                    {this.state.data.map((dynamicData, key) =>
                        <div className="col-6">
                            <div className="card">
                                <img className="card-img-top "
                                     src={'http://127.0.0.1:8000' + dynamicData.group_image}
                                     alt="Card image cap">
                                </img>
                                <div className="card-header">
                                    <h5 className="card-title">{dynamicData.group_name}</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{dynamicData.group_description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{dynamicData.trainer.first_name} {dynamicData.trainer.second_name} {dynamicData.trainer.last_name}</li>
                                    <li className="list-group-item">{dynamicData.trainer.trainer_phone_number}</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                                <div className="card-body">
                                    <a href={'/group_detail/' + dynamicData.group_name} className="Main-link-button">Докладніше</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

