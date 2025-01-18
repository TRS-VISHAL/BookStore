import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
function Freebooks() {

  const [book,setbook] = useState([]);
  useEffect(()=>{
const getBook = async() =>{
try {
  const res = await axios.get("http://localhost:4001/book");
  console.log(res.data.filter((a) => a.category === "free"));
  setbook(res.data.filter((a) => a.category === "free"));
} catch (error) {
  console.log(error);
}
}
getBook();
  },[])
 

  // console.log(Free);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {" "}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white">
        <div className="md:mt-0 mt-6">
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            esse. Facilis laboriosam repudiandae, eos molestiae odio dolores nam
            iure nesciunt veritatis aut reiciendis molestias, provident earum.
            Sed sunt obcaecati ratione?
          </p>
        </div>

        <div className="">
          <Slider {...settings}>
            {book.map((a) => (
              <Cards item={a} key={a.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebooks;
