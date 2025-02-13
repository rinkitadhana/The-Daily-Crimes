import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ReactNode, useEffect } from "react"

type Props = {
  children: ReactNode
}

const Screen: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto"
    }, 5000)
    return () => {
      document.body.style.overflow = "auto"
      clearTimeout(timer)
    }
  }, [])
  const timeline = gsap.timeline({
    delay: 1,
  })
  useGSAP(() => {
    timeline.fromTo(
      "#screen",
      {
        scale: 0.4,
        y: document.documentElement.scrollHeight * 0,
        duration: 1,
      },
      {
        scale: 0.4,
        y: () => -document.documentElement.scrollHeight * 0.26,
        duration: 1,
        ease: "power4.out",
      }
    )
    timeline.to("#screen", {
      scale: 1,
      y: 0,
      duration: 2.5,
      rotation: -360,
      ease: "power4.inOut",
    })
  }, [])

  return (
    <div id="screen" className="screen">
      {children}
    </div>
  )
}

export default Screen
