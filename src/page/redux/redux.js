import React from 'react'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '../../store/count.redux'

const mapStateToProps = state => ({ num: state.counter })
const mapDispatchToProps = { add, minus, asyncAdd }

// function redux({ num, add, minus }) {
//   return (
//     <div>
//       <p>{num}</p>
//       <div>
//         <button onClick={add}>+</button>
//         <button onClick={minus}>-</button>
//       </div>
//     </div>
//   )
// }
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class redux extends React.Component {
  render() {
    const { num, add, minus, asyncAdd } = this.props
    return (
      <div>
        <p>{num}</p>
        <div>
          <button onClick={add}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={asyncAdd}>asyncAdd+</button>
        </div>
      </div>
    )
  }
}
export default redux
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(redux)
