import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const steps = [
  {
    title: "1. Project Planning and Feasibility",
    content: [
      "Define Project Scope: Clearly outline the project’s objectives, scope, and deliverables. Determine what is to be built, the required materials, and the expected outcomes.",
      "Conduct Feasibility Study: Assess the viability of the project, considering factors like budget, site conditions, regulatory requirements, and potential risks.",
      "Budgeting: Develop a detailed budget that includes costs for design, construction, permits, and contingencies. Ensure you have sufficient funds to cover the entire project.",
    ],
  },
  {
    title: "2. Site Selection and Analysis",
    content: [
      "Site Selection: Choose a suitable location based on project requirements, accessibility, and zoning regulations.",
      "Site Analysis: Conduct a thorough analysis of the site, including soil testing, environmental impact assessments, and utility availability. Identify any site-specific challenges or constraints.",
    ],
  },
  {
    title: "3. Design and Planning",
    content: [
      "Hire Professionals: Engage architects, engineers, and other professionals to develop the project design. Their expertise will ensure that the project meets all regulatory and design standards.",
      "Develop Design Plans: Create detailed architectural and engineering plans that include layouts, elevations, and technical specifications.",
      "Obtain Approvals: Submit design plans to local authorities for approval. This may include obtaining development approvals, construction permits, and zoning clearances.",
    ],
  },
  {
    title: "4. Pre-Construction Preparations",
    content: [
      "Select Contractors: Choose qualified contractors and subcontractors through a bidding process or direct selection. Evaluate their experience, reputation, and references.",
      "Sign Contracts: Finalize and sign contracts with contractors, ensuring that all terms, conditions, and responsibilities are clearly defined.",
      "Plan for Logistics: Develop a construction schedule and plan for logistics, including material procurement, equipment needs, and site management.",
    ],
  },
  {
    title: "5. Construction Phase",
    content: [
      "Site Preparation: Clear the site, set up necessary infrastructure, and prepare the ground for construction. This may include excavation, grading, and utility installation.",
      "Foundation Work: Construct the foundation according to design specifications. This is a critical step that ensures the stability and safety of the structure.",
      "Structural Work: Erect the main structure, including walls, floors, and roofs. Ensure that all work complies with design plans and building codes.",
      "Systems Installation: Install essential systems such as plumbing, electrical, and HVAC (heating, ventilation, and air conditioning). Ensure proper integration with the building’s infrastructure.",
      "Interior and Exterior Finishing: Complete interior finishes, such as drywall, painting, flooring, and cabinetry. Address exterior finishes, including siding, roofing, and landscaping.",
    ],
  },
  {
    title: "6. Quality Control and Inspections",
    content: [
      "Conduct Inspections: Perform regular inspections throughout the construction process to ensure quality and adherence to design specifications. This includes inspections by local building authorities and third-party inspectors.",
      "Quality Assurance: Implement quality control measures to address any defects or issues promptly. Ensure that all work meets the required standards and specifications.",
    ],
  },
  {
    title: "7. Completion and Handover",
    content: [
      "Final Inspection: Conduct a final inspection to verify that all aspects of the construction are complete and meet the required standards.",
      "Obtain Certificates: Secure necessary certificates of occupancy, compliance, and other approvals required for the building to be legally occupied or used.",
      "Handover: Provide the client with all relevant documentation, including warranties, manuals, and maintenance instructions. Conduct a walk-through with the client to ensure satisfaction and address any final concerns.",
    ],
  },
  {
    title: "8. Post-Construction",
    content: [
      "Maintenance and Support: Offer ongoing maintenance and support services as needed. Address any post-construction issues or defects promptly.",
      "Project Evaluation: Review the project to assess its success, including budget adherence, schedule performance, and client satisfaction. Use feedback to improve future projects.",
    ],
  },
  {
    title: "9. Documentation and Closure",
    content: [
      "Finalize Documentation: Ensure all project documentation is complete and properly filed, including contracts, permits, inspection reports, and change orders.",
      "Close Out Accounts: Settle any outstanding financial matters, including payments to contractors, suppliers, and other stakeholders.",
    ],
  },
];

const HowWeWork = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-t from-blue-400 to-gray-100"
    >
      <div className="max-w-4xl mx-auto p-4 mt-4 md:mt-12 lg:mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">HOW WE WORKS?</h2>
        <p className="text-center text-lg font-semibold mb-4">
          CRUCIAL STEPS THAT WE FOLLOW
        </p>
        <div>
          {steps.map((step, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-4 bg-gray-200 rounded-md focus:outline-none"
              >
                <span className="font-bold text-xl">{step.title}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-transparent rounded-md"
              >
                <div className="p-4 text-black">
                  {step.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HowWeWork;
