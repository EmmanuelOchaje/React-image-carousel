import { useState } from "react";

const imagesArr = [
  {
    src: "./images-int/pexels-1.jpg",
    alt: "Image-1",
  },
  {
    src: "./images-int/pexels-2.jpg",
    alt: "Image-1",
  },
  {
    src: "./images-int/pexels-3.jpg",
    alt: "Image-1",
  },
];

export default function App() {
  const [slide, setSlide] = useState(0);
  function nextslide() {
    setSlide(slide === imagesArr.length - 1 ? 0 : slide + 1);
  }
  function prevSlide() {
    setSlide(slide === imagesArr.length - 1 ? 0 : slide - 1);
  }
  return (
    <div className="App">
      <ImageDisiplayer
        data={imagesArr}
        slide={slide}
        setSlide={setSlide}
        next={nextslide}
        prev={prevSlide}
      />
    </div>
  );
}

function ImageDisiplayer({ data, slide, setSlide, next, prev }) {
  console.log(data);
  return (
    <div className="carousel">
      <button className="btn left" onClick={prev}>
        👈
      </button>
      {data.map((img, idx) => (
        <img
          src={img.src}
          alt={img.alt}
          key={idx}
          className={slide === idx ? "slide" : "slide-hidden"}
        />
      ))}
      <button className="btn right" onClick={next}>
        👉
      </button>
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={slide === idx ? "btn-act" : "btn-not"}
          ></button>
        ))}
      </span>
    </div>
  );
}
