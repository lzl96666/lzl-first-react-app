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
          <Comment key={i} {...c} /> //props 必须要展开
        ))}{' '}
      </div>
    )
  }
}

//PureComponent 必须要用class
class Comment extends React.PureComponent {
  render() {
    console.log('render comments')
    return (
      <div>
        {' '}
        <p>{this.props.body}</p> <p> --- {this.props.author}</p>{' '}
      </div>
    )
  }
}

// memo 用法
// const Comment = React.memo(function(props) {
//   console.log('render comments')
//   return (
//     <div>
//       <p>{props.body}</p>
//       <p> --- {props.author}</p>
//     </div>
//   )
// })
