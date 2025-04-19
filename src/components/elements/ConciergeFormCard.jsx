import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
  CardFooter,
} from "@material-tailwind/react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import React from "react";
import { useCountries } from "use-react-countries";

const ConciergeFormCard = ({ handleClose }) => {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);

  React.useEffect(() => {
    if (countries.length) {
      const defaultIndex = countries.findIndex(
        (c) => c.name === "United Kingdom"
      );
      if (defaultIndex !== -1) {
        setCountry(defaultIndex);
      }
    }
  }, [countries]);

  const { name, flags, countryCallingCode } = countries[country] || {
    name: "United Kingdom",
    flags: { svg: "https://flagcdn.com/gb.svg" },
    countryCallingCode: "+44",
  };

  return (
    <Card className="w-full md:max-w-lg md:p-4 p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <Typography variant="h5" className="font-semibold">
            Connect With Our Concierge
          </Typography>
          <Typography variant="small" className="text-gray-600 mt-1">
            Found Your Ideal Date and Price? Let's Personalize Your Booking
            Together!
          </Typography>
        </div>
        <button onClick={handleClose}>
          <X className="w-6 h-6 text-black hover:text-red-500 rounded-md bg-red-50 hover:bg-red-100" />
        </button>
      </div>

      {/* Phone + WhatsApp */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <a
          href="tel:+02045059777"
          className="flex-1 bg-white border border-blue-500 text-blue-600 font-semibold rounded-lg px-2 py-2 text-center hover:bg-blue-50 transition"
        >
          <span className="flex justify-center items-center gap-2">
            <FaPhoneAlt /> 1 800 958 8977
          </span>
        </a>
        <a
          href="https://wa.me/442037805023"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white font-semibold rounded-lg px-2 py-2 text-center hover:bg-green-600 transition"
        >
          <span className="flex justify-center items-center gap-2">
            <FaWhatsapp /> Chat on WhatsApp
          </span>
        </a>
      </div>

      <hr className="my-4" />

      <Typography className="text-sm text-gray-700 mb-4">
        Or fill out the form below and we will get back to you:
      </Typography>

      {/* Form */}
      <form className="space-y-4">
        <Input type="text" label="Enter your name" className="p-1" />

        {/* Phone Input With Country Code */}
        <div className="relative flex w-full">
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button
                ripple={false}
                variant="text"
                color="blue-gray"
                className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-4 w-5 object-cover"
                />
                {countryCallingCode}
              </Button>
            </MenuHandler>
            <MenuList className="max-h-[20rem] max-w-[18rem]">
              {countries.map(({ name, flags, countryCallingCode }, index) => (
                <MenuItem
                  key={name}
                  className="flex items-center gap-2"
                  onClick={() => setCountry(index)}
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-5 object-cover"
                  />
                  {name}
                  <span className="ml-auto">{countryCallingCode}</span>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Input
            type="tel"
            placeholder="Mobile Number"
            className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{ className: "min-w-0" }}
          />
        </div>

        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          icon={<FaEnvelope />}
        />

        <Textarea label="How can we help you?" rows={3} />

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox id="promo" color="blue" />
          <label htmlFor="promo" className="text-sm text-gray-700">
            Subscribe to receive promotional offers, deals, and discounts.
          </label>
        </div>
        <CardFooter className="flex justify-end">
          {/* Submit Button */}
          <Button className="transition-colors duration-500 ease-in-out bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white">
            SUBMIT
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ConciergeFormCard;
