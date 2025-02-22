import React, { useState } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const addProduct = () => {
    if (productName && productQuantity && productPrice) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        quantity: productQuantity,
        price: productPrice,
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setProductQuantity("");
      setProductPrice("");
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Inventory Management
          </h1>

          {/* Add Product Form */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="p-2 w-full mb-3 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              className="p-2 w-full mb-3 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="p-2 w-full mb-3 border border-gray-300 rounded"
            />
            <button
              onClick={addProduct}
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Product
            </button>
          </div>

          {/* Product List */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Product List</h2>
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Product Name</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.quantity}</td>
                    <td className="border px-4 py-2">₹{product.price}</td>
                    <td className="border px-4 py-2">
                    
                    <div>
                     <i class="ri-delete-bin-6-line text-[27px] text-red-600 cursor-pointer" 
                     onClick={() => deleteProduct(product.id)}></i>
                    </div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
