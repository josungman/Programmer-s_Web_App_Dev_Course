import React, { useState, useEffect } from "react"

const CounterA = React.memo(({ count }) => {
    useEffect(() => {
        console.log(`CountA Update - count : ${count}`)
    })
    return <div>{count}</div>
})

const CounterB = ({ obj }) => {
    useEffect(() => {
        console.log(`CountB Update - count : ${obj.count}`)
    })
    return <div>{obj.count}</div>
}

const areEqual = (prevProps, nextProps) => {

    if (prevProps.obj.count === nextProps.obj.count) {
        return true
    }
    return false
    //return true // 이전 프롭스 현재 프롭스가 같다 -> 리렌더링을 일이키지 않게됨
    //return false // 이전 프롭스 현재 프롭스가 다르다 -> 리렌더링
}
const MemoizedCounterB = React.memo(CounterB, areEqual)


const OptimizeTest = () => {

    const [count, setCount] = useState(1)
    const [obj, setObj] = useState({
        count: 1
    })

    return <div style={{ padding: 50 }}>
        <div>
            <h2>Counter A</h2>
            <CounterA count={count} />
            <button onClick={() => setCount(count)}>A button</button>
        </div>
        <div>
            <h2>Counter B</h2>
            <MemoizedCounterB obj={obj} />
            <button onClick={() => setObj({ count: obj.count })}>B button</button>
        </div>
    </div>
}

export default OptimizeTest