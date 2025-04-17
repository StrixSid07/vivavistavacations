import {
  Input,
  Select,
  Option,
  Textarea,
  Button,
} from "@material-tailwind/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function GroupBookingForm() {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-10 bg-white">
      {/* Illustration */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="/group-booking-illustration.png" // Replace with actual image path
          alt="Group Booking"
          className="max-w-md w-full h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 max-w-2xl md:pl-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Group Booking Enquiries
        </h2>
        <form className="space-y-5">
          {/* Row 1: Title, Name, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select label="Title">
              <Option>Mr.</Option>
              <Option>Ms.</Option>
              <Option>Mrs.</Option>
              <Option>Dr.</Option>
            </Select>
            <Input label="Lead Contact Name" />
            <Input label="Email Address" />
          </div>

          {/* Row 2: Phone, Adults, Children */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex w-full">
              <div className="flex items-center px-3 border rounded-l-md bg-gray-100 text-sm text-gray-700">
                <PhoneInput
                  country="gb" // UK by default
                  value={phone}
                  onChange={setPhone}
                  inputClass="rounded-l-none"
                  dropdownClass="rounded-md"
                />
              </div>
              <Input
                label="Phone Number"
                value={phone}
                className="rounded-l-none"
              />
            </div>
            <Input label="Adults" type="number" />
            <Input label="Children (Age 2–11)" type="number" />
          </div>

          {/* Row 3: Call Time */}
          <Input
            label="When would be a convenient time to call you?"
            className="w-full"
          />

          {/* Row 4: Additional Notes */}
          <Textarea
            label="Additional Requirements"
            placeholder="Please let us know if you have any other specifications or additional requirements. We want to ensure everything is perfect for your holiday."
            rows={4}
          />

          {/* Submit */}
          <div className="pt-2">
            <Button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:brightness-110 transition"
              fullWidth
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
