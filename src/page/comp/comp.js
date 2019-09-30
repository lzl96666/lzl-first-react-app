import React, { Component } from 'react'
export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = { comments: [] }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        comments: [
          { body: 'react is very good', author: 'facebook' },
          { body: 'vue is very good', author: 'youyuxi' }
        ]
      })
    }, 2000)
  }
  render() {
    return (
      <div>
        {' '}
        {this.state.comments.map((c, i) => (
          <Comment key={i} {...c} />
        ))}{' '}
      </div>
    )
  }
}

//展示组件
// class Comment extends Component {
//   render() {
//     console.log('render comments')
//     return (
//       <div>
//         {' '}
//         <p>{this.props.data.body}</p> <p> --- {this.props.data.author}</p>{' '}
//       </div>
//     )
//   }
// }

// 高阶组件
const Comment = React.memo(function(props) {
  console.log('render comments')
  return (
    <div>
      <p>{props.body}</p>
      <p> --- {props.author}</p>
    </div>
  )
})
