import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import Text from 'antd/lib/typography/Text'
export default class cartSapmle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goods: [
        {
          id: 1,
          name: '商品1',
          price: 100
        },
        {
          id: 2,
          name: '商品2',
          price: 200
        }
      ],
      goodName: '',
      cartList: [
        {
          id: 1,
          name: '商品1',
          price: 100,
          count: 1
        }
      ]
    }
  }
  changeGoodName(e) {
    this.setState({
      goodName: e.target.value
    })
  }
  addGood() {
    if (this.state.goodName == '') {
      alert('请填写商品')
      return
    }
    let isExist = false
    this.state.goods.forEach(item => {
      if (item.name === this.state.goodName) {
        isExist = true
      }
    })
    if (isExist === false) {
      this.setState(
        {
          goods: [
            ...this.state.goods,
            {
              id: this.state.goods.length + 1,
              name: this.state.goodName,
              price: 300
            }
          ]
        },
        // 添加成功后 还原输入框
        () => {
          this.setState({
            goodName: ''
          })
        }
      )
    } else {
      alert(this.state.goodName + '已存在')
    }
  }
  addToCart(item) {
    let newCartList = this.state.cartList
    // 循环cattList 如果id存在则count+1 否则加在数组后面
    let cartIndex = this.state.cartList.findIndex(item2 => {
      return item2.id === item.id
    })
    //如果 cartIndex >-1 代表数组内存在
    if (cartIndex > -1) {
      newCartList.forEach(item3 => {
        if (item3.id === item.id) {
          item3.count++
        }
      })
    } else {
      newCartList.push({
        id: item.id,
        name: item.name,
        price: item.price,
        count: '1'
      })
    }
    this.setState({
      cartList: newCartList
    })
  }
  misnus(id) {
    let newCartList = this.state.cartList
    newCartList.forEach(item => {
      if (item.id === id && item.count > 1) {
        item.count--
      }
    })

    this.setState({
      cartList: newCartList
    })
  }
  plus(id) {
    let newCartList = this.state.cartList
    newCartList.forEach(item => {
      if (item.id === id) {
        item.count++
      }
    })
    this.setState({
      cartList: newCartList
    })
  }
  render() {
    return (
      <div>
        {/* 获得路由参数 */}
        <div>
          {this.props.match.params.id && (
            <h2>第{this.props.match.params.id}个购物车</h2>
          )}
        </div>
        {/* 购物车内容 */}
        <div>
          {/* 输入框 */}
          <input
            value={this.state.goodName}
            onChange={e => {
              this.changeGoodName(e)
            }}
          ></input>
          <Button
            type="primary"
            onClick={e => {
              this.addGood(e)
            }}
          >
            添加至列表
          </Button>
          {/* 列表循环 */}
          <ul style={{ margin: 20 + 'px' }}>
            {this.state.goods.map(good => (
              <li key={good.id}>
                <span>{good.name}</span>
                <span style={{ margin: 30 + 'px' }}>价格：{good.price}</span>
                <Button onClick={e => this.addToCart(good)}>
                  添加至购物车
                </Button>
              </li>
            ))}
          </ul>
          {/* 购物车 */}
          <div>购物车</div>
          <ul>
            {this.state.cartList.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span style={{ margin: 30 + 'px' }}>
                  <Button
                    onClick={() => {
                      this.misnus(item.id)
                    }}
                  >
                    <Icon type="minus" />
                  </Button>
                  <span
                    style={{
                      margin: 20 + 'px',
                      display: 'inline-block',
                      width: 20 + 'px',
                      textAlign: 'center'
                    }}
                  >
                    {item.count}
                  </span>
                  <Button
                    onClick={() => {
                      this.plus(item.id)
                    }}
                  >
                    <Icon type="plus" />
                  </Button>
                </span>
                <span>{item.price * item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
