import MiddleHead from "./MiddleHead"
import News1 from "./News/News1"
import News2 from "./News/News2"
import News3 from "./News/News3"
import TheEnd from "./TheEnd"
const News = () => {
  return (
    <>
      <News1 />
      <hr className="border-t-2  border-zinc-800" />
      <MiddleHead />
      <hr className="border-t-2 mb-6 border-zinc-800" />
      <News2 />
      <hr className="border-t-2 my-6 border-zinc-800" />
      <News3 />
      <hr className="border-t-2 my-4 border-zinc-800" />
      <TheEnd />
    </>
  )
}

export default News
