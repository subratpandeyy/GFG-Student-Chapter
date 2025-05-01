import img1 from '../assets/img1.JPG'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import article from '../assets/article.png'

export default function Gallery() {
  return (
    <>
    <section className="container gallery-section">
      <h1>Gallery</h1>
    <div className="gallery">
      <div className="column">
        <div className="img-wrapper"><img src={img1} alt="gallery" /></div>
        <div className="img-wrapper"><img src={img4} alt="gallery" /></div>
        <div className="img-wrapper full"><img src={img2} alt="gallery" /></div>
      </div>
      <div className="column">
        <div className="img-wrapper full"><img src={img3} alt="gallery" /></div>
        <div className="img-wrapper"><img src={img5} alt="gallery" /></div>
        <div className="img-wrapper"><img src={article} alt="gallery" /></div>
      </div>
    </div>
</section>

    </>
  )
}
