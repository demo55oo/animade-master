import {
  ChangePassIcon,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon8,
  Icon80,
  LegalIcon,
  ManageIcon,
  PaymentIcon,
} from "../icons";

export const WorksData = [
  {
    id: 1,
    icon: <Icon1 />,
    text: `<span>Create stunning images</span> using our AI Image generator & <span>select</span> the <span>designs</span> you like.`,
  },
  {
    id: 2,
    icon: <Icon2 />,
    text: `Mint the designs as <span>NFTs</span> on <span>OpenSea</span> OR select a product for your <span>store</span> on <span>PrintFul</span>.`,
  },
  {
    id: 3,
    icon: <Icon3 />,
    text: `Provide product information with help from an <span>AI assistant</span>.`,
  },
  {
    id: 4,
    icon: <Icon4 />,
    text: `<span>Organise</span> the NFT or product in a <span>Drop to upload </span> directly to <span>your platform</span>.`,
  },
  {
    id: 5,
    icon: <Icon5 />,
    text: `Use our <span>product finance manager</span> to <span>track your earnings</span>.`,
  },
];

export const Offers = [
  {
    title: "NFTs",
    text: [
      "We handle NFT creation, collections and drops, putting the <span>power of AI-created NFTs in your hands.</span>",
      "We take payments daily as a percentage of sales - so you <span>pay us as you earn.</span>",
    ],
    percentage: [
      {
        num: 3,
        text: "Of Initial NFT Sale",
      },
      {
        num: 1,
        text: "Of NFT Royalty",
      },
    ],
  },
  {
    title: "Print & Merch",
    text: [
      "We handle image creation and uploads to Printful, <span>bringing the power of AI to your store.</span>",
      "We take payments daily as a percentage of sales - so you <span>pay us as you earn.</span>",
    ],
    percentage: [
      {
        num: 3,
        text: "Of Sales",
      },
    ],
  },
];

export const SidebarLinks = [
  {
    label: "Create",
    icon: <Icon8/>,
    link: "/single-input",
  },
  // {
  //   label: "Upload",
  //   icon: <Icon8 />,
  //   link: "/upload-products",
  // },
  // {
  //   label: "Track",
  //   icon: <Icon8 />,
  // },
  {
    label: "Options",
    icon: <Icon80 />,
    link: "/settings",
  },
];

export const privacyBoxprags = [
  `This privacy policy shall govern the relationship between the User of this Website and Animade,
the proprietor and provider of this Website. Animade is committed to upholding the privacy of
your information and this policy shall apply to any and all Data collected by us or provided by
you, in relation to your use of the Website.
`,
  `It is important to note that this privacy policy should be read in conjunction with our Terms and
Conditions, which can be accessed at <a href='https://animade.world/legal' target="_blank">https://animade.world/legal</a>.
`,
  // ============================
];

export const privacyListOne = [
  `Data" collectively refers to all information submitted to Animade via the Website.
This definition includes, where applicable, definitions provided in the Data
Protection Laws`,
  `"Cookies" refer to a small text file placed on your computer by this Website when
you visit certain parts of the Website and/or when you use certain features of the
Website. The details of cookies used by this Website are specified in the clause`,
  ` "Data Protection Laws" are defined as any applicable laws that relate to the
processing of personal Data, including but not limited to the GDPR, and any
national implementing and supplementary laws, regulations and secondary
legislation`,
  `"GDPR" refers to the UK General Data Protection Regulation`,
  `Animade", "we" or "us" refers to Animade, located at Winchmore, Chalk Lane,
Surrey, kT24 6TH`,
  `"UK and EU Cookie Law" refers to the Privacy and Electronic Communications
(EC Directive) Regulations 2003 as amended by the Privacy and Electronic
Communications (EC Directive) (Amendment) Regulations 2011 & the Privacy
and Electronic Communications (EC Directive) (Amendment) Regulations 2018`,
  `"User" or "you" refers to any third party who accesses the Website and is not
either (i) employed by Animade and acting in the course of their employment or
(ii) engaged as a consultant or otherwise providing services to Animade and
accessing the Website in connection with the provision of such services`,
  `"Website" refers to the website that you are currently using,
<a href="https://www.animade.world" target="_blank">https://www.animade.world</a>, and any sub-domains of this site unless expressly
excluded by their own terms and conditions`,
];

