import Products from "./Products";


const ProductList = () => {

  const productList = [
    { id : "101",
      title: "Fancy Product",
      price: "40.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    { id : "102",
      title: "Special Item",
      price: "$18.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    { id : "103",
      title: "Sale Item",
      price: "25.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    { id : "104",
      title: "Popular Item",
      price: "40.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    { id : "105",
      title: "Sale Item",
      price: "$25.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    { id : "106",
      title: "Fancy Product",
      price: "$120",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    { id : "107",
      title: "Special Item",
      price: "$18.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    { id : "108",
      title: "Popular Item",
      price: "$40.00",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
  ];

  return (
      <>
        {productList.map((product) => (
          <Products key={product.id} product={product} id={product.id} />
        ))}
      </>
  );
};

export default ProductList;
