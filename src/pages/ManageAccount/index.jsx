import React, { useEffect, useState } from "react"; // useEffect
import { IoIosAdd } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { HeaderSettings, PlatFormCard } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import titleClasses from "../Settings/.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { printfulAuth } from "../../redux/services/printfulAuth";
import { getPrintfulproduct } from "../../redux/services/getPrintfulProducts";
import styles from "../ChoosePlatform/.module.scss";
import { customAlert } from "../../utils/alert";
import axios from "axios";

const ManageAccount = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { access_token, products, error, loadind } = useSelector(
    (state) => state.printful
  );
  const [isLoading, setisLoading] = useState(false);
  const [ setisError] = useState(false);

  const clientId = process.env.REACT_APP_PRINTFUL__CLIENT__ID;

  // ==== get token ======
  const token = location.search.slice(
    location.search.indexOf("=", 7) + 1,
    location.search.indexOf("&", 10)
  );

  useEffect(() => {
    if (token && !access_token) {
      dispatch(printfulAuth(token));
    }
  }, [access_token, dispatch, token]);

  useEffect(() => {
    if (access_token && token) {
      dispatch(getPrintfulproduct());
    }
  }, [access_token, dispatch, token]);

  // ==== add product ====== //#//
  const addProductToPrintFul = async () => {
    setisLoading(true);
    setisError(false);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_PRINTFUL__API__URL}/store/products`,
        {
          sync_product: {
            name: "T-Shirt",
            thumbnail: "https://picsum.photos/200/300",
          },
          sync_variants: [
            {
              retail_price: 21.0,
              variant_id: 4011,
              files: [
                {
                  url: "https://picsum.photos/200/300?image=1",
                },
                {
                  type: "back",
                  url: "https://picsum.photos/200/300?image=1",
                },
              ],
            },
            {
              retail_price: 21.0,
              variant_id: 4012,
              files: [
                {
                  url: "https://picsum.photos/200/300?image=1",
                },
                {
                  type: "back",
                  url: "https://picsum.photos/200/300?image=1",
                },
              ],
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setisLoading(false);
      setisError(false);
      customAlert("You Add A Product !", "success");
      dispatch(getPrintfulproduct());
    } catch (error) {
      setisLoading(false);
      setisError(error);
      customAlert("Some thing wrong !", "error");
    }
  };

  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack /> Manage Accounts
    </h5>
  );

  if (loadind)
    return <span className={`spinner ${styles.main__loader__spinner}`}></span>;

  return (
    <div className={styles.page}>
      {/* <HeaderSettings title={title} />
      <div className={styles.platform__section}> */}
        {/* <div className={styles.platform__header}>
          <h5 className={styles.platform__title}>OpenSea - NFT</h5>
          <Link to="/" className={styles.add__new}>
            <IoIosAdd className={styles.icon} />
            Link New Account
          </Link>
        </div> */}
        {/* <div className={styles.platform__list}>
          {new Array(3).fill("").map((_, i) => (
            <PlatFormCard key={i} type="OpenSea" />
          ))}
        </div> */}
      {/* </div> */}
      <div className={styles.platform__section}>
        <div className={styles.platform__header}>
          <h5 className={styles.platform__title}>
            Printful Store - Print On Demand
          </h5>
          {!access_token && (
            <a
              href={`https://www.printful.com/oauth/authorize?client_id=${clientId}&redirect_url=https://localhost:3000//settings/manage-account`}
              target="_blank"
              className={styles.add__new}
              rel="noreferrer"
            >
              <IoIosAdd className={styles.icon} />
              Link New Account
            </a>
          )}
        </div>
        {error?.message && (
          <p className="error__msg">{error?.message || "ERROR"}</p>
        )}
        {error?.response?.data?.result && (
          <p className="error__msg">{error?.response.data.result || "ERROR"}</p>
        )}
        {loadind && <span className={`spinner`}></span>}
        {!products?.length && access_token ? <p>No Products yet!</p> : ""}
        {!access_token ? <p>You New A New Account !</p> : ""}
        {products?.length ? (
          <div className={styles.platform__list}>
            {new Array(3).fill("").map((_, i) => (
              <PlatFormCard key={i} type="Printful" />
            ))}
          </div>
        ) : (
          ""
        )}
        {access_token ? (
          <button
            style={{
              border: "2px solid #FFF",
              color: "#FFF",
              padding: "10px 24px",
              margin: "20px 0",
              borderRadius: "8px",
            }}
            onClick={() => addProductToPrintFul()}
            disabled={isLoading}
          >
            {isLoading ? <span className={`spinner`}></span> : "Add Product +"}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ManageAccount;
