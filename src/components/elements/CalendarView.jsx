import React, { useState, useMemo, useEffect ,useContext} from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { Dialog, DialogBody } from "@material-tailwind/react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import ConciergeFormCard from "./ConciergeFormCard";
import {LeadContext} from "../../contexts/LeadContext";
dayjs.extend(customParseFormat);

const CalendarView = ({
  departureDates,
  departureAirports,
  priceMap,
  dealId,
  dealtitle,
  setSelectedTrip,
  
  setLedprice,
  selectedAirport,
}) => {
  const { leadPrice, setLeadPrice } = useContext(LeadContext);
  // const {dealId}=useContext(LeadContext);
const {adultCount}=useContext(LeadContext); 
  const parsedDates = useMemo(() => {
    // Parse and sort the dates using the provided "DD/MM/YYYY" format
    console.log("this is selected airport", selectedAirport);
    console.log("this is departure airports", departureAirports);

    const sortedDates = departureDates
      .map((d) => dayjs(d, "DD/MM/YYYY"))
      .sort((a, b) => (a.isBefore(b) ? -1 : 1));

    // Map each sorted date with its airport and price from the priceMap using the same format
    const allParsedDates = sortedDates.map((date, i) => {
      const airport = departureAirports[i % departureAirports.length][0]; // Access the first element of the array
      return {
        date,
        airport,
        price: priceMap[date.format("DD/MM/YYYY")] || 0,
      };
    });

    console.log("this is all parsed dates", allParsedDates);
    const finaldata = allParsedDates.filter(
      (d) => d.airport._id === selectedAirport
    );
    // Filter the parsed dates based on the selected airport (_id matches)
    // const lowestPrice = Math.min(...finaldata.map((d) => d.price));
    // console.log(typeof setLedprice, lowestPrice);
    // if (typeof setLedprice === "function") {
    //   setLedprice(lowestPrice); // or any price you want to set after filtering etc.
    // }

    return finaldata; // Compare by _id
  }, [departureDates, departureAirports, priceMap, selectedAirport]);

  console.log("parsh data", parsedDates);
  const [currentMonth, setCurrentMonth] = useState(
    parsedDates[0]?.date.startOf("month") || dayjs().startOf("month")
  );

  const dateMap = useMemo(() => {
    const map = {};
    parsedDates.forEach(({ date, airport, price }) => {
      map[date.format("DD/MM/YYYY")] = { airport, price };
    });
    return map;
  }, [parsedDates]);

  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");

  const startDay = startOfMonth.day(); // 0 (Sun) - 6 (Sat)
  const totalDays = endOfMonth.date();
  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    const date = currentMonth.date(i).format("DD/MM/YYYY");
    days.push({
      day: i,
      date,
      info: dateMap[date] || null,
    });
  }

  const handleMonthChange = (direction) => {
    const currentIndex = parsedDates.findIndex((d) =>
      d.date.isSame(currentMonth, "month")
    );

    let target;
    if (direction === "prev") {
      for (let i = currentIndex - 1; i >= 0; i--) {
        if (!parsedDates[i].date.isSame(currentMonth, "month")) {
          target = parsedDates[i].date;
          break;
        }
      }
    } else if (direction === "next") {
      for (let i = currentIndex + 1; i < parsedDates.length; i++) {
        if (!parsedDates[i].date.isSame(currentMonth, "month")) {
          target = parsedDates[i].date;
          break;
        }
      }
    }

    if (target) {
      setCurrentMonth(target.startOf("month"));
    }
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDayInfo, setSelectedDayInfo] = React.useState(null);

  // const handleSubmit = (info) => {
  //   setSelectedDayInfo(info);
  //   setOpenDialog(true);
  // };

  const handleSubmit = (day) => {
    setSelectedDayInfo(day); // `day` includes { day, date, info }
    setOpenDialog(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!parsedDates.length) return;

    const datesInCurrentMonth = parsedDates.filter((d) =>
      d.date.isSame(currentMonth, "month")
    );

    if (datesInCurrentMonth.length > 0) {
      const lowestPrice = Math.min(...datesInCurrentMonth.map((d) => d.price));
      setLeadPrice(lowestPrice);
    }
  }, [currentMonth, parsedDates, setLeadPrice]);



  return (
    <div className="max-w-sm mx-auto p-2 bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex justify-between items-center rounded-md">
        <button
          onClick={() => handleMonthChange("prev")}
          className="bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-blue-100"
        >
          ←
        </button>
        <h2 className="text-lg font-bold text-white">
          {currentMonth.format("MMMM YYYY")}
        </h2>
        <button
          onClick={() => handleMonthChange("next")}
          className="bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-blue-100"
        >
          →
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm font-medium my-2 text-gray-600">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1 text-xs p-2">
        {days.map((day, i) =>
          day ? (
            <div
              key={i}
              // onClick={day.info ? () => handleSubmit(day.info) : undefined}
              onClick={day.info ? () => handleSubmit(day) : undefined}
              className={clsx(
                "p-2 rounded-md text-center border",
                day.info
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-md cursor-pointer"
                  : "text-gray-400",
                day.date === dayjs().format("DD/MM/YYYY") &&
                  "border-2 border-yellow-500"
              )}
            >
              <div className="font-medium">{day.day}</div>
              {day.info && (
                <div className="mt-1 flex flex-col justify-center  items-center">
                  <div className="text-xs font-normal">£{day.info.price}</div>
                  <div className="text-[0.68rem]">{day.info.airport?.code}</div>
                </div>
              )}
            </div>
          ) : (
            <div key={i} className="p-2" />
          )
        )}
      </div>
      <Dialog
        open={openDialog}
        handler={() => setOpenDialog(false)}
        size={isMobile ? "md" : "xs"}
        className="p-0 bg-transparent"
      >
        <DialogBody className="overflow-auto max-h-[90vh] flex justify-center">
          <div className="w-full">
            {/* <ConciergeFormCard
              handleClose={() => setOpenDialog(false)}
              // selectedInfo={selectedDayInfo}
            /> */}
            <ConciergeFormCard
              dealId={dealId}
              dealtitle={dealtitle}
              adultCount={adultCount}
              totalPrice={selectedDayInfo?.info?.price}
              selectedDate={selectedDayInfo?.date}
              airport={selectedDayInfo?.info?.airport}
              handleClose={() => setOpenDialog(false)}
            />
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default CalendarView;
