import React, { useState } from "react";
import { Button, HeaderSettings, Input } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import api from "../../api"; // Replace with your API library
import titleClasses from "../Settings/.module.scss";
import styles from "./.module.scss";
import { useLocation  } from "react-router-dom";
import { useSelector } from "react-redux";
import { customAlert } from "../../utils/alert";
import Image from "../../assets/Rectangle 4.png";
import { useParams } from "react-router-dom";


const Upload = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedVariantId } = useParams();


  const updatePass = async () => {
    setLoading(true);
    try {
      // Your update password logic here
    } catch (error) {
      // Handle errors
    }
  };

  // Example dummy image links
const dummyImage1 = "https://example.com/image1.jpg";
const dummyImage2 = "https://example.com/image2.jpg";
const { state } = useLocation();
const selectedDesignsData = state?.selectedDesignsData || [
  { imageUrl: dummyImage1, thumbnailUrl: dummyImage1 },
  { imageUrl: dummyImage2, thumbnailUrl: dummyImage2 },
  // You can add more dummy image objects as needed
];
const { variantId } = useParams();

  const { access_token } = useSelector((state) => state.printful);
  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack /> Upload Products
    </h5>
  );

  // Define the category options
  const categoryOptions = [
    "T-shirt",
    "Posters",
    "Long sleeve shirts",
    "Phone cases",
    "Stickers",
  ];

  // Mapping of category to variant_id
  const categoryToVariantId = {
    "T-shirt": 473,
    "Posters": 1349,
    "Long sleeve shirts": 3448,
    "Phone cases": 7910,
    "Stickers": 10163,
  };

  const handleUploadProducts = async () => {
    console.log("Selected Designs:", selectedDesignsData); // Log selected designs
    console.log("Access Token:", access_token); // Log the access token
    console.log("Variant IDs:", selectedVariantId); // Log variantIds
    console.log("Selected Designs:", selectedDesignsData); // Log selected designs

    setLoading(true);

    try {
         // Iterate over the selected designs and call the API for each product
    for (const design of selectedDesignsData) {
      const { imageUrl, thumbnailUrl } = design;
      console.log("Design:", design);

      const variantId = categoryToVariantId[data.selectedCategory];
      console.log("Image URL:", imageUrl); // Log image URL for debugging
      console.log("Thumbnail URL:", thumbnailUrl); // Log thumbnail URL for debugging
  
      const productData = {
        sync_product: {
          name: data.productName,
          thumbnail: design,
        },
        sync_variants: [
          {
            retail_price: data.retailPrice,
            variant_id: selectedVariantId,
            files: [
              {
                url: design,
              },
              {
                type: "back",
                url: design,
              },
            ],
          },
        ],
      };
      

      // Make a separate API request for each product
      const res = await api.post(
        `https://backednlatestanimade-production.up.railway.app/printful-proxy/`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
    }

    setLoading(false);
    customAlert("Products Added Successfully!", "success");
  } catch (error) {
    setLoading(false);
    customAlert("Something went wrong!", "error");
    console.error("Error adding products to Printful:", error);
  }
};
const baseFields = [
  {
    type: "text",
    placeholder: "Item Name",
    label: "Name",
  },
  {
    type: "textarea",
    placeholder: "Provide a detailed description of your creation",
    label: "Description",
  },
];

  return (
    <div className={styles.page}>
    <div className={styles.page__cards}>
          <div>
            <img src={Image} alt="" />
          </div>         
           <div>Products</div>
        </div>
        <div className={styles.form__container}>
          <h3 className={`${styles.title} section__title`}>
            products will be uploaded to printful store that is authorized make sure to connect ot printful before upload 
              </h3>
      <HeaderSettings title={title} />
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUploadProducts();
        }}
        className={styles.form}
      >
{/* <div className={styles.form}> */}

 {/* <div className={styles.input__box}>
          <label>Category</label>
          <select
            className={styles.currencyDropdown}
            onChange={(e) =>
              setData({
                ...data,
                selectedCategory: e.target.value,
              })
            }
            required={true}
          >
            <option value="">Select a category</option>
            {categoryOptions.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div> */}
        <div className={styles.input__box}>
  <label lassName={styles.input}>Product name</label>
  <input
    className={styles.input}
    type="text"
    placeholder="Product label"
    value={data.productName}
    onChange={(e) =>
      setData({
        ...data,
        productName: e.target.value,
      })
    }
    required={true}
  />
</div>
         
<div className={styles.input__box}>
  <label>Retail Price</label>
  <input
  className={styles.input}
    type="number"
    placeholder="Retail price"
    value={data.retailPrice}
    onChange={(e) =>
      setData({
        ...data,
        retailPrice: e.target.value,
      })
    }
    required={true}
  />
</div>
  <label>Description</label>
  <textarea
    className={styles.textarea} // Apply the desired CSS class for styling
    rows="4"
    placeholder="Provide a detailed description of your creation"
  ></textarea>

{/* </div> */}
        <div className={styles.input__box}>
          {/* <label>Product type (variant)</label>
          <Input
            onChange={(e) =>
              setData({
                ...data,
                confirmpassword: e.target.value,
              })
            }
            // Add your validation and other props here
          /> */}
        </div>      
          <Button
          type="submit"
          loading={loading}
        >
          Upload Selected Products
        </Button>
      </form>
    </div>
    </div>
  );
};

export default Upload;
