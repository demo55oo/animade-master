import React, { useEffect, useState } from "react";
import { Button, CardsList, FooterBtns, GenerateForm } from "../../components";
import { UploadIocn } from "../../icons";
import { BiUpload } from "react-icons/bi";
import { imageToImage } from "../../redux/services/imageToImage";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from "./.module.scss";
import { getCreatedDesigns } from "../../redux/services/getCreatedDesigns"; // Import the getCreatedDesigns action
import {Cardo} from "../../components"; // Import the cardo component
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ImageInput = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUploaded, setimageUploaded] = useState(false);
  const { imageToImageResluts, error, isLoading, isError } = useSelector(
    (state) => state.AIResults
  );

  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCreatedDesigns());
  }, [dispatch]);
  const handleUploadProducts = () => {
    // Prepare your data here
    const selectedDesignsData = {
      selectedDesigns: selectedDesigns,
      // Other data if needed
    };
  
    // Navigate to the Upload Products screen with the data as route state
    navigate("/choose-products", { state: selectedDesignsData });
  };
  const toggleCardSelection = (image) => {
    // Check if the card is already selected
    if (selectedDesigns.includes(image)) {
      setSelectedDesigns(selectedDesigns.filter((item) => item !== image));
    } else {
      setSelectedDesigns([...selectedDesigns, image]);
    }
  };

  const designs = useSelector((state) => state.user.createdDesigns);

  const addImageUserHandler = (input) => {
    // setData({
    //   ...data,
    //   init_image: input.target.files[0],
    // });
    setImageUpload(input.target.files[0]);

    let files = input.target.files;

    let reader = new FileReader();

    reader.onload = (e) => {
      setImage(e?.target?.result);
    };
    reader?.readAsDataURL(files[0]);
  };
  useEffect(() => {
    if (imageUpload) {
      setLoading(true);
      setimageUploaded(false);
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then(() => {
        setLoading(false);
        setimageUploaded(true);
      });
    }
  }, [imageUpload]);

  useEffect(() => {
    if (imageUploaded) {
      getDownloadURL(ref(storage, `images/${imageUpload.name}`)).then((url) => {
        setData({
          ...data,
          init_image: url,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUploaded]);

  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title">Ask GPT-4 for some help</h3>
        <div className={styles.section__form}>
          <div className={styles.form}>
            <GenerateForm
              placeholder={
                "Upload the image and provide a prompt. This is great if you want to edit an image, or create variations. You can even change the art style."
              }
              onSubmit={() => dispatch(imageToImage(data))}
              setData={setData}
              data={data}
              loading={isLoading}
              max="3"
            />
          </div>
          <div className={styles.upload__image}>
            <input
              type="file"
              id="uploadImage"
              onChange={addImageUserHandler}
              required
            />
            <label htmlFor="uploadImage" className={styles.label__img}>
              {loading ? (
                <span className="spinner"></span>
              ) : image ? (
                <img className={styles.image} src={image} alt="image__upload" />
              ) : (
                <UploadIocn />
              )}
            </label>
            <label htmlFor="uploadImage" className={styles.label__btn}>
              Upload Image
              <BiUpload />
            </label>
          </div>
        </div>
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">
            Output ({imageToImageResluts?.length || 0})
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
              {isError?.messege && (
                <p className="error__msg">{isError?.messege}</p>
              )}
            </>
          ) : error ? (
            <p className="error__msg">Error...!</p>
          ) : !imageToImageResluts ? (
            <h5>Search For Images</h5>
          ) : !imageToImageResluts?.length ? (
            <h5>No Results</h5>
          ) : (
          <CardsList list={imageToImageResluts || []} 
            toggleCardSelection={toggleCardSelection}
              selectedDesigns={selectedDesigns}/>          )}
        </section>
        <section className={`section ${styles.section}`}>
        <h4 className="section__title">Selected Designs ({selectedDesigns.length})</h4>
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

export default ImageInput;
