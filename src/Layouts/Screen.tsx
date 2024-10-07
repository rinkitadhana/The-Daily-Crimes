import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ReactNode, useEffect, useState } from "react"

type Props = {
  children: ReactNode
}

const Screen: React.FC<Props> = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }

    window.addEventListener("resize", checkScreenSize)

    checkScreenSize()

    return () => window.removeEventListener("resize", checkScreenSize)
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
        y: 0,
        duration: 1,
      },
      {
        y: -1100,
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
    <div>
      {isSmallScreen && (
        <div className="absolute z-50 flex justify-center items-center">
          <div className=" border-2 py-2 px-4 rounded-xl flex flex-col items-center gap-4 m-2 md:w-1/3 bg-zinc-700 text-white">
            <p className=" text-center font-semibold">
              Hey, I'm currently working on the mobile version of this website.
              I urge you to open the website on your desktop.
            </p>
            <a
              className=" border-2 rounded-lg px-3 bg-zinc-700 text-lg text-white"
              onClick={(prev) => setIsSmallScreen(!prev)}
            >
              Hide
            </a>
          </div>
        </div>
      )}

      <div
        id="screen"
        className="bg-[url('../public/bg/texture.jpg')] font-EditorialNew px-4 pt-4 min-h-screen text-zinc-800 scale-[40%]"
      >
        {children}
      </div>
    </div>
  )
}

export default Screen
