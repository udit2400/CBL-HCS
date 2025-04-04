"use client"

import React, { useState } from "react";

const faqSections = [
  {
    title: "About the Course",
    questions: [
      {
        question: "What is the Haryana HCS course offered by CBL?",
        answer:
          "Our Haryana HCS program comprehensively prepares you for Prelims, Mains, and Interviews with daily live classes, offline sessions, 50 Prelims MCQs, 2 Mains questions, and CSAT Practice Assignments, ensuring you excel at every stage.",
      },
      {
        question: "Is the course available in both online and offline modes?",
        answer:
          "Yes! CBL provides online, offline, and live-online modes. Additionally, students have access to recorded lectures till the exam date for uninterrupted learning.",
      },
      {
        question: "Does the course cover the entire Haryana HCS syllabus?",
        answer:
          "Yes, the course covers all topics, including General Studies (GS1, GS2, GS3), CSAT, and Optional Subjects, ensuring thorough preparation for the exam.",
      },
    ],
  },
  {
    title: "About CBL (Chetan Bharat Learning)",
    questions: [
      {
        question: "What makes CBL unique for Haryana HCS preparation?",
        answer:
          "CBL is a test-focused institute, offering daily practice of 50 MCQs and Mains answer writing. This rigorous approach, combined with expert mentorship, ensures superior preparation and results.",
      },
      {
        question: "What is CBL's success record in Haryana HCS exams?",
        answer:
          "CBL has produced multiple toppers, including Rank 1 Kamal Chaudhary (HCS 2021) and Rank 1 Abhishek Garg (HCS 2023). With our proven track record, you’re in the best hands for HCS preparation.",
      },
      {
        question: "Where is CBL located?",
        answer:
          "Our institute is located at Sector 43, Chandigarh (ISBT-F, First Floor), easily accessible for students across Haryana and neighboring states.",
      },
    ],
  },
  {
    title: "About the Haryana HCS Exam",
    questions: [
      {
        question: "What is the pattern of the Haryana HCS exam?",
        answer:
          "The Haryana HCS exam consists of three stages:\nPrelims: Objective-type papers (General Studies and CSAT).\nMains: Descriptive papers (GS, Essay, Optional, and Language).\nInterview: Personality test to assess leadership, decision-making, and communication.",
      },
      {
        question: "How does CBL help with current affairs preparation?",
        answer:
          "CBL provides daily newspaper analysis, exclusive current affairs classes, and monthly Current Affairs Tests to ensure comprehensive preparation.",
      },
    ],
  },
  {
    title: "Learning Support",
    questions: [
      {
        question: "Are there doubt-clearing sessions in the course?",
        answer:
          "Yes, we conduct dedicated doubt-clearing sessions with expert faculty to resolve your questions and clarify concepts.",
      },
      {
        question: "What additional support does CBL provide?",
        answer:
          "CBL’s mentors create personalized preparation strategies for each student, ensuring a focused and result-oriented study plan.",
      },
      {
        question: "Can I get feedback on my test performance?",
        answer:
          "Yes, we provide detailed performance feedback after every test, helping you identify strengths and areas for improvement.",
      },
    ],
  },
  {
    title: "Enrollment & Support",
    questions: [
      {
        question: "How can I enroll in the Haryana HCS course?",
        answer:
          "Enroll through our website www.chetanbharat.com or visit our Chandigarh center for offline registration.",
      },
      {
        question: "How can I get quick guidance for my preparation?",
        answer:
          "For immediate assistance, call 9779353345 or WhatsApp us at wa.me/919779613745. Our counselors are here to help you 24/7!",
      },
      {
        question: "Is there any demo class available before enrollment?",
        answer:
          "Yes, we offer free demo classes so you can experience the quality of our teaching and course structure before committing.",
      },
    ],
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState({});

  const toggleAnswer = (sectionIndex, questionIndex) => {
    setActiveIndex((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions (FAQs)</h2>
      {faqSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
          <div className="space-y-4">
            {section.questions.map((faq, questionIndex) => (
              <div
                key={questionIndex}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div
                  className="p-6 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswer(sectionIndex, questionIndex)}
                >
                  <h4 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h4>
                  <span
                    className={`transform transition-transform ${
                      activeIndex[sectionIndex] === questionIndex ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </div>
                {activeIndex[sectionIndex] === questionIndex && (
                  <div className="p-6 bg-gray-100">
                    <p className="text-gray-600 whitespace-pre-wrap">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-8">
        <a
          href="/enroll"
          className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
        >
          JOIN NOW
        </a>
      </div>
    </div>
  );
};

export default FAQSection;
