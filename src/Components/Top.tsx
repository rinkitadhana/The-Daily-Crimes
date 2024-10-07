import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"
import { FaSquareFacebook } from "react-icons/fa6"
import { IoGlobeSharp } from "react-icons/io5"
import Clock from "../Tools/Clock"

const Top = () => {
  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth()
  const todayDate = date.getDate()
  const year = date.getFullYear()

  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return (
    <div className=" text-black/90 font-Helvetica text-xs flex flex-row justify-between items-center">
      <div className=" flex flex-col items-start">
        <span className=" text-black/75 text-base font-semibold hover:underline cursor-pointer">
          thedailycrimes@gmail.com
        </span>
        <div className=" text-sm flex flex-wrap gap-1">
          <div className=" flex gap-0.5 hover:font-semibold cursor-pointer  items-center">
            <FaTwitterSquare />
            thedailycrimes
          </div>
          <div className=" flex gap-0.5 hover:font-semibold cursor-pointer  items-center">
            <FaSquareFacebook />
            dailycrimes
          </div>
          <div className=" flex gap-0.5 hover:font-semibold cursor-pointer  items-center">
            <FaInstagramSquare />
            daily_crimes
          </div>
          <div className=" flex gap-0.5 hover:font-semibold cursor-pointer  items-center">
            <IoGlobeSharp />
            thedailycrimes.com
          </div>
        </div>
        <span>
          PN-6, Thane - Belapur Rd, Digha Naka, Subhash Nagar, Dighe, Navi
          Mumbai, Maharashtra 400708
        </span>
      </div>
      <div className=" flex flex-col items-end">
        <span className=" text-black/75  font-semibold text-sm">
          New Delhi, India
        </span>
        <span className=" text-black/80  font-semibold text-base">
          {dayArr[day]}, {monthArr[month]} {todayDate}, {year}
        </span>
        <span className=" flex flex-row gap-1 font-sans font-semibold">
          Local Time <Clock />
        </span>
      </div>
    </div>
  )
}

export default Top
