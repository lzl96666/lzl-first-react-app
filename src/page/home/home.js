import React, { Component } from 'react'
import './home.css'
import { getHomeContent } from '../../api/home'
// 引入基础组件
import Header from '../../base/header/header'
import { Button, Card } from 'antd'
const { Meta } = Card
let header = null
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: []
    }
  }
  onRef = ref => {
    // this.child = ref
    console.log(ref)
    header = ref
  }
  childFuntion() {
    header.fnheader()
  }
  componentDidMount() {
    console.log(this)
    getHomeContent().then(res => {
      this.setState({
        arr: res.data
      })
    })
  }
  render() {
    return (
      <div className="home">
        <Header
          router={this.props.location.pathname}
          onRef={this.onRef}
        ></Header>
        <div className="home-content">
          {' '}
          {this.state.arr.map(function(item, index) {
            return (
              <Card
                key={index}
                hoverable
                className={'cardStyle'}
                cover={<img alt="example" src={item.image2} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            )
          })}
        </div>
        <div>
          <Button type="primary" onClick={this.childFuntion}>
            运行子组件的方法
          </Button>
        </div>
      </div>
    )
  }
}
export default Home
