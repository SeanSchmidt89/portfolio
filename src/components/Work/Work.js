import React from "react";
import WorkItem from "../WorkItem/WorkItem";
import "./Work.css";

const data = [
  {
    year: 2022,
    title: "Caring for the Cascades",
    duration: "1 Year",
    details:
      "As a Medical Caregiver for Caring for the Cascades, I provided compassionate care and support to patients and their families during end-of-life transitions. My duties included assisting with daily living activities, administering medications, monitoring patients' vital signs, and maintaining accurate medical records. I worked closely with a team of healthcare professionals to ensure that patients received the highest quality of care and support during this difficult time.",
  },
  {
    year: 2022,
    title: "Vet-Tech Program (full-time school)",
    duration: "6 Months",
    details:
      "While I was exploring opportunities to advance my career in the tech industry, I came across a coding bootcamp named PDX Code-Guild that offered an immersive full-time program in computer coding. To help me enroll in this program, I took advantage of a program called Vet-Tech, which is administered by the VA and provides educational and training opportunities to veterans. Through my enrollment in Vet-Tech and attendance at PDX Code-Guild, I was able to gain a comprehensive understanding of computer coding and develop the skills necessary to pursue a successful career in this field.",
  },
  {
    year: 2020,
    title: "Apel Extrusions",
    duration: "6 Months",
    details:
      "As a Shipping Packer at Apel Extrusions, I was responsible for preparing finished products for shipment to customers. This included verifying order specifications, carefully packaging products to prevent damage during transit, and labeling orders with accurate shipping information. Additionally, I regularly used industrial equipment such as forklifts and pallet jacks to load and unload shipments, and maintained a clean and safe work area in accordance with industry standards.",
  },
  {
    year: 2017,
    title: "New Horizons",
    duration: "4 Years",
    details:
      "As a Medical Caregiver for New Horizon's, I provided compassionate care and support to patients and their families during end-of-life transitions. My duties included assisting with daily living activities, administering medications, monitoring patients' vital signs, and maintaining accurate medical records. I worked closely with a team of healthcare professionals to ensure that patients received the highest quality of care and support during this difficult time.",
  },
  {
    year: 2012,
    title: "US Navy",
    duration: "5 Years",
    details:
      "I provided medical support as a Navy Corpsman for a term of five years, demonstrating my commitment to duty and ability to thrive in a high-pressure, mission-critical environment. During my tenure, I had the honor of being stationed at Balboa Naval Hospital and the tip of the spear, 1st Marine Division Camp Pendleton. There I was able to utilize my expertise and training to provide critical medical care to our nation's service members.",
  },
];

const Work = () => {
  return (
    <div id="work" className="work">
      <h1>WORK</h1>
      {data.map((item) => (
        <WorkItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Work;