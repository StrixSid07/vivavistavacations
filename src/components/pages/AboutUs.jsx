import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-t from-blue-400 to-gray-100 py-16 px-6 lg:px-24 mt-4 md:mt-12 lg:mt-16">
      {/* Who We Are Section */}
      <motion.section
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Card className="flex flex-col lg:flex-row items-center">
          <CardHeader
            className="lg:w-1/2 h-64 lg:h-80 overflow-hidden p-1 bg-transparent"
            floated={true}
            shadow={false}
          >
            <img
              src="https://images.unsplash.com/photo-1519678767534-29483894b34d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Who We Are"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardBody className="lg:w-1/2 p-8">
            <Typography variant="h2" className="text-gray-800 mb-4">
              Who We Are
            </Typography>
            <Typography className="text-gray-700 text-lg leading-relaxed">
              At PRAMUKH HOMES, we are passionate about building excellence.
              Founded on the principles of integrity, quality, and innovation,
              we are a leading construction firm dedicated to delivering
              exceptional results. With a strong track record of successful
              projects and a commitment to client satisfaction, we stand out in
              the construction industry for our expertise, reliability, and
              attention to detail.
            </Typography>
          </CardBody>
        </Card>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Card className="flex flex-col lg:flex-row-reverse items-center">
          <CardHeader
            className="lg:w-1/2 h-64 lg:h-80 overflow-hidden p-1 bg-transparent"
            floated={true}
            shadow={false}
          >
            <img
              src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Mission"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardBody className="lg:w-1/2 p-8">
            <Typography variant="h2" className="text-gray-800 mb-4">
              Our Mission
            </Typography>
            <Typography className="text-gray-700 text-lg leading-relaxed">
              Our mission is to transform your vision into reality by providing
              comprehensive construction services that exceed expectations. We
              aim to deliver high-quality projects that are completed on time
              and within budget while ensuring safety, sustainability, and the
              highest standards of craftsmanship.
            </Typography>
          </CardBody>
        </Card>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Typography variant="h2" className="text-gray-800 text-center mb-12">
          Our Values
        </Typography>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp}>
            <Card className="flex flex-col items-center">
              <CardHeader
                className="w-full h-48 overflow-hidden p-4"
                floated={false}
                shadow={false}
              >
                <img
                  src="https://images.unsplash.com/photo-1644411813513-ad77c1b77581?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Integrity"
                  className="w-full h-full object-cover rounded-md"
                />
              </CardHeader>
              <CardBody className="p-8">
                <Typography variant="h4" className="text-gray-800 mb-4">
                  Integrity
                </Typography>
                <Typography className="text-gray-700 text-lg leading-relaxed">
                  We uphold the highest ethical standards in every aspect of our
                  work. Transparency and honesty are at the core of our
                  interactions with clients, partners, and employees.
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="flex flex-col items-center">
              <CardHeader
                className="w-full h-48 overflow-hidden p-4"
                floated={false}
                shadow={false}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1664304041357-9ee3070abe68?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Quality"
                  className="w-full h-full object-cover rounded-md"
                />
              </CardHeader>
              <CardBody className="p-8">
                <Typography variant="h4" className="text-gray-800 mb-4">
                  Quality
                </Typography>
                <Typography className="text-gray-700 text-lg leading-relaxed">
                  We are dedicated to achieving excellence in every project.
                  From the materials we use to the techniques we employ, quality
                  is always our top priority.
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="flex flex-col items-center">
              <CardHeader
                className="w-full h-48 overflow-hidden p-4"
                floated={false}
                shadow={false}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1664297557561-6e7a951cb1dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Innovation"
                  className="w-full h-full object-cover rounded-md"
                />
              </CardHeader>
              <CardBody className="p-8">
                <Typography variant="h4" className="text-gray-800 mb-4">
                  Innovation
                </Typography>
                <Typography className="text-gray-700 text-lg leading-relaxed">
                  We embrace new technologies and innovative solutions to stay
                  ahead in the industry. Our forward-thinking approach ensures
                  that we offer modern, efficient, and sustainable construction
                  solutions.
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="flex flex-col items-center">
              <CardHeader
                className="w-full h-48 overflow-hidden p-4"
                floated={false}
                shadow={false}
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Customer-Centricity"
                  className="w-full h-full object-cover rounded-md"
                />
              </CardHeader>
              <CardBody className="p-8">
                <Typography variant="h4" className="text-gray-800 mb-4">
                  Customer-Centricity
                </Typography>
                <Typography className="text-gray-700 text-lg leading-relaxed">
                  Our clients are at the heart of everything we do. We listen to
                  your needs, understand your goals, and work closely with you
                  to deliver a final product that meets your vision and exceeds
                  your expectations.
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Expertise Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Card className="p-8 max-w-4xl mx-auto shadow-lg rounded-lg">
          <Typography variant="h2" className="text-gray-800 text-center mb-6">
            Our Expertise
          </Typography>
          <Typography className="text-gray-700 text-lg leading-relaxed text-center mb-6">
            With a diverse portfolio of projects, we bring a wealth of
            experience and specialized knowledge to every job. Our services
            include:
          </Typography>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mt-4 space-y-4">
            <li>
              <strong>Project Management:</strong> Comprehensive oversight from
              inception to completion, ensuring your project is managed
              effectively and efficiently.
            </li>
            <li>
              <strong>Construction and Engineering:</strong> Expert construction
              and engineering services for residential, commercial, and
              industrial projects, delivered with precision and skill.
            </li>
            <li>
              <strong>Design and Planning:</strong> Innovative design and
              meticulous planning that turn your ideas into reality while
              adhering to all regulatory requirements.
            </li>
            <li>
              <strong>Construction Approvals:</strong> Streamlined management of
              construction approvals and compliance to keep your project moving
              forward without delays.
            </li>
            <li>
              <strong>Sustainable Solutions:</strong> Commitment to sustainable
              building practices and eco-friendly solutions that promote
              environmental responsibility.
            </li>
          </ul>
        </Card>
      </motion.section>
    </div>
  );
};

export default AboutUs;
