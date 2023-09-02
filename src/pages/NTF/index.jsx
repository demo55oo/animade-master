import React, { useState } from "react";
import Image from "../../assets/Rectangle 4.png";
import {
  BaseForm,
  Button,
  FooterBtns,
  Input,
  SwitchButton,
} from "../../components";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import styles from "./.module.scss";

const NTF = () => {
  const [extraLink, setExtraLink] = useState(false);
  const [lockedContent, setLockedContent] = useState(false);
  const [asDefault, setAsDefault] = useState(false);

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

  const extraField = {
    type: "text",
    placeholder: "https://yoursite.world/item/1538",
    label: "External Link",
  };

  const text =
    "Use GPT-4 to <span> generate title and description</span>. Give a <span> prompt</span> in the name/description field.";

  return (
    <>
      <div className={styles.page}>
        <div className={styles.page__cards}>
          <div>
            <img src={Image} alt="" />
          </div>
          <div>NTF</div>
        </div>
        <div className={styles.form__container}>
          <h3 className={`${styles.title} section__title`}>
            NFT - An astronaut Playing the guitar On the Moon{" "}
          </h3>
          <BaseForm fields={baseFields} text={text} extraField={extraField} />
          <div className={styles.toggle__btn}>
            <div className={styles.title}>
              <h5>Link to Merch</h5>
              <p>External Link to your Merch page for the same design</p>
            </div>
            <SwitchButton setState={setExtraLink} state={extraLink} />
          </div>
          {/* ====== */}
          <div className={`${styles.input} ${styles.center}`}>
            <label>Collection</label>
            <select>
              <option>Choose Collection</option>
              <option>tow</option>
              <option>three</option>
            </select>
          </div>
          {/* ======= */}
          <div className={`${styles.input} ${styles.center}`}>
            <label>Properties</label>
            <div className={`${styles.input__control}`}>
              <Input type="text" placeholder="Character Type" />
              <Input type="text" placeholder="Character Name" />
              <button className={styles.close}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className={`${styles.input} ${styles.center}`}>
            <label>Levels</label>
            <div className={styles.select__level}>
              <div className={styles.level}>
                <Input type="text" placeholder="Name" />
              </div>
              <div className={styles.level}>
                <span className={styles.item}>Value</span>
                <input className={styles.item} type="number" placeholder="3" />
                <span className={styles.item}>of</span>
                <span className={styles.item}>5</span>
              </div>
              <button className={styles.close}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          {/* ====== */}
          <div className={`${styles.input} ${styles.center}`}>
            <label>Stats</label>
            <div className={styles.select__level}>
              <div className={styles.level}>
                <Input type="text" placeholder="Name" />
              </div>
              <div className={styles.level}>
                <span className={styles.item}>Value</span>
                <input className={styles.item} type="number" placeholder="3" />
                <span className={styles.item}>of</span>
                <span className={styles.item}>5</span>
              </div>
              <button className={styles.close}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          {/* ====== */}
          <div className={styles.toggle__btn}>
            <div className={styles.title}>
              <h5>Unlockable Content</h5>
              <p>Include content that only the owner of the item can access.</p>
            </div>
            <SwitchButton setState={setLockedContent} state={lockedContent} />
          </div>
          <div className={styles.input}>
            <label>Content</label>
            <Input
              type="textarea"
              placeholder="Please provide the content for the buyer (access key, code to redeem, link to a file, etc.)"
            />
          </div>
          <p className={styles.end__p}>
            <span>Markdown</span> syntax is supported.
          </p>
          <div className={`${styles.toggle__btn} ${styles.single__line}`}>
            <div className={styles.title}>
              <h5>Supply</h5>
              <p>
                The number of items that can be minted. There is no gas cost to
                you.
              </p>
            </div>
            <Input type="number" placeholder="10" />
          </div>
          <div className={`${styles.input} ${styles.center}`}>
            <label>Blockchain</label>
            <select>
              <option>Ethereum</option>
              <option>tow</option>
              <option>three</option>
            </select>
          </div>
          <div className={styles.toggle__btn}>
            <div className={styles.title}>
              <h5>Set as Default</h5>
              <p>Save time by saving these options for all NFTs</p>
            </div>
            <SwitchButton setState={setAsDefault} state={asDefault} />
          </div>
          <div className={styles.toggle__btn}>
            <div className={styles.title}>
              <h5>Add to a Drop</h5>
              <p style={{ marginBottom: "10px" }}>
                Customise your upload process and organise your products in a
                Drop list to release the items.
              </p>
              <p>You can assign any product to a new drop at any time.</p>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.card__title}>MerchTee</p>
              <div>
                <span>Drop</span>
                <span className={styles.products__num}>245 Products</span>
              </div>
            </div>
            <div className={styles.card}>
              <p className={styles.card__title}>MerchTee</p>
              <div>
                <span>Drop</span>
                <span className={styles.products__num}>245 Products</span>
              </div>
            </div>
            <div className={styles.add__card}>
              <div>
                <AiOutlinePlus className={styles.icon} /> New Drop
              </div>
            </div>
          </div>
          <div className={styles.toggle__btn}>
            <div className={styles.title}>
              <h5>Default Drops</h5>
              <p>
                Set the selected drop/queue as the default for all selected
                products.
              </p>
            </div>
            <SwitchButton setState={setAsDefault} state={asDefault} />
          </div>
        </div>
      </div>
      <FooterBtns>
        <Button to="/choose-platform" color="purple" type="button">
          Go Back
        </Button>
        <Button to="/choose-platform" color="gray" type="button">
          Deny & Remove Listing
        </Button>
        <Button to="/choose-platform" type="button">
          Approve
        </Button>
      </FooterBtns>
    </>
  );
};

export default NTF;
