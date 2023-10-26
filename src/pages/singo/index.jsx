import React, { useState, useEffect } from "react";
import { Button, CardsList, FooterBtns, GenerateForm,Title ,GenerateFormy} from "../../components";
import { textToImage1 } from "../../redux/services/textosand";
import { useDispatch, useSelector } from "react-redux";
import styles from "./.module.scss";
import { getCreatedDesigns } from "../../redux/services/getCreatedDesigns"; // Import the getCreatedDesigns action
import {Cardo} from "../../components"; // Import the cardo component
import { printfulAuth } from "../../redux/services/printfulAuth";
import { Link, useLocation } from "react-router-dom";
import { addCreatedDesign } from "../../redux/services/addsaveddesigns";
import { useNavigate } from "react-router-dom";

const Singo = () => {
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { textToImageResluts, error, isLoading, isError } = useSelector(
    (state) => state.AIResults
  );
  const location = useLocation();
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false); // State to track button click

  const handleUploadProducts = () => {
    // Prepare your data here
    const selectedDesignsData = {
      selectedDesigns: selectedDesigns,
      // Other data if needed
    };
  
    // Navigate to the Upload Products screen with the data as route state
    navigate("/choose-products", { state: selectedDesignsData });
  };
  

  
  const { access_token, products, loadind } = useSelector(
    (state) => state.printful
  );
  const toggleCardSelection = (image) => {
    // Check if the card is already selected
    if (selectedDesigns.includes(image)) {
      setSelectedDesigns(selectedDesigns.filter((item) => item !== image));
    } else {
      setSelectedDesigns([...selectedDesigns, image]);
    }
  };

  const clientId = process.env.REACT_APP_PRINTFUL__CLIENT__ID;
  const token = location.search.slice(
    location.search.indexOf("=", 7) + 1,
    location.search.indexOf("&", 10)
  );
  const handleGenerateImage = () => {
    setButtonClicked(true); 
    dispatch(textToImage1(data));
  };
  useEffect(() => {
    // Step 3: Automatically add the generated images to saved designs when available
    if (textToImageResluts && textToImageResluts.length > 0) {
      // Assuming you want to save all the generated images automatically.
      textToImageResluts.forEach((generatedImage) => {
        const description = "Your default description"; // You can set a default description if needed.
        const number = 1; // Set your desired default number here.
  
        // Dispatch the addCreatedDesign action to add the generated image to saved designs
        dispatch(addCreatedDesign({ image: generatedImage, desc: description, number: number || "Your fallback default value" }));
      });
    }
  }, [textToImageResluts, dispatch]);
  useEffect(() => {
    if (token && !access_token) {
      dispatch(printfulAuth(token));
    }
  }, [access_token, dispatch, token]);

  const {  createdDesigns } = useSelector(
    (state) => state // Update the selector to include createdDesigns
  );
  useEffect(() => {
    dispatch(getCreatedDesigns());
  }, [dispatch]);

  const designs = useSelector((state) => state.user.createdDesigns);


  const [selectedOption, setSelectedOption] = useState("textToImage"); // Default value is "Text to Image"

  return (
    <div>
      <div className={styles.page}>
        <div className={styles.oh}>
        <Title>
             Discover Smart Prompts To 
        </Title>
        <Title>
        <span> Experience effeciency</span>
        </Title>
        </div>
        <div className={styles.all}>
        <div className={styles.whole}>
        <select
    value={selectedOption}
    onChange={(e) => setSelectedOption(e.target.value)}
    className={styles.dropdown}
  >
    <option className={styles.drop} value="textToImage">Text to Image</option>
    <option className={styles.drop} value="imageInput">Image Input</option>
  </select>
  <h3 className={styles.dody}>Your normal AI image generation system, where users input a prompt and generate designs - This is already in the sandbox</h3>
        <h3 className="section__title">
          Create designs from your wildest dreams
        </h3>
        <GenerateFormy
  type="single-input"
  placeholder="What do you want to see? Be specific."
  onSubmit={() => dispatch(textToImage1(data))}
  setData={setData}
  data={data}
  loading={isLoading}
/>
        </div>
        {/* <button onClick={generateImages}>Submit</button> */}
        <div className={styles.wholey}>
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">
            Output ({textToImageResluts?.length || 0})
          </h4>
          {isLoading ? (
            <span className={`spinner ${styles.loader__spinner}`}></span>
          ) : isError?.status !== "success" ? (
            <>
              {isError?.messege?.prompt && (
                <p className="error__msg">{isError?.messege?.prompt[0]}</p>
              )}
              {isError?.messege?.samples && (
                <p className="error__msg">{isError?.messege?.samples[0]}</p>
              )}
              {isError?.message && (
                <p className="error__msg">{isError?.message}</p>
              )}
            </>
            
          ) : error ? (
            <p className="error__msg">Error...!</p>
          ) : !textToImageResluts ? (
            <h5>Search For Images</h5>
          ) : !textToImageResluts?.length ? (
            <h5>No Results</h5>
          ) : (
            <CardsList list={textToImageResluts || []} 
            toggleCardSelection={toggleCardSelection}
              selectedDesigns={selectedDesigns}/>
          )}
          {error && <p className="error__msg">Please upgrad your plan</p>}
        </section>
        </div>
        {/* <section className={`section ${styles.section}`}>
          <h4 className="section__title">Selected Designs ({selectedDesigns.length})</h4>
          <Cardo list={selectedDesigns} />
     
        </section> */}
      </div>
      {/* <FooterBtns>
        <div>
        <button   className={styles.button} // Apply the button styles
  onClick={handleUploadProducts}>
  Choose Your Platform
</button>

        </div>
      </FooterBtns> */}
    </div>
    </div>
  );
};

export default Singo;

// <>
//   <p className="error__msg">
//     {isError?.messege &&
//       isError?.message?.prompt &&
//       isError?.messege?.prompt[0]}
//     {/* <br /> */}
//     {isError?.messege &&
//       isError?.messege?.samples &&
//       isError?.messege?.samples[0]}
//   </p>
// </>;
// {
//   isError &&
//   isError?.status !== "success" &&
//   typeof isError?.message !== "object" ? (
//     <p className="error__msg">{isError?.message}</p>
//   ) : (
//     ""
//   );
// }