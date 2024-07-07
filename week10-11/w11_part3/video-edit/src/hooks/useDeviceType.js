import { useState, useLayoutEffect } from "react"
const useDeviceType = () => {

  const [deviceType, setDeviceType] = useState('pc')

  let screenWidth = window.innerWidth

  const updateDeviceType = () => {
    screenWidth = window.innerWidth

    if (screenWidth <= 768) {
      setDeviceType('mobile')
    }
    if (screenWidth > 768) {
      setDeviceType('pc')
    }
  }

  useLayoutEffect(() => {

    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }

  }, [deviceType])

  return deviceType

}

export default useDeviceType