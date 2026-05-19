import products from "../products.json"
import { useState } from "react"

const imageFiles = import.meta.glob("../src/assets/*", { eager: true, as: "url" })
const imageMap = Object.fromEntries(
  Object.entries(imageFiles).map(([key, url]) => [key.replace("../src/assets/", ""), url])
)

export default function Products(){
  const [productdata, setProductdata] = useState(products)

  const resolveImage = (imageUrl) => {
    const fileName = imageUrl.replace(/^src\/assets\//, "")
    return imageMap[fileName] ?? imageUrl
  }

  return(
    <>
      {productdata.map((item) => (
        <div className="card" key={item.id}>
          <div className="video-cart-buttons">
            <button className="video-btn" aria-label="Play video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8812 23.7624C18.443 23.7624 23.7624 18.443 23.7624 11.8812C23.7624 5.31939 18.443 0 11.8812 0C5.31939 0 0 5.31939 0 11.8812C0 18.443 5.31939 23.7624 11.8812 23.7624Z" fill="#2E4790" fillOpacity="0.23"/>
                <path d="M9.50495 7.12871L16.6337 11.8812L9.50495 16.6337V7.12871Z" fill="#2E4790" fillOpacity="0.23"/>
              </svg>
            </button>

            <button className="cart-add" aria-label="Add to cart">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.11953 1.73386C2.1914 1.71261 2.26674 1.70573 2.34126 1.71361C2.41578 1.72149 2.48802 1.74398 2.55385 1.77979C2.61968 1.8156 2.6778 1.86403 2.72491 1.92231C2.77201 1.98059 2.80717 2.04759 2.82837 2.11946L3.24668 3.53638H14.3927C15.7921 3.53638 16.8607 4.84226 16.4576 6.20595L15.1989 10.4651C14.9312 11.3724 14.0801 11.9786 13.1339 11.9786H6.17027C5.22414 11.9786 4.37383 11.3724 4.10535 10.4651L1.73469 2.4427C1.69198 2.29777 1.70852 2.14182 1.78067 2.00907C1.85282 1.87631 1.97469 1.77685 2.11953 1.73386ZM4.75335 14.8307C4.75335 14.3768 4.93364 13.9416 5.25457 13.6206C5.57549 13.2997 6.01075 13.1194 6.46461 13.1194C6.91846 13.1194 7.35373 13.2997 7.67465 13.6206C7.99557 13.9416 8.17586 14.3768 8.17586 14.8307C8.17586 15.2845 7.99557 15.7198 7.67465 16.0407C7.35373 16.3616 6.91846 16.5419 6.46461 16.5419C6.01075 16.5419 5.57549 16.3616 5.25457 16.0407C4.93364 15.7198 4.75335 15.2845 4.75335 14.8307ZM10.8378 14.8307C10.8378 14.606 10.8821 14.3834 10.9681 14.1758C11.0541 13.9682 11.1801 13.7795 11.339 13.6206C11.4979 13.4617 11.6866 13.3357 11.8942 13.2497C12.1018 13.1637 12.3244 13.1194 12.5491 13.1194C12.7738 13.1194 12.9963 13.1637 13.2039 13.2497C13.4116 13.3357 13.6002 13.4617 13.7591 13.6206C13.918 13.7795 14.0441 13.9682 14.1301 14.1758C14.2161 14.3834 14.2603 14.606 14.2603 14.8307C14.2603 15.2845 14.08 15.7198 13.7591 16.0407C13.4382 16.3616 13.0029 16.5419 12.5491 16.5419C12.0952 16.5419 11.66 16.3616 11.339 16.0407C11.0181 15.7198 10.8378 15.2845 10.8378 14.8307Z" fill="#2E4790"/>
              </svg>
            </button>
          </div>
        
         <div className="product-image">
             <img src={resolveImage(item.imageurl)} alt={item.name} />
         </div>
          <p className="category">{item.category}</p>
          <h3 className="name">{item.name}</h3>
          <div className="prices-container">
              <p className="new-price">{item.price}</p>
               <p className="old-price">{item.oldprice}</p>
          </div>

        <div className="buy-quntiy-container">
              <select className=" quantity-ls">
                  {[...Array(item.quantity)].map((_, index) => (
                    <option key={index} value={index + 1}>
                        {index + 1}
                   </option>
                     ))}
               </select>

              <button>buy now</button>
        </div>
        
        </div>
      ))}
    </>
  )
}