export const privacyListTwo = [
  {
    text: `The singular shall include the plural and vice versa`,
  },
  {
    text: `References to sub-clauses, clauses, schedules, or appendices are to
    sub-clauses, clauses, schedules, or appendices of this privacy policy`,
    list: [
      `A reference to a person includes firms, companies, government entities,
      trusts and partnerships`,
    ],
  },
  {
    text: `"including" shall be understood to mean "including without limitation"`,
  },
  {
    text: `Reference to any statutory provision includes any modification or amendment of it`,
  },
  {
    text: `The headings and sub-headings do not form part of this privacy policy`,
  },
];

export const privacyListThree = [
  `Name`,
  `Date of birth`,
  `Contact information such as email addresses and telephone numbers`,
  `Financial information such as credit/debit card numbers`,
  `IP address (automatically collected)`,
  `Web browser type and version (automatically collected)`,
  `Operating system (automatically collected)`,
  `A list of URLs starting with a referring site, your activity on this Website, and the
  site you exit to (automatically collected)`,
  `Printful store information: To create and upload Printful products on the user's
  behalf, and for billing the user as a percentage of revenue, including but not
  limited to; sales and revenue information, refund information, and changes in
  prices`,
  `Opensea information: To upload NFTs on the user's behalf, and for billing the
  user as a percentage of revenue, including but not limited to; sales and revenue
  information, refund information, and changes in prices, changes to collections,
  information for all active NFTs`,
  `Metadata required to upload products to Printful: We use this data to provide
  accurate metadata for your Printful products including; Titles, descriptions, SEO
  tags, the desired product sections (on your printful store), pricing information with
  desired revenue`,
  `Metadata required to upload products to Opensea: We use this data to provide
  accurate metadata for your Opensea products including; Titles, descriptions,
  SEO tags, the desired collection, pricing information with the desired revenue,
  blockchain information, unlockable content, supply, and prices
  `,
];

export const privacyListFour = [
  {
    text: ` Data is given to us by you: We collect Data when you provide it to us directly, for
    example:`,
    list: [
      `when you contact us through the Website, by telephone, post, e-mail or
      through any other means`,
      `when you register with us and set up an account to receive our
      products/services`,
      `when you complete surveys that we use for research purposes (although
      you are not obliged to respond to them)`,
      `when you enter a competition or promotion through a social media
      channel`,
      `when you make payments to us, through this Website or otherwise`,
      `when you elect to receive marketing communications from us`,
      `when you use our services`,
    ],
  },
  {
    text: `Data is received from other sources: We may receive Data about you from other
    sources, such as third-party service providers, business partners, or publicly
    available sources. For instance:`,
    list: [
      `Social Media - We may obtain your contact information from a social
      media platform if you choose to connect with us on that platform.
      `,
      `Google Analytics & Adverts - We may use google analytics to track and
      advertise our products to you
      `,
    ],
  },
  {
    text: `Data is collected automatically: We also collect Data automatically through your
      use of our Website. This information may include your IP address, web browser
      type and version, operating system, and other technical information. We may
      also collect information about your activity on our Website, such as the pages
      you visit, the time and date of your visit, and the referring website. Additionally`,
    list: [
      `We automatically collect some information about your visit to the Website.
      This information helps us to make improvements to Website content and
      navigation, and includes your IP address, the date, times and frequency
      with which you access the Website and the way you use and interact with
      its content.`,
      `We will collect your Data automatically via cookies, in line with the cookie
      settings on your browser. For more information about cookies, and how
      we use them on the Website, see the section below, headed "Cookies".`,
    ],
  },
];

export const privacyListFive = [
  `internal record keeping`,
  `improvement of our products / services`,
  `transmission by email of marketing materials that may be of interest to you`,
  `contact for market research purposes which may be done using email`,
  `telephone, fax or mail. Such information may be used to customise or update the
  Website`,
  `uploading products and NFTs to Printful and Opensea respectively, to determine
  the billing amount, and in an attempt to investigate any violations of the law or
  our Terms and Conditions`,
];

export const privacyListSix = [
  `soft opt-in consent is a specific type of consent which applies when you have
  previously engaged with us (for example, you contact us to ask us for more
  details about a particular product/service, and we are marketing similar
  products/services). Under "soft opt-in" consent, we will take your consent as
  given unless you opt-out`,
  `for other types of e-marketing, we are required to obtain your explicit consent;
  that is, you need to take positive and affirmative action when consenting by, for
  example, checking a tick box that we'll provide.`,
  `if you are not satisfied with our approach to marketing, you have the right to
  withdraw consent at any time. To find out how to withdraw your consent, see the
  section headed "Your rights" below.`,
];

