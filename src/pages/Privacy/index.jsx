import React from "react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {
  conditonsList1,
  conditonsList2,
  conditonsList3,
  conditonsList4,
  conditonsList5,
  conditonsList6,
  conditonsList7,
  privacyBoxprags,
  privacyList8,
  privacyList9,
  privacyListFive,
  privacyListFour,
  privacyListOne,
  privacyListSeven,
  privacyListSix,
  privacyListThree,
  privacyListTwo,
} from "../../utils/data";
import HTMLString from "react-html-string";
import styles from "./.module.scss";

const Privacy = () => {
  const navigate = useNavigate();
  const [currentActive, setCurrentActive] = useState(null);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.back__btn} onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </button>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="logo" />
          Legal Information
        </Link>
      </header>
      <div className={styles.content}>
        <div className={styles.box}>
          <button
            className={styles.box__header}
            onClick={() =>
              currentActive !== 2 ? setCurrentActive(2) : setCurrentActive(null)
            }
          >
            Terms & Conditions{" "}
          </button>
          {currentActive === 2 && (
            <div className={styles.box__details}>
              <p className={styles.details__title}>
                Last updated March 23, 2023
              </p>
              <div className={styles.box__prags}>
                <p>
                  Welcome to Animade (
                  <a href="www.animade.world" target="_blank">
                    www.animade.world
                  </a>
                  ), an online platform that enables users to produce and upload
                  designs to non-fungible token (NFT) and Print-On-Demand
                  platforms for the purposes of buying, selling, and showcasing.
                  I am privileged to present to you this document which outlines
                  the terms and conditions ("T&Cs") that govern the use of our
                  platform.
                </p>
                <p>
                  Throughout these terms and conditions, the expressions "we,"
                  "us,", “the platform” and "our" refer to Animade, while "you"
                  and "user" denote individuals who utilise our platform. By
                  utilising our platform, you enter into a legally binding
                  agreement to comply with these T&Cs. It is crucial that you
                  carefully read and comprehend these terms before creating an
                  account with us. Should you find that you do not concur with
                  any of the conditions stipulated herein, we respectfully
                  request that you do not proceed with the use of our platform.
                </p>
                <p>
                  As a user of our platform, you have the obligation to provide
                  accurate information when creating an account, maintain the
                  security and confidentiality of your login credentials, and
                  promptly report any unauthorised use of your account. We
                  reserve the right to refuse service to any person, monitor
                  user activities on the platform, and collect and process data
                  concerning user access and use of the platform. Furthermore,
                  we reserve the right to impose a commission on your proceeds
                  in exchange for utilising our services. In the event of any
                  disputes with third-party providers, you, as a user, are
                  responsible for resolving them and indemnifying and holding
                  the platform harmless from any claims or damages.
                </p>
                <p>
                  We may display advertisements, use your data for marketing
                  purposes, and share your data with third-party providers.
                  However, you have the right to opt out of any marketing
                  communications from our platform at any time. Additionally,
                  you may request the deletion of your account and data, except
                  for data that is owned by the platform in accordance with this
                  document. Please note that we are not liable for any loss or
                  damage resulting from a data breach, and you assume full
                  responsibility for the security of your account and data.
                  Please review the full details of the terms and conditions
                  provided below.
                </p>
              </div>
              <div className={styles.list}>
                1. Account Creation and Use
                <ul>
                  {" "}
                  {conditonsList1.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <p>2. Pricing and Design Packages</p>
                <ul>
                  {" "}
                  {conditonsList2.map((li, i) => (
                    <li key={i}>{<HTMLString html={li} />}</li>
                  ))}
                </ul>
                <p>3. III. User Responsibilities</p>
                <ul>
                  {conditonsList3.map((li, i) => (
                    <li key={i}>{<HTMLString html={li} />}</li>
                  ))}
                </ul>
                <p>4. IV. Changes and Termination</p>
                <ul>
                  {conditonsList4.map((li, i) => (
                    <li key={i}>{<HTMLString html={li} />}</li>
                  ))}
                </ul>
                <p>5. Additional Terms</p>
                <ul>
                  {conditonsList5.map((li, i) => (
                    <li key={i}>{<HTMLString html={li} />}</li>
                  ))}
                </ul>
                <p>6. Disclaimers and Limitations of Liability</p>
                <ul>
                  {conditonsList6.map((li, i) => (
                    <li key={i}>{<HTMLString html={li} />}</li>
                  ))}
                </ul>
                <p>7. Governing Law and Jurisdiction</p>
                <ul>
                  {conditonsList7.map((li, i) => (
                    <li key={i}>{<HTMLString html={li} />}</li>
                  ))}
                </ul>
                <p>
                  In conclusion, the terms and conditions outlined above serve
                  as the legal agreement between Animade, the online platform
                  for design production and upload, and its users. By creating
                  an account on the platform, users agree to comply with the
                  provisions set forth in these T&Cs. It is vital for users to
                  read and comprehend these terms in full before proceeding with
                  the use of the platform. The provisions include account
                  creation and use, pricing and design packages, and the
                  platform's right to impose a commission on user earnings,
                  among others. Users are responsible for maintaining the
                  security of their account and data, and the platform shall not
                  be liable for any losses or damages resulting from a data
                  breach. Any disputes shall be resolved in accordance with the
                  governing law and jurisdiction specified in the agreement.
                </p>
                <p>
                  Please contact us via email:{" "}
                  <a href="animade.world@gmail.com" target="_blank">
                    animade.world@gmail.com
                  </a>
                  , or on the ‘contact us’ form on our website
                  <a href="www.animade.world" target="_blank">
                    www.animade.world
                  </a>
                  . if you have any questions or concerns, we hope to clear any
                  issues up.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.box}>
          <button
            className={styles.box__header}
            onClick={() =>
              currentActive !== 1 ? setCurrentActive(1) : setCurrentActive(null)
            }
          >
            Privacy Policy
          </button>
          {currentActive === 1 && (
            <div className={styles.box__details}>
              <p className={styles.details__title}>Last updated May 5, 2023</p>
              <div className={styles.box__prags}>
                {privacyBoxprags.map((p, i) => (
                  <p key={i}>
                    <HTMLString html={p} />
                  </p>
                ))}
              </div>
              <div className={styles.list}>
                <p>
                  1. The following definitions shall be applied throughout this
                  privacy policy:
                </p>
                <ul>
                  {privacyListOne.map((li, i) => (
                    <li key={i}>
                      {" "}
                      <HTMLString html={li} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.list}>
                <p>
                  2. Throughout this privacy policy, unless the context requires
                  otherwise:
                </p>
                <ul>
                  {privacyListTwo.map((li, i) => {
                    if (li.list) {
                      return (
                        <li key={i}>
                          {li.text}
                          <ul>
                            {li.list.map((liOfLi, index) => (
                              <li key={index}>{liOfLi}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    } else {
                      return <li key={i}>{li.text}</li>;
                    }
                  })}
                </ul>
                <p className={styles.details__title}>
                  Scope of this Privacy Policy
                </p>
                <p>
                  3. This Privacy Policy applies only to the actions of Animade
                  and Users with respect to this Website. It does not extend to
                  any websites that can be accessed from this Website including,
                  but not limited to, any links we may provide to social media
                  websites.
                </p>
                <p>
                  4. For purposes of the applicable Data Protection Laws,
                  Animade is the "data controller". This means that Animade
                  determines the purposes for which, and the manner in which,
                  your Data is processed.
                </p>
              </div>
              <div className={styles.list}>
                <p className={styles.details__title}>Data Collected</p>
                <p>
                  5. The following data may be collected, including personal
                  data, from you:
                </p>
                <ul>
                  {privacyListThree.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <p>
                  All of the data collected will be processed in accordance with
                  this privacy policy.
                </p>
              </div>
              <div className={styles.list}>
                <p className={styles.details__title}>How we Collect Data</p>
                <p>6. We collect data in the following ways:</p>
                <ul>
                  {privacyListFour.map((li, i) => {
                    if (li.list) {
                      return (
                        <li key={i}>
                          {li.text}
                          <ul>
                            {li.list.map((liOfLi, index) => (
                              <li key={index}>{liOfLi}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    } else {
                      return <li key={i}>{li.text}</li>;
                    }
                  })}
                </ul>
                <p>
                  We collect Data in accordance with this privacy policy and any
                  applicable laws and regulations.
                </p>
              </div>
              <div className={styles.list}>
                <p className={styles.details__title}>Our use of Data</p>
                <p>
                  7. Any or all of the above Data may be required by us from
                  time to time in order to provide you with the best possible
                  service and experience when using our Website. Specifically,
                  Data may be used by us for the following reasons:
                </p>
                <ul>
                  {privacyListFive.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <p> In each case, in accordance with this privacy policy.</p>
              </div>
              <div className={styles.list}>
                <p>
                  8. We may use your Data for the above purposes if we deem it
                  necessary to do so for our legitimate interests. If you are
                  not satisfied with this, you have the right to object in
                  certain circumstances (see the section headed "Your rights"
                  below).
                </p>
                <p>
                  9. For the delivery of direct marketing to you via e-mail,
                  we'll need your consent, whether via an opt-in or soft-opt-in:
                </p>
                <ul>
                  {privacyListSix.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <p>
                  10. When you register with us and set up an account to receive
                  our services, the legal basis for this processing is the
                  performance of a contract between you and us and/or taking
                  steps, at your request, to enter into such a contract.
                </p>
                <p>
                  11. We may use your Data to show you Animade adverts and other
                  content on other websites. If you do not want us to use your
                  data to show you Animade adverts and other content on other
                  websites, please turn off the relevant cookies (please refer
                  to the section headed "Cookies" below).
                </p>
              </div>
              <div className={styles.list}>
                <p className={styles.details__title}>Who we Share Data With</p>
                <p>
                  12. We may share your Data with the following groups of people
                  for the following reasons:
                </p>
                <ul>
                  {privacyListSeven.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <p>in each case, in accordance with this privacy policy.</p>
              </div>
              <div className={styles.list}>
                <p className={styles.details__title}>Keeping Data secure</p>
                <p>
                  13. We will use technical and organisational measures to
                  safeguard your Data, for example:
                </p>
                <ul>
                  {privacyList8.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <p>
                  14. Technical and organisational measures include measures to
                  deal with any suspected data breach. If you suspect any misuse
                  or loss or unauthorised access to your Data, please let us
                  know immediately by contacting us via this e-mail address:{" "}
                  <a href="animade.world@gmail.com" target="_blank">
                    animade.world@gmail.com
                  </a>
                  .
                </p>
                <p>
                  15. If you want detailed information from Get Safe Online on
                  how to protect your information and your computers and devices
                  against fraud, identity theft, viruses and many other online
                  problems, please visit www.getsafeonline.org. Get Safe Online
                  is supported by HM Government and leading businesses.
                </p>
                <p className={styles.details__title}>Data Retention</p>
                <p>
                  16. Unless a longer retention period is required or permitted
                  by law, we will only hold your Data on our systems for the
                  period necessary to fulfil the purposes outlined in this
                  privacy policy or until you request that the Data be deleted.
                </p>
                <p>
                  17. Even if we delete your Data, it may persist on backup or
                  archival media for legal, tax, billing or regulatory purposes.
                </p>
                <p className={styles.details__title}>Your Rights</p>
                <p>
                  18. You have the following rights in relation to your Data:
                </p>
                <ul>
                  {privacyList9.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <p>
                  19. To make enquiries, exercise any of your rights set out
                  above, or withdraw your consent to the processing of your Data
                  (where consent is our legal basis for processing your Data),
                  please contact us via this e-mail address:
                  animade.world@gmail.com.
                </p>
                <p>
                  If you are not satisfied with the way a complaint you make in
                  relation to your Data is handled by us, you may be able to
                  refer your complaint to the relevant data protection
                  authority. For the UK, this is the Information Commissioner's
                  Office (ICO). The ICO's contact details can be found on their
                  website at{" "}
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://ico.org.uk/
                  </a>
                  .
                </p>
                <p>
                  21. It is important that the Data we hold about you is
                  accurate and current. Please keep us informed if your Data
                  changes during the period for which we hold it
                </p>
                <p className={styles.details__title}>Links to Other Websites</p>
                <p>
                  22. This Website may, from time to time, provide links to
                  other websites. We have no control over such websites and are
                  not responsible for the content of these websites. This
                  privacy policy does not extend to your use of such websites.
                  You are advised to read the privacy policy or statement of
                  other websites prior to using them.
                </p>
                <p className={styles.details__title}>
                  Change of Buisness Ownership and Control
                </p>
                <p>
                  23. Animade may, from time to time, expand or reduce our
                  business and this may involve the sale and/or the transfer of
                  control of all or part of Animade. Data provided by Users
                  will, where it is relevant to any part of our business so
                  transferred, be transferred along with that part and the new
                  owner or newly controlling party will, under the terms of this
                  privacy policy, be permitted to use the Data for the purposes
                  for which it was originally supplied to us.
                </p>
                <p>
                  24. We may also disclose Data to a prospective purchaser of
                  our business or any part of it.
                </p>
                <p>
                  25. In the above instances, we will take steps with the aim of
                  ensuring your privacy is protected.
                </p>
                <p className={styles.details__title}>Cookies</p>
                <p>
                  26. This Website may place and access certain Cookies on your
                  computer. Animade uses Cookies to improve your experience of
                  using the Website and to improve our range of services.
                  Animade has carefully chosen these Cookies and has taken steps
                  to ensure that your privacy is protected and respected at all
                  times.
                </p>
                <p>
                  27. All Cookies used by this Website are used in accordance
                  with current UK and EU Cookie Law
                </p>
                <p>
                  {" "}
                  28. Before the Website places Cookies on your computer, you
                  will be presented with a message bar requesting your consent
                  to set those Cookies. By giving your consent to the placing of
                  Cookies, you are enabling Animade to provide a better
                  experience and service to you. You may, if you wish, deny
                  consent to the placing of Cookies; however certain features of
                  the Website may not function fully or as intended.
                </p>
                <p>29. This Website may place the following Cookies:</p>
                <table
                  className={styles.tabel}
                  border={"1px solid #FFF"}
                  borderColor="#FFF"
                >
                  <tr>
                    <th>Type of Cookie </th>
                    <th>Purpose</th>
                  </tr>
                  <tr>
                    <td>Strictly necessary cookies</td>
                    <td>
                      These are cookies that are required for the operation of
                      our website. They include, for example, cookies that
                      enable you to log into secure areas of our website, use a
                      shopping cart or make use of e-billing services.
                    </td>
                  </tr>
                  <tr>
                    <td>Analytical/performance cookies</td>
                    <td>
                      They allow us to recognise and count the number of
                      visitors and to see how visitors move around our website
                      when they are using it. This helps us to improve the way
                      our website works, for example, by ensuring that users are
                      finding what they are looking for easily.
                    </td>
                  </tr>
                  <tr>
                    <td>Functionality cookies</td>
                    <td>
                      These are used to recognise you when you return to our
                      website. This enables us to personalise our content for
                      you, greet you by name and remember your preferences (for
                      example, your choice of language or region). By using the
                      Website, you agree to our placement of functionality
                      cookie.
                    </td>
                  </tr>
                  <tr>
                    <td>Targeting cookies</td>
                    <td>
                      These cookies record your visit to our website, the pages
                      you have visited and the links you have followed. We will
                      use this information to make our website and the
                      advertising displayed on it more relevant to your
                      interests. We may also share this information with third
                      parties for this purpose
                    </td>
                  </tr>
                </table>
                <p>
                  30. You can choose to enable or disable Cookies in your
                  internet browser. By default, most internet browsers accept
                  Cookies but this can be changed. For further details, please
                  see the help menu in your internet browser. You can switch off
                  Cookies at any time, however, you may lose any information
                  that enables you to access the Website more quickly and
                  efficiently.
                </p>
                <p>
                  31. You can choose to delete Cookies at any time; however, you
                  may lose any information that enables you to access the
                  Website more quickly and efficiently including, but not
                  limited to, personalisation settings
                </p>
                <p>
                  32. It is recommended that you ensure that your internet
                  browser is up-to-date and that you consult the help and
                  guidance provided by the developer of your internet browser if
                  you are unsure about adjusting your privacy settings.
                </p>
                <p>
                  33. For more information generally on cookies, including how
                  to disable them, please refer to{" "}
                  <a href="www.aboutcookies.org" target="_blank">
                    www.aboutcookies.org
                  </a>
                  . You will also find details on how to delete cookies from
                  your computer.
                </p>
                <p>
                  Below is a list of the cookies that we use. We have tried to
                  ensure this is complete and up to date, but if you think that
                  we have missed a cookie or there is any discrepancy, please
                  let us know.
                </p>
                <p>34. We use the following strictly necessary cookies:</p>
                <table
                  className={styles.tabel}
                  border={"1px solid #FFF"}
                  borderColor="#FFF"
                >
                  <tr>
                    <th>Description</th>
                    <th>Purpose</th>
                  </tr>
                  <tr>
                    <td>Session cookies</td>
                    <td>
                      These cookies are used to maintain a user's session on the
                      website, allowing them to remain logged in and navigate
                    </td>
                  </tr>
                  <tr>
                    <td>Load balancing cookies</td>
                    <td>
                      through different pages without needing to re-enter their
                      login credentials.
                    </td>
                  </tr>
                  <tr>
                    <td>Security cookies</td>
                    <td>
                      These cookies are used to distribute traffic across
                      multiple servers to ensure the website remains available
                      and responsive.
                    </td>
                  </tr>
                  <tr>
                    <td>Image generation cookies</td>
                    <td>
                      These cookies are used to distribute traffic across
                      multiple servers to ensure the website remains available
                      and responsive.
                    </td>
                  </tr>
                  <tr>
                    <td>Language preference cookies</td>
                    <td>
                      These cookies are used to protect the website and its
                      users from malicious activities, such as hacking, fraud,
                      or other security threats
                    </td>
                  </tr>
                  <tr>
                    <td>Template information cookies</td>
                    <td>
                      These cookies are used to protect the website and its
                      users from malicious activities, such as hacking, fraud,
                      or other security threats
                    </td>
                  </tr>
                  <tr>
                    <td>Financial Tracking cookies</td>
                    <td>
                      These cookies are used to store images that a user has
                      generated on the platform, ensuring that their selections
                      are retained as they navigate through different pages or
                      complete the product upload process.
                    </td>
                  </tr>
                  <tr>
                    <td>Authentication cookies</td>
                    <td>
                      These cookies are used to remember a user's language
                      preferences, ensuring that they are shown content in their
                      preferred language
                    </td>
                  </tr>
                  <tr>
                    <td>Form submission cookies</td>
                    <td>
                      To store Printful templates so the user can upload new
                      designs on that product
                    </td>
                  </tr>
                  <tr>
                    <td>Error reporting cookies</td>
                    <td>
                      Collect and store Opensea and Printful information to
                      provice financial tracking and billing features
                    </td>
                  </tr>
                  <tr>
                    <td>Site preference cookies</td>
                    <td>
                      These cookies verify the user's identity and ensure that
                      they are authorized to access certain parts of the website
                    </td>
                  </tr>
                  <tr>
                    <td>Time zone cookies</td>
                    <td>
                      hese cookies remember information that the user has
                      entered into a form, ensuring that it is not lost if the
                      user navigates away from the page
                    </td>
                  </tr>
                </table>
                <p>35. We use the following functionality cookies:</p>
                <table
                  className={styles.tabel}
                  border={"1px solid #FFF"}
                  borderColor="#FFF"
                >
                  <tr>
                    <th>Description</th>
                    <th>Purpose</th>
                  </tr>
                  <tr>
                    <td>Saved metadata cookie</td>
                    <td>
                      Allows users to save Printful templates, and Opensea
                      upload metadata to use in future product uploads
                    </td>
                  </tr>
                  <tr>
                    <td>Session ID cookie</td>
                    <td>
                      Identifies a user's current session on the website to
                      allow for continuous browsing and functionality
                    </td>
                  </tr>
                  <tr>
                    <td>Language preference cookie</td>
                    <td>
                      Stores the language preference of the user to display the
                      website in the preferred language.
                    </td>
                  </tr>
                  <tr>
                    <td>Financial Tracking cookie</td>
                    <td>
                      to track Printful and Opensea data to ensure up-to-date
                      financial tracking and billing features
                    </td>
                  </tr>
                  <tr>
                    <td>Analytics cookie</td>
                    <td>
                      We use this cookie to identify your computer and analyse
                      traffic patterns on our website
                    </td>
                  </tr>
                </table>
                <p>36. We use the following analytical/performance cookies:</p>
                <table
                  className={styles.tabel}
                  border={"1px solid #FFF"}
                  borderColor="#FFF"
                >
                  <tr>
                    <th>Description</th>
                    <th>Purpose</th>
                  </tr>
                  <tr>
                    <td>Google Analytics</td>
                    <td>
                      This cookie tracks user behavior on the website and
                      provides insights into how users interact with the site,
                      which pages they visit, and how long they stay on each
                      page
                    </td>
                  </tr>
                  <tr>
                    <td>Performance Cookies</td>
                    <td>
                      To provide crash reports and report performance
                      information such as error codes to developers to reduce
                      website down time
                    </td>
                  </tr>
                </table>
                <p>37. We use the following targeting cookies:</p>
                <table
                  className={styles.tabel}
                  border={"1px solid #FFF"}
                  borderColor="#FFF"
                >
                  <tr>
                    <th>Description</th>
                    <th>Purpose</th>
                  </tr>
                  <tr>
                    <td>Google Analytics</td>
                    <td>
                      We use this cookie to enable us to show you adverts while
                      you are browsing our website and other websites on the
                      internet
                    </td>
                  </tr>
                </table>
                <p className={styles.details__title}>General</p>
                <p>
                  38. You may not transfer any of your rights under this privacy
                  policy to any other person. We may transfer our rights under
                  this privacy policy where we reasonably believe your rights
                  will not be affected.
                </p>
                <p>
                  39. If any court or competent authority finds that any
                  provision of this privacy policy (or part of any provision) is
                  invalid, illegal or unenforceable, that provision or
                  part-provision will, to the extent required, be deemed to be
                  deleted, and the validity and enforceability of the other
                  provisions of this privacy policy will not be affected.
                </p>
                <p>
                  40. Unless otherwise agreed, no delay, act or omission by a
                  party in exercising any right or remedy will be deemed a
                  waiver of that, or any other, right or remedy
                </p>
                <p>
                  41. This Agreement will be governed by and interpreted
                  according to the law of England and Wales. All disputes
                  arising under the Agreement will be subject to the exclusive
                  jurisdiction of the English and Welsh courts.
                </p>
                <p className={styles.details__title}>
                  Changes to this Privacy Policy
                </p>
                <p>
                  42. Animade reserves the right to change this privacy policy
                  as we may deem necessary from time to time or as may be
                  required by law. Any changes will be immediately posted on the
                  Website and you are deemed to have accepted the terms of the
                  privacy policy on your first use of the Website following the
                  alterations. You may contact Animade by email at{" "}
                  <a href="animade.world@gmail.com" target="_blank">
                    animade.world@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
