import React, { Component } from 'react';
// antd
import {Button,Rate,InputNumber,Radio,Slider, Switch } from 'antd';
//css
import './antd.css';


class Antd extends Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
  <div>
    <div className="container">
       <div className="title">按钮</div>
       <Button type="primary">Button</Button>
    </div>
    <div className="container">
       <div className="title">Rate</div>
       <Rate/>
    </div>
    <div className="container">
       <div className="title">数字输入框</div>
       <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    </div>
    <div className="container">
       <div className="title">单选</div>
       <Radio>Radio</Radio>
    </div>

    <div className="container">
    <div className="title">滑块</div>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </div>
    
  </div>
    );
  }
}
function onChange(value) {
  console.log('changed', value);
}
export default Antd