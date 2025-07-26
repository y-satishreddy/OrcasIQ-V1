import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-300 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between">
        <p className="text-black text-sm md:text-base font-medium max-w-[90%]">
          {question}
        </p>
        <span className="text-[#0A3A5E] text-xl">
          {open ? <BsDash /> : <BsPlus />}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] mt-2" : "max-h-0"
        }`}
      >
        <p className="text-black text-sm">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="w-full bg-white px-[5%] py-[1%]">
      <h2 className="text-black text-2xl md:text-3xl font-bold mb-6">
        Frequently asked questions
      </h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <FaqItem
            question="How do I upgrade / downgrade my workspace plan?"
            answer="Go to settings and navigate to 'Billing'."
          />
          <FaqItem
            question="Can I add other information to be added in an invoice?"
            answer="Yes, you can add notes under Invoice Settings."
          />
          <FaqItem
            question="When should I use a new table vs. a view?"
            answer="Use a view for filtering, a table for separating data."
          />
          <FaqItem
            question="How can I transfer data from one base to another?"
            answer="Export CSV from one base and import into another."
          />
          <FaqItem
            question="How do I change my account email address?"
            answer="Visit your profile settings and update your email."
          />
        </div>

        <div>
          <FaqItem
            question="How does billing work?"
            answer="Billing is monthly or yearly depending on your plan."
          />
          <FaqItem
            question="Can I share an individual app?"
            answer="Yes, share links can be generated per app."
          />
          <FaqItem
            question="Can I export a list of all collaborators?"
            answer="Yes, via the admin panel or export option."
          />
          <FaqItem
            question="Can invoices be sent to other collaborators?"
            answer="Only billing admins can receive invoices."
          />
          <FaqItem
            question="How do I contact support?"
            answer="Use the Help section in-app or email support@example.com."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
