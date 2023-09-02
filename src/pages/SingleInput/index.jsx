import React, { useState, useEffect } from "react";
import { Button, CardsList, FooterBtns, GenerateForm } from "../../components";
import { textToImage } from "../../redux/services/textToImage";
import { useDispatch, useSelector } from "react-redux";
import styles from "./.module.scss";
import { getCreatedDesigns } from "../../redux/services/getCreatedDesigns"; // Import the getCreatedDesigns action
import {Cardo} from "../../components"; // Import the cardo component
import { printfulAuth } from "../../redux/services/printfulAuth";
import { Link, useLocation } from "react-router-dom";
import { addCreatedDesign } from "../../redux/services/addsaveddesigns";

const SingleInput = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { textToImageResluts, error, isLoading, isError } = useSelector(
    (state) => state.AIResults
  );
  const location = useLocation();

  const { access_token, products, loadind } = useSelector(
    (state) => state.printful
  );
  const clientId = process.env.REACT_APP_PRINTFUL__CLIENT__ID;
  const token = location.search.slice(
    location.search.indexOf("=", 7) + 1,
    location.search.indexOf("&", 10)
  );
  const handleGenerateImage = () => {
    dispatch(textToImage(data));
    // Optionally, you can show a loading state or a message indicating the image is being generated
    // until the textToImageResluts is updated with the generated images.
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

  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">
          Create designs from your wildest dreams
        </h3>
        <GenerateForm
          type="single-input"
          placeholder="What do you want to see? Be specific."
          onSubmit={() => dispatch(textToImage(data))}
          setData={setData}
          data={data}
          loading={isLoading}
        />
        {/* <button onClick={generateImages}>Submit</button> */}
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
            <CardsList list={textToImageResluts || []} />
          )}
          {error && <p className="error__msg">Please upgrad your plan</p>}
        </section>
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">Selected Designs ({designs.length})</h4>
          <Cardo list={designs} />
     
        </section>
      </div>
      <FooterBtns>
        <div>
        <Button href="https://www.printful.com/oauth/authorize?client_id=${clientId}&redirect_url=https://localhost:3000/settings/single-input">
  Choose Your Platform
</Button>

        </div>
      </FooterBtns>
    </>
  );
};

export default SingleInput;

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
