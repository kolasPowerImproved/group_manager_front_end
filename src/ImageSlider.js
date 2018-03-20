import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
    <Carousel autoPlay>
        <div>
            <img src={'http://127.0.0.1:8000' + this.state.data.group_image} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={'http://127.0.0.1:8000' + this.state.data.group_image} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={'http://127.0.0.1:8000' + this.state.data.group_image} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
);