export const privacyListSeven = [
  `any of our group companies or affiliates - to improve our services, and to ensure
  the proper administration of our website and business. Specifically, all
  businesses affiliated with the Fort Technologies group`,
  `our employees, agents and/or professional advisors - to provide customer
  support, to comply with legal obligations, and to improve our services`,
  `third party service providers who provide services to us which require the
  processing of personal data - to provide integrated services for AI image
  generation, AI text generation, uploading images and metadata to Printful and
  Opensea, payment providers, and Google customer analytics, which ensure the
  website runs smoothly and allows us to track customer journeys`,
  `third party payment providers who process payments made over the Website - to
  enable the process of payments and refunds`,
  `e. relevant authorities - to facilitate the detection of crime or the collection of taxes
  or duties`,
];

export const privacyList8 = [
  `access to your account is controlled by a password and a user name that is
  unique to you.
  `,
  `we store your Data on secure servers.`,
  `payment details are encrypted using SSL technology (typically you will see a lock
  icon or green address bar (or both) in your browser when we use this technology.`,
];

export const privacyList9 = [
  `Right to access - the right to request (i) copies of the information we hold about
    you at any time, or (ii) that we modify, update or delete such information. If we
    provide you with access to the information we hold about you, we will not charge
    you for this, unless your request is "manifestly unfounded or excessive." Where
    we are legally permitted to do so, we may refuse your request. If we refuse your
    request, we will tell you the reasons why`,
  `Right to correct - the right to have your Data rectified if it is inaccurate or
    incomplete.`,
  `Right to erase - the right to request that we delete or remove your Data from our
    systems.
    `,
  `Right to restrict our use of your Data - the right to "block" us from using your
    Data or limit the way in which we can use it.`,
  `Right to data portability - the right to request that we move, copy or transfer
    your Data`,
  `Right to object - the right to object to our use of your Data including where we
    use it for our legitimate interests.
    `,
];

export const conditonsList1 = [
  `When creating an account, it is the user's obligation to provide precise and
  up-to-date information. The failure to do so may result in the termination of the
  account`,
  `The platform reserves the right to request further information from the user to
  verify their identity, and may do so at any time. Such verification may include the
  use of a third-party service provider`,
  `The platform reserves the right to decline service to any person for any reason,
  including without limitation, if the platform believes that the user's conduct
  violates the terms and conditions of the platform or is illegal.`,
  `The platform may suspend or terminate a user's account without prior notice or
  explanation, including without limitation, if the user violates the terms and
  conditions of the platform or engages in any activity that the platform deems
  harmful to its operations.
  `,
  `The user is solely accountable for all activities undertaken using their account.
  Any unauthorized use of the user's account must be reported to the platform
  immediately`,
  `The user must keep their login credentials confidential and secure. The user may
  not disclose their login credentials to any third-party, and the platform will not be
  liable for any damages or losses resulting from the user's failure to comply with
  this requirement.`,
  `The platform may monitor the user's activities on the platform for security
  purposes. The platform may collect and process data regarding the user's access
  and use of the platform, including without limitation, the user's IP address,
  location, and usage data. The user consents to such monitoring and data
  processing by using the platform`,
];

export const conditonsList2 = [
  `The platform reserves the right to impose a commission on the user's proceeds
in exchange for using its services. This commission consists of a sum equivalent
to 3% of the NFT's initial sale, 1% of NFT royalty, and 3% of print-on-demand
sales, along with a further 3% of earnings from all additional sources that utilize
the designs generated by the platform, or from sources that use an altered
rendition of the said designs. <br />
= To further expound, the platform shall retain 3% of the original sales value
of an NFT, which is a unique cryptographic asset that represents
ownership of a digital asset or other form of property, during its initial sale
on the platform. Additionally, for any royalties paid out to the user
following the initial sale, the platform shall retain 1% of the said amount as
commission. For print-on-demand sales of designs created using the
platform, the platform shall retain 3% of the sales value
<br />
= It is important to note that any additional sources of income generated
from designs produced using the platform, or edited versions of the same,
shall also be subject to a commission of 3%.
<br />
= In the event of a dispute, the governing law and jurisdiction specified in
Section VII of this agreement shall be used to resolve the issue.
`,
  `Users shall be provided with 50 free designs per month. If the user exceeds this
limit, they may purchase additional designs through variously priced packages for
a monthly fee. Additional designs may solely be procured on a monthly basis and
are not transferrable to the following month`,
  `If the user terminates their package, any unused design credits shall remain
credited to their account for the remainder of the month, and they shall not be
charged for the following month's package.`,
  `If the user endeavors to evade payment, the platform retains the right to
terminate their account. In such cases, the platform may seize the commercial
rights to the images, as well as all income from linked monetization platforms.
`,
  `To assist users in monitoring their earnings adjusted for the platform's small fees,
financial tracking services are accessible on the platform.
`,
  `Users are obligated to pay for their selected package of design credits in full
before being able to create designs on the platform. Payment must be made
through the payment methods accepted by the platform. The platform reserves
the right to alter possible payment methods at any time, and the user must be
willing to pay using this new payment method, else, they may face termination
from the platform.
`,
  `Users are able to purchase design credits on a monthly basis to create designs
on the platform. Any unused design credits from the current month will remain
credited to the user's account for that month, and they will not be credited or
charged for next month's packages. Additional designs can only be bought
monthly, and they do not roll-over to the next month, so the subscribed designs
must be used within the month the user purchased the credits until the same day
of the next month.`,
  `Unless with written consent from the provider, only one account per user is
permitted, and any effort to contravene by creating additional accounts may
result in termination.
`,
];

