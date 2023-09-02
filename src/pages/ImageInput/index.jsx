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


  useEffect(() => {
    dispatch(getCreatedDesigns());
  }, [dispatch]);

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
            <CardsList list={imageToImageResluts || []} />
          )}
        </section>
        <section className={`section ${styles.section}`}>
          <h4 className="section__title">Selected Designs (12)</h4>
          <Cardo list={designs} isSelected={true} />
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

export default ImageInput;
