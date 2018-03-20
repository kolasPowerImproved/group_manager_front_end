import React, {Component} from 'react';
import './css/Main.css';
import {Doughnut} from 'react-chartjs-2';
import './css/GroupDetailStyle.css';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactAudioPlayer from 'react-audio-player';


export default class GroupDetail extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            trainer: [],
        };

    }

    componentDidMount() {
        const {match: {params}} = this.props;
        const api_url = 'http://127.0.0.1:8000/base/group_detail_api/' + params.group_name;

        fetch(api_url)
            .then((Response) => Response.json())
            .then((findresponse) => {
                console.log(findresponse);
                this.setState({
                    data: findresponse,
                });
                this.setState({
                    trainer: findresponse.trainer,
                });
                console.log(this.state.trainer);
            })
    }

    colors = () => {
        return {
            colors: ['red', 'blue']
        }
    };

    chartData = () => {
        return {
            labels: ['Хлопці', 'Дівчата'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [this.state.data.boys, this.state.data.girls],
                    backgroundColor: ['rgba(0,0,255,0.3)', "rgba(255,0,0,0.3)"],
                },
            ]
        };
    };

    options = () => {
        return {
            scaleShowGridLines: true,
            scaleGridLineColor: 'rgba(66,134,244,.05)',
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            bezierCurve: true,
            bezierCurveTension: 0.4,
            pointDot: true,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
        };
    };

    styles = {
        graphContainer: {
            border: '1px solid black',
            padding: '15px'
        }
    };

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
                <ul className="list-group list-group-flush">
                    <div className="row">
                        <div className="col">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <img className="img-fluid"
                                         src={'http://127.0.0.1:8000' + this.state.data.group_image}
                                         width="1200px"
                                         height="1000px">
                                    </img>
                                </li>
                                <li className="list-group-item">Prise: <b>gdfg</b></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h1>{this.state.data.group_name}</h1></li>
                                <li className="list-group-item align-items-center">{this.state.data.group_description}
                                </li>

                                <li className="list-group-item">
                                    <table className="table table-hover table-sm">
                                        <thead>
                                        <tr>
                                            <th scope="col">Понеділок</th>
                                            <th scope="col">Вівторок</th>
                                            <th scope="col">Середа</th>
                                            <th scope="col">Четвер</th>
                                            <th scope="col">П'ятниця</th>
                                            <th scope="col">Субота</th>
                                            <th scope="col">Неділя</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">{this.state.data.monday_time}</th>
                                            <th scope="row">{this.state.data.tuesday_time}</th>
                                            <th scope="row">{this.state.data.wednesday_time}</th>
                                            <th scope="row">{this.state.data.thursday_time}</th>
                                            <th scope="row">{this.state.data.friday_time}</th>
                                            <th scope="row">{this.state.data.saturday_time}</th>
                                            <th scope="row">{this.state.data.sunday_time}</th>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li className="list-group-item"><Doughnut
                                    style="position: relative; height:40vh; width:80vw" data={this.chartData()}
                                    options={this.options()}
                                    width="300" height="125"/></li>
                            </ul>
                        </div>
                    </div>
                </ul>

                <br></br>
                <br></br>
                <br></br>

                <div className="row">
                    <div className="col-6">
                        <Carousel autoPlay showArrows showThumbs emulateTouch useKeyboardArrows stopOnHover
                                  interval="2500" transitionTime="750" infiniteLoop>
                            <div>
                                <img src={'http://127.0.0.1:8000' + this.state.data.images_for_slider}/>
                            </div>
                            <div>
                                <img src={'http://127.0.0.1:8000' + this.state.data.group_image}/>
                            </div>
                            <div>
                                <img src={'http://127.0.0.1:8000' + this.state.data.group_image}/>
                            </div>
                        </Carousel>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">
                            <div className="col">
                                <ReactAudioPlayer
                                    src={'http://127.0.0.1:8000' + this.state.data.group_music}
                                    controls
                                    volume="0"
                                />
                            </div>
                                <div className="col">dfgfdgfdg</div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col">
                                    <ReactAudioPlayer
                                        src={'http://127.0.0.1:8000' + this.state.data.group_music}
                                        controls
                                        volume="0"
                                    />
                                </div>
                                <div className="col">dfgfdgfdg</div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col">
                                    <ReactAudioPlayer
                                        src={'http://127.0.0.1:8000' + this.state.data.group_music}
                                        controls
                                        volume="0"
                                    />
                                </div>
                                <div className="col">dfgfdgfdg</div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="row justify-content-md-center">

                    </div>
                    <p>sdgsdf</p>
                    <div className="row justify-content-md-center">

                    </div>
                </div>

            </div>
        );
    }
}