export const conditonsList3 = [
  `The user must indemnify and hold the platform harmless from any claims or
damages arising from their use of the platform. This includes but is not limited to
any third-party claims or damages.`,
  `The platform provides no guarantees as to the quality or accuracy of the designs
created on the platform.
`,
  `The platform is not responsible for any disputes that may arise between the user
and third-party providers. It is the user's responsibility to resolve any such
disputes.`,
  `The platform does not endorse any third-party products or services`,
  `The platform reserves the right to display advertisements on the platform.`,
  `The platform may use the user's data for marketing purposes.`,
  `The user has the right to opt out of any marketing communications from the
platform at any time.`,
  `The platform may share the user's data with third-party providers in order to
provide the service`,
  `The platform may use third-party services for data storage and processing.`,
  `The platform may transfer the user's data to a third-party if the platform is
acquired by another company.`,
  `The user may request the deletion of their account and data at any time, except
any data that is owned by the platform according to this document, such as the
designs.`,
  `The platform is not liable for any loss or damage resulting from a data breach.`,
  `The user assumes full responsibility for any such loss or damage.`,
  `The user must comply with all applicable laws and regulations when using the
platform.`,
  `The platform may cooperate with law enforcement in the event of a criminal
investigation.`,
  `The platform may disclose the user's data if required by law or court order`,
  `The user is responsible for using OpenAIs and Stable Diffusions software and
agrees not to violate their terms of service by using our service`,
  `The platform owns the commercial rights to all images created on its platform.`,
  `Users may lease commercial rights to designs on monetizable and
non-monetizable channels, provided they continue to pay the commission fee as
a percentage of revenues created by the designs created on the platform.
`,
];

export const conditonsList4 = [
  `The platform, being the owner of this website and its related services, hereby
asserts its right to modify its terms and conditions and privacy policy at its
discretion and without prior notice to users. In accepting the terms and conditions
of this website, users acknowledge and agree that they are bound by any
modifications made by the platform and its related entities, and shall be deemed
to have accepted the new terms by continuing to use the platform.
`,
  `The platform, in its sole discretion, may terminate a user's account for any
reason, without notice or liability to the user. Upon termination of a user's
account, the platform shall immediately revoke the commercial rights to the
images created by the user, as well as any revenue generated from such images,
without compensation to the user`,
  `Termination will deny the user the right to use the platform on the terminated
account, or any other account created by the terminated user, indefinitely.`,
  `In the event that a user attempts to avoid paying charges for their use of the
platform, the platform may terminate their account and reclaim the commercial
rights to the images, as well as all income from monetization platforms from the
point of reclamation onwards. The user must keep the products produced with
the designs listed on their website and store. Failure to do so will result in a claim
of the expected revenue for all products with those designs, which will be no
lower than the current revenue of those products with designs created by the
platform.
`,
];

