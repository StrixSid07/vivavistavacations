import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Uk } from "../../assets";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Map } from "../elements";

const ContactUs = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden mt-4 md:mt-12 lg:mt-16 mb-8">
      <img
        src={Uk}
        alt="Background"
        className="fixed inset-0 w-full h-screen object-cover z-[-1]"
      />
      <div className="fixed inset-0 z-[-1]"></div>
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-5/12 lg:w-1/3 flex justify-center mt-12 md:mt-0 lg:mt-0"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white flex flex-col justify-center rounded-lg shadow-lg p-6 md:p-8"
            >
              {/* Address Section */}
              <div className="mb-6">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-deep-orange-500">
                  Address
                </h1>
                <p className="text-base md:text-lg lg:text-xl">Your Address</p>
              </div>
              {/* Contact Info */}
              <div className="mb-6">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                  Call Us On
                </h1>
                <p className="text-base flex items-center justify-start gap-4 md:text-lg lg:text-xl transition duration-700 ease-in-out hover:text-deep-orange-500">
                  <FaPhoneAlt className="text-green-500" size={24} />{" "}
                  <a href="tel:+0203 780 5023">+0203 780 5023</a>
                </p>
              </div>
              <div className="mb-6">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                  Email Us On
                </h1>
                <p className="text-base flex items-center justify-start gap-4 md:text-lg lg:text-xl transition duration-700 ease-in-out hover:text-deep-orange-500">
                  <FaEnvelope className="text-blue-600" size={24} />
                  <a href="mailto:support@gmail.com">
                    admin@vivavistavactions.co.uk
                  </a>
                </p>
              </div>
              {/* Social Media Icons */}
              <div className="flex justify-start mt-4 space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col justify-center items-center space-y-2 group"
                >
                  <a
                    href="https://www.facebook.com/"
                    target="_new"
                    className="transition-all ease-out duration-500 group-hover:text-blue-900"
                  >
                    <FaFacebookF size={24} />
                  </a>
                  <label className="transition-all ease-out duration-500 group-hover:text-blue-900 group-hover:underline underline-offset-4">
                    Facebook
                  </label>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col justify-center items-center space-y-2 group"
                >
                  <a
                    href="https://www.instagram.com/"
                    target="_new"
                    className="group-hover:text-pink-500"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <label className="transition-all ease-out duration-500 group-hover:text-pink-500 group-hover:underline underline-offset-4">
                    Instagram
                  </label>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-5/12 lg:w-1/2 flex justify-center"
          >
            <Card color="white" className="w-full p-8 shadow-xl" shadow={false}>
              <Typography
                variant="h4"
                color="deep-orange"
                className="text-center"
              >
                Get in Touch
              </Typography>
              <Typography color="gray" className="mt-1 text-center font-normal">
                We'd love to hear from you! Fill out the form below to get in
                touch.
              </Typography>
              <form className="mt-8 w-full">
                <div className="mb-4 flex flex-col gap-4">
                  <Input
                    size="lg"
                    placeholder="Your Name"
                    label="Name"
                    color="blue"
                  />
                  <Input
                    size="lg"
                    placeholder="Your Email"
                    label="Email"
                    color="blue"
                  />
                  <Input
                    size="lg"
                    placeholder="Your Phone"
                    label="Phone"
                    color="blue"
                  />
                  <Textarea size="lg" label="Message" color="blue" />
                </div>
                <Button
                  className="mt-6 text-white"
                  color="deep-orange"
                  fullWidth
                >
                  Send Message
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  We respect your privacy. Your information will remain
                  confidential.
                </Typography>
              </form>
            </Card>
          </motion.div>
        </div>
        {/* Map Component */}
        <div className="mt-16 w-full h-[500px]">
          <Map
            latitude={51.58583056152749}
            longitude={-0.0015499736703773832}
            title="Viva Vista Vacation Fe"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
