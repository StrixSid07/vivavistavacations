import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TermsAndConditions from "../pages/TermsAndConditions";
import Itinerary from "./Itinerary";
import Overview from "./Overview";
import PriceCalendar from "./PriceCalendarCard";

const FilterPageSlides = ({
  tripData,
  itinerary,
  prices,
  hotels,
  availableCountries,
  exclusiveAdditions,
  termsAndConditions,
  whatsIncluded,
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  const [openDays, setOpenDays] = useState(
    () => itinerary?.map(() => false) || []
  );

  const OverviewComponent = () => (
    <div className="md:p-4">
      <Overview
        tripData={tripData}
        availableCountries={availableCountries}
        whatsIncluded={whatsIncluded}
        exclusiveAdditions={exclusiveAdditions}
        termsAndConditions={termsAndConditions}
        hotels={hotels}
      />
    </div>
  );
  const ItineraryComponent = () => (
    <div className="md:p-4">
      <Itinerary
        itinerary={itinerary}
        openDays={openDays}
        setOpenDays={setOpenDays}
      />
    </div>
  );
  const PriceCalendarComponent = () => (
    <div className="md:p-4">
      <PriceCalendar prices={prices} />
    </div>
  );
  const TermsComponent = () => (
    <div className="md:p-4">
      <TermsAndConditions />
    </div>
  );

  const tabComponents = [
    { label: "Overview", value: "overview", component: <OverviewComponent /> },
    {
      label: "Itinerary",
      value: "itinerary",
      component: <ItineraryComponent />,
    },
    {
      label: "Price Calendar",
      value: "price-calendar",
      component: <PriceCalendarComponent />,
    },
    {
      label: "Terms and Conditions",
      value: "terms",
      component: <TermsComponent />,
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full border rounded-lg shadow-lg overflow-hidden">
        <Tabs value={activeTab}>
          <TabsHeader
            className="bg-gray-200 p-2 overflow-x-auto rounded-b-none whitespace-nowrap flex-nowrap"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-deep-orange-600 font-semibold",
            }}
          >
            {tabComponents.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-deep-orange-500" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <div className="h-[600px] overflow-y-auto p-1 md:p-4">
            <TabsBody>
              {tabComponents.map(({ value, component }) => (
                <TabPanel key={value} value={value}>
                  {component}
                </TabPanel>
              ))}
            </TabsBody>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default FilterPageSlides;