export const conditonsList5 = [
  `The platform reserves the right to update or modify the terms and conditions at
any time without notice. Any changes to the terms and conditions will take effect
immediately upon posting on the platform. By continuing to use the platform,
users agree to be bound by the modified terms and conditions.
`,
  `The user agrees to review the terms and conditions regularly to ensure
compliance with the latest updates and modifications.`,
  `The platform may require the user to agree to additional terms and conditions for
certain features or services offered by the platform. These additional terms and
conditions will be presented to the user prior to using the relevant feature or
service.
`,
  `The user may not sublicense or transfer their rights to use the platform to any
third party without the prior written consent of the platform.
`,
  `The user may not use the platform to compete with the platform. Any attempt to
do so may result in immediate termination of the user's account`,
  `The platform reserves the right to terminate a user's account if the user engages
in unfair competition, which includes any activity that aims to unfairly compete
with the platform, such as using the platform to create designs that mimic or
closely resemble the designs created by the platform.
`,
  `The platform may use feedback provided by the user for product improvement
purposes, including but not limited to developing new features, improving existing
features, and enhancing the overall user experience.`,
  `The platform may offer beta features or services that are still under development
and may be subject to additional terms and conditions. These beta features or
services may be withdrawn at any time without notice.
`,
  `The platform may limit or suspend the user's access to the platform for
maintenance or upgrades, which may result in temporary unavailability of the
platform or certain features or services. The platform will endeavor to provide
users with advance notice of any scheduled maintenance or upgrades that may
affect their access to the platform.`,
  `The platform reserves the right to modify, suspend, or terminate the platform at
any time without notice. The platform will make reasonable efforts to provide
users with advance notice of any such modification, suspension, or termination,
and will endeavor to provide users with a reasonable transition period to retrieve
any data or designs created on the platform before termination`,
];

export const conditonsList6 = [
  `The platform is provided on an "as is" and "as available" basis without any
warranties or representations, express or implied. Therefore, the platform shall
not be held liable for any legal or financial repercussions arising from any use or
misuse of the platform`,
  `The platform does not accept any responsibility for any direct, indirect, incidental,
consequential, or punitive damages arising from the use or inability to use the
platform. This includes, but is not limited to, any loss of data or revenue resulting
from the use or inability to use the platform`,
  ` The platform is not liable for any damages resulting from the actions of third-party
providers. Furthermore, the platform assumes no responsibility for any errors or
omissions in the information provided on the platform.
`,
  `The user agrees that the platform's total liability for any claims arising from the
use of the platform will not exceed the amount paid by the user to the platform for
their monthly subscription (for additional designs) in the previous 4 months. The
user further agrees to indemnify and hold the platform harmless against any and
all claims or damages arising from any violation of these terms and conditions by
the user`,
];

export const conditonsList7 = [
  ` The terms and conditions are governed by and construed in accordance with the
laws of the jurisdiction where the platform is registered, which is the United
Kingdom.
<br />
{"   "} In accordance with this clause, the terms and conditions for the use of the
platform are to be regulated by and interpreted in compliance with the
laws of the jurisdiction where the platform is registered, which is the
United Kingdom
`,
  `Any disputes arising from the use of the platform will be resolved by the courts of
the jurisdiction where the platform is registered.
`,
  `Any financial claims for funds due to termination or otherwise can be pursued
through legal means in the user's country, but any dispute regarding such claims
must be resolved in London, United Kingdom, as the governing law of the United
Kingdom shall apply to the resolution of such disputes.`,
  `It is further established that any claims for financial compensation resulting from
termination or any other cause can be pursued by legal means in the user's
country. However, in the case of any dispute concerning such claims, the
jurisdiction of London, United Kingdom shall apply, as the governing law of the
United Kingdom shall govern the resolution of such disputes.
`,
];

export const settingsLinks = [
  {
    label: "Payment & Billing",
    to: "payment",
    icon: <PaymentIcon />,
  },
  {
    label: "Manage Accounts",
    to: "manage-account",
    icon: <ManageIcon />,
  },
  {
    label: "Change Password",
    to: "change-password",
    icon: <ChangePassIcon />,
  },
  {
    label: "Legal",
    to: "privacy",
    icon: <LegalIcon />,
  },
];

