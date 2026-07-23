/**
 * NOTE: I KNOW SOME OF THIS IS MORE ADVANCED THAN YOU MIGHT EXPECT LOL
 * PLEASE do not false-flag me for using AI, I have worked 5.5 years as a software engineer XD
 * Oh man now I am insecure about my code XD, enjoy!
 * I marked where parts of the rubric are to make it easier.
 */

// Task: Use of JavaScript to create a simple FAQ section, where clicking a question reveals the answer dynamically.

// CONSTANTS
const FAQ_CONTAINER_ID = "faq-page-items";

const FAQ_ITEMS = [
  {
    title: "What is Shopify and how does it work?",
    answer:
      "Shopify is an all-in-one commerce platform that lets you create an online store, accept payments, and sell on social channels and in person—all from one dashboard. Build a professional storefront, manage products and inventory, process orders and shipping, automate marketing and SEO, analyze sales, and run your business from web or mobile—no coding required.",
  },
  {
    title: "How much does Shopify cost?",
    answer:
      "Shopify offers a free 3-day trial with no credit card required. Most plans then cost $1 per month for the first 3 months before switching to standard pricing. POS Pro is available as an optional add-on.",
  },
  {
    title: "Can I cancel or change my subscription anytime?",
    answer:
      "Yes. You can cancel your Shopify account if it is no longer right for your business. Shopify Plus subscriptions with a 1- or 3-year commitment can be canceled when the term ends.",
  },
  {
    title: "Are there any additional fees?",
    answer:
      "Shopify does not charge setup fees. Transaction fees may apply when using a third-party payment provider, and credit card processing fees vary depending on your selected plan.",
  },
  {
    title: "In what countries can I use Shopify?",
    answer:
      "Shopify is available in nearly every country. However, available features, pricing, payment methods, and Shopify Payments support can vary depending on where your business is located.",
  },
  {
    title: "Is Shopify PCI Compliant or PCI Certified?",
    answer:
      "Yes. Shopify is certified Level 1 PCI DSS compliant, and Shopify-powered stores are PCI compliant by default to help protect customers' payment information.",
  },
  {
    title: "Can I use my own domain name with Shopify?",
    answer:
      "Yes. You can connect a domain you already own, transfer it to Shopify, or purchase a new one. Every store also receives a free myshopify.com address.",
  },
  {
    title: "Do I get web hosting with Shopify?",
    answer:
      "Yes. Shopify plans include secure commerce hosting, unlimited bandwidth, and a free TLS/SSL certificate. You can also use Shopify's Buy Button to sell through an external website or blog.",
  },
];

/**
 * @param {*} data `{title: string, answer: string}`
 * @param {*} startOpen Boolean
 * @returns
 */
const createFaqItemElement = (data, startOpen = false) => {
  if (!data) {
    return;
  }

  // CONTAINER
  const newContainer = document.createElement("div");

  newContainer.classList.add("faq-item");

  // TOP

  const alwaysVisibleTop = document.createElement("div");
  alwaysVisibleTop.classList.add("faq-item-top");

  const question = document.createElement("h2");

  question.textContent = data.title;

  question.classList.add("question");

  alwaysVisibleTop.appendChild(question);

  const expandBtn = document.createElement("button");

  expandBtn.textContent = "+";

  expandBtn.classList.add("faq-expand-btn");

  if (startOpen) {
    expandBtn.classList.add("open");
    expandBtn.textContent = "-";
  }

  alwaysVisibleTop.appendChild(expandBtn);

  // EXPANDED

  const expandedSection = document.createElement("div");

  expandedSection.classList.add("faq-expanded-section");

  if (startOpen) {
    expandedSection.classList.add("open");
  }

  const answerText = document.createElement("p");

  answerText.textContent = data.answer;

  expandedSection.appendChild(answerText);

  // FINALIZATION
  newContainer.appendChild(alwaysVisibleTop);
  newContainer.appendChild(expandedSection);

  expandBtn.addEventListener("click", (e) => {
    if (expandBtn.classList.contains("open")) {
      // Unexpand
      expandBtn.classList.remove("open");
      // Task: Use of the Document Object Model (DOM) to make changes to the content of the page without having to reload the page completely.
      expandBtn.textContent = "+";
      expandedSection.classList.remove("open");
    } else {
      // Expand
      expandBtn.classList.add("open");
      // Task: Use of the Document Object Model (DOM) to make changes to the content of the page without having to reload the page completely.
      expandBtn.textContent = "-";
      expandedSection.classList.add("open");
    }
  });

  return newContainer;
};

let initialized = false;

const main = () => {
  if (initialized) {
    return;
  }

  const faqContainer = document.getElementById(FAQ_CONTAINER_ID);

  if (!faqContainer) {
    console.error(
      `There was an issue populating the ${FAQ_CONTAINER_ID} element`,
    );
    return;
  }

  for (let i = 0; i < FAQ_ITEMS.length; i++) {
    const newFaqItem = createFaqItemElement(FAQ_ITEMS[i], i === 0);
    faqContainer.appendChild(newFaqItem);
  }

  //   faqContainer.appendChild();

  initialized = true;
};

main();
