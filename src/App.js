import React, { Component } from 'react';
import './App.css';

import { Carousel, Avatar,Timeline } from 'antd';

function onChange(a, b, c){
    console.log(a, b, c);
};


class App extends Component {


    render() {
        return (
            <div>
                <Avatar shape="square" size="large" icon="user" />

                <Carousel autoplay afterChange={onChange}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                </Carousel>

                <div>
                    <Timeline>
                        <Timeline.Item>Finally</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                        </Timeline>
                </div>
            </div>
        );
    }
}

export default App;