export const plans = [
  // {
  //   title: "Free",
  //   subtitle: "Free plan enjoy them",
  //   designs: 30,
  //   // extra: 50,
  //   price: "free",
  //   free: true,
  // },
  {
    title: "Basic",
    subtitle: "Take your business off the ground",
    designs: 100,
    extra: 50,

    price: 4.99,
    href: "https://buy.stripe.com/test_6oE9AA2bEaJ02LC8wB",
  },
  {
    title: "Accelerate",
    subtitle: "Reach new heights",
    designs: 850,
    extra: 250,
    price: 19.99,
    href: "https://buy.stripe.com/test_28o000bMeeZgdqg3ci",
  },
  {
    title: "Turbocharge",
    subtitle: "Some serious power",
    designs: 3050,
    extra: 850,

    price: 39.99,
    href: "https://buy.stripe.com/test_dR6cMM9E62cu9a07sz",
  },
  {
    title: "Professional",
    subtitle: "Unlimited potential",
    designs: "unlimited",
    extra: "unlimited",
    price: 84.99,
    Professional: true,
    href: "https://buy.stripe.com/test_cN2dQQ9E62cu1Hy8wE",
  },
];
export const countriesCodes = [
  {
    name: "United States",
    dial_code: "+1",
    code: "US",
  },
  {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB",
  },
  {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF",
  },
  {
    name: "Aland Islands",
    dial_code: "+358",
    code: "AX",
  },
  {
    name: "Albania",
    dial_code: "+355",
    code: "AL",
  },
  {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ",
  },
  {
    name: "AmericanSamoa",
    dial_code: "+1684",
    code: "AS",
  },
  {
    name: "Andorra",
    dial_code: "+376",
    code: "AD",
  },
  {
    name: "Angola",
    dial_code: "+244",
    code: "AO",
  },
  {
    name: "Anguilla",
    dial_code: "+1264",
    code: "AI",
  },
  {
    name: "Antarctica",
    dial_code: "+672",
    code: "AQ",
  },
  {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG",
  },
  {
    name: "Argentina",
    dial_code: "+54",
    code: "AR",
  },
  {
    name: "Armenia",
    dial_code: "+374",
    code: "AM",
  },
  {
    name: "Aruba",
    dial_code: "+297",
    code: "AW",
  },
  {
    name: "Australia",
    dial_code: "+61",
    code: "AU",
  },
  {
    name: "Austria",
    dial_code: "+43",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ",
  },
  {
    name: "Bahamas",
    dial_code: "+1242",
    code: "BS",
  },
  {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH",
  },
  {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD",
  },
  {
    name: "Barbados",
    dial_code: "+1246",
    code: "BB",
  },
  {
    name: "Belarus",
    dial_code: "+375",
    code: "BY",
  },
  {
    name: "Belgium",
    dial_code: "+32",
    code: "BE",
  },
  {
    name: "Belize",
    dial_code: "+501",
    code: "BZ",
  },
  {
    name: "Benin",
    dial_code: "+229",
    code: "BJ",
  },
  {
    name: "Bermuda",
    dial_code: "+1441",
    code: "BM",
  },
  {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT",
  },
  {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA",
  },
  {
    name: "Botswana",
    dial_code: "+267",
    code: "BW",
  },
  {
    name: "Brazil",
    dial_code: "+55",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO",
  },
  {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN",
  },
  {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF",
  },
  {
    name: "Burundi",
    dial_code: "+257",
    code: "BI",
  },
  {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH",
  },
  {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM",
  },
  {
    name: "Canada",
    dial_code: "+1",
    code: "CA",
  },
  {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY",
  },
  {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF",
  },
  {
    name: "Chad",
    dial_code: "+235",
    code: "TD",
  },
  {
    name: "Chile",
    dial_code: "+56",
    code: "CL",
  },
  {
    name: "China",
    dial_code: "+86",
    code: "CN",
  },
  {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC",
  },
  {
    name: "Colombia",
    dial_code: "+57",
    code: "CO",
  },
  {
    name: "Comoros",
    dial_code: "+269",
    code: "KM",
  },
  {
    name: "Congo",
    dial_code: "+242",
    code: "CG",
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243",
    code: "CD",
  },
  {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK",
  },
  {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR",
  },
  {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI",
  },
  {
    name: "Croatia",
    dial_code: "+385",
    code: "HR",
  },
  {
    name: "Cuba",
    dial_code: "+53",
    code: "CU",
  },
  {
    name: "Cyprus",
    dial_code: "+357",
    code: "CY",
  },
  {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ",
  },
  {
    name: "Denmark",
    dial_code: "+45",
    code: "DK",
  },
  {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ",
  },
  {
    name: "Dominica",
    dial_code: "+1767",
    code: "DM",
  },
  {
    name: "Dominican Republic",
    dial_code: "+1849",
    code: "DO",
  },
  {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC",
  },
  {
    name: "Egypt",
    dial_code: "+20",
    code: "EG",
  },
  {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV",
  },
  {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ",
  },
  {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER",
  },
  {
    name: "Estonia",
    dial_code: "+372",
    code: "EE",
  },
  {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET",
  },
  {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK",
  },
  {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO",
  },
  {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ",
  },
  {
    name: "Finland",
    dial_code: "+358",
    code: "FI",
  },
  {
    name: "France",
    dial_code: "+33",
    code: "FR",
  },
  {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF",
  },
  {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF",
  },
  {
    name: "Gabon",
    dial_code: "+241",
    code: "GA",
  },
  {
    name: "Gambia",
    dial_code: "+220",
    code: "GM",
  },
  {
    name: "Georgia",
    dial_code: "+995",
    code: "GE",
  },
  {
    name: "Germany",
    dial_code: "+49",
    code: "DE",
  },
  {
    name: "Ghana",
    dial_code: "+233",
    code: "GH",
  },
  {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI",
  },
  {
    name: "Greece",
    dial_code: "+30",
    code: "GR",
  },
  {
    name: "Greenland",
    dial_code: "+299",
    code: "GL",
  },
  {
    name: "Grenada",
    dial_code: "+1473",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP",
  },
  {
    name: "Guam",
    dial_code: "+1671",
    code: "GU",
  },
  {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT",
  },
  {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG",
  },
  {
    name: "Guinea",
    dial_code: "+224",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW",
  },
  {
    name: "Guyana",
    dial_code: "+595",
    code: "GY",
  },
  {
    name: "Haiti",
    dial_code: "+509",
    code: "HT",
  },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
  },
  {
    name: "Honduras",
    dial_code: "+504",
    code: "HN",
  },
  {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK",
  },
  {
    name: "Hungary",
    dial_code: "+36",
    code: "HU",
  },
  {
    name: "Iceland",
    dial_code: "+354",
    code: "IS",
  },
  {
    name: "India",
    dial_code: "+91",
    code: "IN",
  },
  {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID",
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98",
    code: "IR",
  },
  {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ",
  },
  {
    name: "Ireland",
    dial_code: "+353",
    code: "IE",
  },
  {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM",
  },
  {
    name: "Israel",
    dial_code: "+972",
    code: "IL",
  },
  {
    name: "Italy",
    dial_code: "+39",
    code: "IT",
  },
  {
    name: "Jamaica",
    dial_code: "+1876",
    code: "JM",
  },
  {
    name: "Japan",
    dial_code: "+81",
    code: "JP",
  },
  {
    name: "Jersey",
    dial_code: "+44",
    code: "JE",
  },
  {
    name: "Jordan",
    dial_code: "+962",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    dial_code: "+77",
    code: "KZ",
  },
  {
    name: "Kenya",
    dial_code: "+254",
    code: "KE",
  },
  {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP",
  },
  {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR",
  },
  {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG",
  },
  {
    name: "Laos",
    dial_code: "+856",
    code: "LA",
  },
  {
    name: "Latvia",
    dial_code: "+371",
    code: "LV",
  },
  {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB",
  },
  {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS",
  },
  {
    name: "Liberia",
    dial_code: "+231",
    code: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY",
  },
  {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI",
  },
  {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT",
  },
  {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU",
  },
  {
    name: "Macao",
    dial_code: "+853",
    code: "MO",
  },
  {
    name: "Macedonia",
    dial_code: "+389",
    code: "MK",
  },
  {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG",
  },
  {
    name: "Malawi",
    dial_code: "+265",
    code: "MW",
  },
  {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY",
  },
  {
    name: "Maldives",
    dial_code: "+960",
    code: "MV",
  },
  {
    name: "Mali",
    dial_code: "+223",
    code: "ML",
  },
  {
    name: "Malta",
    dial_code: "+356",
    code: "MT",
  },
  {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH",
  },
  {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ",
  },
  {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR",
  },
  {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU",
  },
  {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT",
  },
  {
    name: "Mexico",
    dial_code: "+52",
    code: "MX",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691",
    code: "FM",
  },
  {
    name: "Moldova",
    dial_code: "+373",
    code: "MD",
  },
  {
    name: "Monaco",
    dial_code: "+377",
    code: "MC",
  },
  {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN",
  },
  {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME",
  },
  {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS",
  },
  {
    name: "Morocco",
    dial_code: "+212",
    code: "MA",
  },
  {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ",
  },
  {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM",
  },
  {
    name: "Namibia",
    dial_code: "+264",
    code: "NA",
  },
  {
    name: "Nauru",
    dial_code: "+674",
    code: "NR",
  },
  {
    name: "Nepal",
    dial_code: "+977",
    code: "NP",
  },
  {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL",
  },
  {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN",
  },
  {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC",
  },
  {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ",
  },
  {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI",
  },
  {
    name: "Niger",
    dial_code: "+227",
    code: "NE",
  },
  {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG",
  },
  {
    name: "Niue",
    dial_code: "+683",
    code: "NU",
  },
  {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF",
  },
  {
    name: "Northern Mariana Islands",
    dial_code: "+1670",
    code: "MP",
  },
  {
    name: "Norway",
    dial_code: "+47",
    code: "NO",
  },
  {
    name: "Oman",
    dial_code: "+968",
    code: "OM",
  },
  {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK",
  },
  {
    name: "Palau",
    dial_code: "+680",
    code: "PW",
  },
  {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS",
  },
  {
    name: "Panama",
    dial_code: "+507",
    code: "PA",
  },
  {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG",
  },
  {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY",
  },
  {
    name: "Peru",
    dial_code: "+51",
    code: "PE",
  },
  {
    name: "Philippines",
    dial_code: "+63",
    code: "PH",
  },
  {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN",
  },
  {
    name: "Poland",
    dial_code: "+48",
    code: "PL",
  },
  {
    name: "Portugal",
    dial_code: "+351",
    code: "PT",
  },
  {
    name: "Puerto Rico",
    dial_code: "+1939",
    code: "PR",
  },
  {
    name: "Qatar",
    dial_code: "+974",
    code: "QA",
  },
  {
    name: "Romania",
    dial_code: "+40",
    code: "RO",
  },
  {
    name: "Russia",
    dial_code: "+7",
    code: "RU",
  },
  {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW",
  },
  {
    name: "Reunion",
    dial_code: "+262",
    code: "RE",
  },
  {
    name: "Saint Barthelemy",
    dial_code: "+590",
    code: "BL",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869",
    code: "KN",
  },
  {
    name: "Saint Lucia",
    dial_code: "+1758",
    code: "LC",
  },
  {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784",
    code: "VC",
  },
  {
    name: "Samoa",
    dial_code: "+685",
    code: "WS",
  },
  {
    name: "San Marino",
    dial_code: "+378",
    code: "SM",
  },
  {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST",
  },
  {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA",
  },
  {
    name: "Senegal",
    dial_code: "+221",
    code: "SN",
  },
  {
    name: "Serbia",
    dial_code: "+381",
    code: "RS",
  },
  {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC",
  },
  {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL",
  },
  {
    name: "Singapore",
    dial_code: "+65",
    code: "SG",
  },
  {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK",
  },
  {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI",
  },
  {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB",
  },
  {
    name: "Somalia",
    dial_code: "+252",
    code: "SO",
  },
  {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA",
  },
  {
    name: "South Sudan",
    dial_code: "+211",
    code: "SS",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS",
  },
  {
    name: "Spain",
    dial_code: "+34",
    code: "ES",
  },
  {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK",
  },
  {
    name: "Sudan",
    dial_code: "+249",
    code: "SD",
  },
  {
    name: "Suriname",
    dial_code: "+597",
    code: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ",
  },
  {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ",
  },
  {
    name: "Sweden",
    dial_code: "+46",
    code: "SE",
  },
  {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH",
  },
  {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY",
  },
  {
    name: "Taiwan",
    dial_code: "+886",
    code: "TW",
  },
  {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255",
    code: "TZ",
  },
  {
    name: "Thailand",
    dial_code: "+66",
    code: "TH",
  },
  {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL",
  },
  {
    name: "Togo",
    dial_code: "+228",
    code: "TG",
  },
  {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK",
  },
  {
    name: "Tonga",
    dial_code: "+676",
    code: "TO",
  },
  {
    name: "Trinidad and Tobago",
    dial_code: "+1868",
    code: "TT",
  },
  {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN",
  },
  {
    name: "Turkey",
    dial_code: "+90",
    code: "TR",
  },
  {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    dial_code: "+1649",
    code: "TC",
  },
  {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV",
  },
  {
    name: "Uganda",
    dial_code: "+256",
    code: "UG",
  },
  {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA",
  },
  {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE",
  },
  {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY",
  },
  {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ",
  },
  {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58",
    code: "VE",
  },
  {
    name: "Vietnam",
    dial_code: "+84",
    code: "VN",
  },
  {
    name: "Virgin Islands, British",
    dial_code: "+1284",
    code: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340",
    code: "VI",
  },
  {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF",
  },
  {
    name: "Yemen",
    dial_code: "+967",
    code: "YE",
  },
  {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM",
  },
  {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW",
  },
];
