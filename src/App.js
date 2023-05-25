import {useState , useRef , useEffect} from "react"
import {motion} from "framer-motion"
import img1 from "./images/1.jpeg"
import img2 from "./images/2.jpeg"
import img3 from "./images/3.jpeg"
import img4 from "./images/4.jpeg"
import img5 from "./images/5.jpeg"
import img6 from "./images/6.jpeg"
import img7 from "./images/7.jpeg"


function App() {
  const [width , setwidth] = useState(0)
  const carouselRef = useRef()
  useEffect(_=> setwidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth) ,[])

  const imgs = [img1 , img2 , img3 , img4 , img5 ,img6 , img7]

  
  return (
    <div className="App">
      <motion.div className="carousel" ref={carouselRef} >
        <motion.div drag="x" dragConstraints={{right:0 ,left:-width }}  className="inner-carousel">
          {
            imgs?.map((e,index)=> (
              <motion.div key={index} className="item" whileTap={{ cursor :"grabbing"}}>
                <img src={e} className="item-img" />
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
