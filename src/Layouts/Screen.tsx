import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ReactNode, useEffect, useLayoutEffect } from "react"

type Props = {
  children: ReactNode
}

const Screen: React.FC<Props> = ({ children }) => {
  // Start the intro from the top, even when the browser restores a scroll
  // position on reload. Runs before useGSAP's layout effect.
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

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
