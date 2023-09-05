import React, { useState } from "react";
export default function Products_List({ open, setOpen }) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const cartIteam = JSON.parse(localStorage.getItem("cartIteam")) || [];
  const [list, setList] = useState([]);
  const addToCart = (id) => {
    const index = products.findIndex((e) => e.id === id);
    const indexCart = cartIteam.findIndex((e) => e.id === id);
    console.log(index, indexCart);
    if (index != -1 && indexCart == -1) {
      alert("Thêm Thành công");
      products[index].quantity = 1;
      setList([...cartIteam, products[index]]);
      localStorage.setItem(
        "cartIteam",
        JSON.stringify([...cartIteam, products[index]])
      );
      setOpen(true);
      return;
    }
    alert("Đã tồn tại trong giỏ hàng");
    setOpen(true);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {" "}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Shoping Cart
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => setOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <p className="countCart">{cartIteam.length}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
                <button
                  style={{
                    background: "#333",
                    padding: "0.3rem 1rem",
                    borderRadius: "3px",
                    color: "#fff",
                    // zIndex: 9999,
                  }}
                  onClick={() => addToCart(product.id)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
