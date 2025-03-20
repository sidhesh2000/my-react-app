import React from "react";
import "./Products.css";
import productsData from "./ProductsData"; // Import the data

function Products() {
  return (
    <div className="Productscontainer">
      <div>
        <div className="ProductsAlignContainer">
          <div className="Explore">Explore</div>
          <div className="digitally">Our Products</div>
        </div>
      </div>

      {productsData.map((product) => (
        <div className="TotalWidthContainer" key={product.id}>
          <div className="GifCont">
            <img height={100} src={product.gifSrc} alt={product.title} />
          </div>
          <div className="ContentCont">
            <div className="ContentContInner">
              <div
                style={{
                  color: "#000",
                 
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "36px",
                }}
              >
                {product.title}
              </div>
              <div className={product.status=="LIVE"?"live-indicator-block-greena":"live-indicator-block-product"}>
                <span className={product.status=="LIVE"?"live-indicator-greena":"live-indicator"}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z"
                      fill="#fff"
                    />
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.1"
                    />
                  </svg>
                  &nbsp;{product.status}
                </span>
              </div>
            </div>
            <p >
             
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.39377 12.184C5.34843 12.184 4.38843 11.9387 3.51377 11.448C2.6391 10.936 1.9351 10.2533 1.40177 9.4C0.868432 8.54667 0.601766 7.58667 0.601766 6.52C0.601766 5.53867 0.847099 4.62133 1.33777 3.768C1.84977 2.89333 2.5431 2.18933 3.41777 1.656C4.29243 1.10133 5.28443 0.823999 6.39377 0.823999C7.41777 0.823999 8.3671 1.06933 9.24177 1.56C10.1378 2.05067 10.8524 2.73333 11.3858 3.608C11.9191 4.46133 12.1858 5.432 12.1858 6.52C12.1858 7.56533 11.9191 8.51467 11.3858 9.368C10.8738 10.2213 10.1804 10.904 9.30577 11.416C8.4311 11.928 7.46043 12.184 6.39377 12.184Z"
                  fill="#62B62C"
                />
              </svg>{" "}
              &nbsp;{product.description}
            </p>
          </div>
          <div className="ButtonCont">
            <div className="button shiny">{product.buttonText}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;