import React, { useState, useEffect } from "react"

const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  const tick = () => {
    setDate(new Date())
  }

  return (
    <div>
      {date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </div>
  )
}

export default Clock
