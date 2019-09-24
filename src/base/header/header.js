import React, { Component } from 'react'
import { PageHeader } from 'antd'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this)
    }
  }
  goBack() {
    this.props.history.goBack()
  }
  fnheader() {
    alert('this header')
  }
  render() {
    return (
      <div className="header">
        <PageHeader
          onBack={() => {
            this.goBack()
          }}
          title={this.props.router}
          subTitle="返回上一页"
        />
      </div>
    )
  }
}
export default withRouter(Header)
