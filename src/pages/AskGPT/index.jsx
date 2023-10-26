import React, { useState, useEffect } from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import {
  CardsList,
  Button,
  CheckBox,
  FooterBtns,
  GenerateForm,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./.module.scss";
import { aiModels } from "../../redux/services/aiModels";
import { getCreatedDesigns } from "../../redux/services/getCreatedDesigns";
import { Cardo } from "../../components";
import { textToImage } from "../../redux/services/textToImage";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";


const AskGPT = () => {
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [scenes, setScenes] = useState([]);
  const [selectedScene, setSelectedScene] = useState(null);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { error, isLoading, models } = useSelector((state) => state.AIResults);
  const [selectedSceneText, setSelectedSceneText] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

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
    dispatch(textToImage(data));
    // Optionally, you can show a loading state or a message indicating the image is being generated
    // until the textToImageResluts is updated with the generated images.
  };
  useEffect(() => {
    dispatch(getCreatedDesigns());
  }, [dispatch]);

  useEffect(() => {
    const responseScenes = models?.flatMap((model) =>
      model.split(/\d+\.\s+/).filter((scene) => scene.trim() !== "")
    ) || [];
    setScenes(responseScenes);
  }, [models]);

  const handleFormSubmit = () => {
    dispatch(aiModels(data));
    if (selectedScene !== null) {
      console.log("Selected Scene val:", selectedScene);
    }
  };

  const handleFormSubmitgen = () => {
    if (selectedScene !== null) {
      const promptData = {
        prompt: selectedSceneText,
        samples: 3,
        n: 3,
      };

      dispatch(textToImage(promptData))
        .then((images) => {
          setGeneratedImages(images);
        })
        .catch((error) => {
          console.error("Error generating images:", error);
        });
    }
  };

  const handleCheckBoxChange = (value) => {
    setSelectedScene(value);
    if (value !== null && scenes[value] !== undefined) {
      console.log("Selected Scene Text:", scenes[value]);
      setSelectedSceneText(scenes[value]);
    }
  };

  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">Ask GPT-4 for some help</h3>
        <div className={styles.section__form}>
          <div className={styles.form}>
            <GenerateForm
              type="ai"
              placeholder="What do you want to see? Be specific."
              setData={setData}
              data={data}
              onSubmit={handleFormSubmit}
              loading={isLoading}
              max="10"
              model={true}
            />
          </div>
          <div className={styles.check__box}>
            <div className={styles.check__box__list}>
              {scenes.map((scene, index) => (
                <CheckBox
                  key={index}
                  label={scene || `AI output ${index + 1}`}
                  value={index}
                  availableModels={models}
                  selectedScene={selectedScene}
                  onChange={handleCheckBoxChange}
                />
              ))}
            </div>
            <Button color="purple" type="button" onClick={handleFormSubmitgen}>
              <div className={styles.generat__btn}>
                Create Selected <IoCaretForwardOutline />
              </div>
            </Button>
          </div>
        </div>
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">Generated Images</h4>
          {isLoading ? (
            <span className={`spinner ${styles.loader__spinner}`}></span>
          ) : error ? (
            <p className="error__msg">{error?.message}</p>
          ) : generatedImages.payload &&
            generatedImages.payload.output.length > 0 ? (
            <CardsList
              list={generatedImages.payload.output}
              toggleCardSelection={toggleCardSelection}
              selectedDesigns={selectedDesigns}
              renderItem={(imageURL, index) => (
                <div
                  key={index}
                  className={`${styles.generatedImage} ${
                    selectedDesigns.includes(index) ? styles.selected : ""
                  }`}
                  onClick={() => {
                    if (selectedDesigns.includes(index)) {
                      setSelectedDesigns((prevSelected) =>
                        prevSelected.filter((i) => i !== index)
                      );
                    } else {
                      setSelectedDesigns((prevSelected) => [
                        ...prevSelected,
                        index,
                      ]);
                    }
                  }}
                >
                  <img src={imageURL} alt={`Generated Image ${index + 1}`} />
                </div>
              )}
            />
          ) : (
            <h5>No Generated Images</h5>
          )}
        </section>
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">
            Selected Designs ({selectedDesigns.length || 0})
          </h4>
          <Cardo list={selectedDesigns} />

        </section>
      </div>
      <FooterBtns>
        <div>
        <button   className={styles.button} // Apply the button styles
  onClick={handleUploadProducts}>
  Choose Your Platform
</button>        </div>
      </FooterBtns>
    </>
  );
};

export default AskGPT;