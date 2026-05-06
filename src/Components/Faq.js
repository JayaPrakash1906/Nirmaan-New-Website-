import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "1. What is this Pre-Incubation Agreement?",
    answer: "This Agreement formalizes the relationship between IIT Madras (NIRMAAN Pre-Incubator) and the Pre-Incubatee team, outlining the support, responsibilities, and terms for nurturing startup ideas."
  },
  {
    question: "2. Who are the parties involved?",
    answer: "First Party: IIT Madras (represented by Dean, IC&SR)\nSecond/Third Party: Founder(s) / Pre-Incubatee(s)\nConfirming Party: Advisor (Office of Innovation & Entrepreneurship)"
  },
  {
    question: "3. What kind of support will NIRMAAN provide?",
    answer: "a) Mentoring & Capacity Building\n• Business mentoring and technical guidance. We have Abhyasa clinical one on one mentoring session\n• IP, legal, and statutory support\n\nb) Infrastructure Support\n• Co-working space\n• Conference room access (subject to availability)\n• Workstations, furniture, internet, electricity\n\nNote: All support is provided based on availability, not as a guaranteed right."
  },
  {
    question: "4. Can Pre-Incubatees use IIT Madras address for company registration?",
    answer: "No. Pre-Incubatees cannot use IIT Madras/NIRMAAN address for company registration during pre-incubation."
  },
  {
    question: "5. What financial support is provided?",
    answer: "Eligible teams can receive up to ₹7 Lakhs, distributed as:\n• ₹2 Lakhs – Pratham Phase (initial support)\n• ₹5 Lakhs – Akshar Phase (performance-based)\n\nImportant:\n• Funds are provided only as reimbursements or vendor payments\n• Policy may change as per NIRMAAN guidelines"
  },
  {
    question: "6. Are teams required to disclose external funding?",
    answer: "Yes. All external grants, competition winnings, or funding must be reported to NIRMAAN."
  },
  {
    question: "7. What are the expected conduct and responsibilities?",
    answer: "Pre-Incubatees must:\n• Maintain professional behavior\n• Avoid illegal/unethical activities\n• Follow timelines set by NIRMAAN\n• Respect infrastructure and workspace norms\n• Submit Progress report on the stipulated time\n• Communicate all the changes in team or idea or any achievements via mail - manager.ie@imail.iitm.ac.in and ic42914@imail.iitm.ac.in"
  },
  {
    question: "8. What is the expected incubation pathway?",
    answer: "Teams are encouraged to:\nMove into IITM-associated incubators (e.g., sector-specific incubators or IITM Incubation Cell) before formally registering a company."
  },
  {
    question: "9. What if the startup is incorporated outside IIT Madras ecosystem?",
    answer: "If incorporated outside IITM (within 3 years of graduation):\n• The startup must inform NIRMAAN with justification\n• Must provide minimum 1% equity (fully diluted) to IIT Madras"
  },
  {
    question: "10. What happens if the startup incubates within the IITM ecosystem?",
    answer: "The required 1% equity is already included in the incubator’s equity structure."
  },
  {
    question: "11. Who owns the Intellectual Property (IP)?",
    answer: "• During pre-incubation → IP is owned by IIT Madras\n• After company incorporation → IP is licensed to the startup (exclusive basis)\n• Cost may be nil or mutually agreed"
  },
  {
    question: "12. What if the startup does not commercialize the IP?",
    answer: "If no commercialization happens within 3 years: IIT Madras can convert the license from exclusive to non-exclusive."
  },
  {
    question: "13. What is the duration of the Agreement?",
    answer: "Valid during the pre-incubation period and extends up to 3 years after active engagement."
  },
  {
    question: "14. What are the possible statuses of a Pre-Incubatee?",
    answer: "• Graduated: Successfully becomes a startup\n• Trained: Idea pursued for 6 months but discontinued\n• Dropped Out: Removed due to performance or early exit"
  },
  {
    question: "15. Is prior approval required for incubation or company registration?",
    answer: "Yes. Pre-Incubatees must:\n• Inform NIRMAAN\n• Obtain No Objection Certificate (NOC) before applying to incubators or registering a company."
  },
  {
    question: "16. What is the response timeline from NIRMAAN?",
    answer: "NIRMAAN will respond within 14 working days. If no response → deemed approval."
  },
  {
    question: "17. What happens upon termination or exit?",
    answer: "Within 7 days, the team must:\n• Vacate workspace\n• Remove belongings\n• Stop using IITM/NIRMAAN name, logo, or IP"
  },
  {
    question: "18. What is the dispute resolution mechanism?",
    answer: "• Initial attempt: Mutual discussion (within 45 days)\n• If unresolved: Referred to sole arbitrator\n• Governed by Arbitration & Conciliation Act, 1996\n• Jurisdiction: Chennai, India"
  },
  {
    question: "19. Can the agreement terms change?",
    answer: "Yes. Certain aspects (like funding structure) may be revised based on NIRMAAN’s operational policies."
  },
  {
    question: "20. What are key compliance points to remember?",
    answer: "• Always communicate team changes\n• Obtain approvals before major actions\n• Submit required documentation on time\n• Follow IIT Madras policies and guidelines"
  },
  {
    question: "21. Who is eligible for signing the PIA (Pre-Incubation Agreement)?",
    answer: "Only teams that have progressed to the Akshar Phase of the NIRMAAN Pre-Incubation program are eligible to sign the PIA.\n\nKey Points:\n• PIA execution is not required at the initial (Pratham) stage\n• It becomes mandatory during/after selection into the Akshar Phase\n• Eligibility is based on performance evaluation by NIRMAAN\n• Only approved teams in Akshar Phase will be onboarded under the formal agreement."
  },
  {
    question: "22. How to get reimbursements?",
    answer: "Should obtain prior approval from the manager regarding the purchase, provide proper justification and once done mail to finance.ie@imail.iitm.ac.in, copy to manager - manager.ie@imail.iitm.ac.in attaching proper invoices."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-green-500 rounded-lg mb-4 overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md bg-white">
      <button
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-green-700 font-dmsans text-lg pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-green-600 flex-shrink-0"
        >
          <FaChevronDown />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1 text-gray-700 font-dmsans whitespace-pre-line leading-relaxed text-justify">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 px-6 sm:px-10 max-w-5xl mx-auto mt-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold font-dmsans text-green-600 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 font-dmsans max-w-2xl mx-auto">
          Everything you need to know about the Pre-Incubation Agreement, funding, IP, and the general guidelines of the NIRMAAN Pre-Incubator program at IIT Madras.
        </p>
      </div>

      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFaq(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
