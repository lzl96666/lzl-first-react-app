import React, { useState, useEffect } from 'react'
import { Icon } from 'antd'

// 自定义hook,'use'开头 可用其他hook
function useAge() {
  const [age, setAge] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setAge(18)
    }, 2000)
  })
  return age
}

export default function HooksTest() {
  // useState(initialState)，接收初始状态，返回一个状态变量和其更新函数
  const [count, setCount] = useState(0)
  // hook
  // 多个state
  const [name] = useState('小刘')
  const age = useAge()
  const [fruit, setFruit] = useState('apple')
  const [input, setInput] = useState('')
  const [fruits, setFruits] = useState(['apple', 'banana'])

  useEffect(() => {
    console.log('useEffect')
  }, [])

  useEffect(() => {
    console.log('count 更新了')
  }, [count])
  return (
    <div>
      {' '}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>{' '}
      {/* 多个状态 */}
      <p>my name : {name}</p>
      <p>my age : {age ? age : 'loadding'}</p>
      <p>my favorites : {fruit}</p>
      <ul>
        {fruits.map(f => (
          <li key={f}>
            <span onClick={() => setFruit(f)}>{f} </span>
            <Icon type="close" onClick={() => deleteFruits(f)} />
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={input || ''}
          onChange={e => setInput(e.target.value)}
        ></input>
        <button onClick={() => AddFruits()}>添加水果</button>
      </div>
    </div>
  )

  function AddFruits() {
    if (!input) {
      alert('不能为空')
      return
    }

    let isExist = fruits.findIndex(f => {
      return f === input
    })

    if (isExist > -1) {
      alert('已存在，请重新输入')
      return
    } else {
      setFruits([...fruits, input])
    }
    setInput('')
  }

  function deleteFruits(fruit) {
    let index = fruits.findIndex(f => {
      return f === fruit
    })
    fruits.splice(index, 1)
    setFruits([...fruits])
  }
}
