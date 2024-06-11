import React, { useEffect, useState } from "react";

const UnmountTest = () => {

    useEffect(() => {

        console.log('Mount!')

        return () => {
            console.log('Unmount!')
        }
    }, [])
    return <div>Unmount Testing Component</div>
}


const Lifecycle = () => {

    console.log('ch')

    const [isVisible, setisVisible] = useState(false)
    const toggle = () => setisVisible(!isVisible)

    return <div style={{ padding: 20 }}>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest />}
    </div>
}

export default Lifecycle