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

const AskGPT = () => {
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [scenes, setScenes] = useState([]);
  const [selectedScene, setSelectedScene] = useState(null);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { error, isLoading, models } = useSelector((state) => state.AIResults);
  const [selectedSceneText, setSelectedSceneText] = useState(null);

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
          <Cardo
            list={selectedDesigns.map(
              (index) => generatedImages.payload.output[index]
            )}
            isSelected={true}
          />
        </section>
      </div>
      <FooterBtns>
        <div>
          <Button to="/choose-platform">Choose Your Platform</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default AskGPT;