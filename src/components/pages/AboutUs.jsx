import { FaHeadset, FaTag } from "react-icons/fa";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { GiTakeMyMoney } from "react-icons/gi";
import { aboutus } from "../../assets"; // assuming you have an asset for the image

const AboutUs = () => {
  return (
    <div className="font-sans">
      {/* Hero Section with Overlay */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center justify-center"
        style={{
          backgroundImage: `url(${aboutus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content text-center relative z-10">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-gray-100 py-12 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#304F47]">
            Welcome to Viva Vista Vacations!
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Where every journey is a vibrant masterpiece.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            At Viva Vista Vacations, we believe that travel should be an
            enriching and inspiring experience, not just a checklist of sights.
            We're passionate about crafting unique and unforgettable journeys
            that cater to your individual desires and inspire you to truly live,
            explore, and connect.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about bg-[#304F47] text-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Viva Vista: A Philosophy Beyond Travel
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            <strong>Viva:</strong> We encourage you to embrace life with
            passion, to live fully and experience the world with open arms.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            <strong>Vista:</strong> We believe in showcasing the world's hidden
            gems, breathtaking landscapes, and captivating stories that lie
            beyond the well-trodden paths.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="feature flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
              <div className="text-5xl text-deep-orange-600 mb-4">
                <GiTakeMyMoney />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Curated Experiences
              </h3>
              <p className="text-center text-gray-600">
                We go beyond the ordinary, handpicking authentic experiences
                that immerse you in local culture and breathtaking landscapes.
              </p>
            </div>
            <div className="feature flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
              <div className="text-5xl text-deep-orange-600 mb-4">
                <FaTag />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Service
              </h3>
              <p className="text-center text-gray-600">
                We listen to your dreams and tailor your vacation to your
                specific interests, budget, and travel style.
              </p>
            </div>
            <div className="feature flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
              <div className="text-5xl text-deep-orange-600 mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Unwavering Commitment
              </h3>
              <p className="text-center text-gray-600">
                From consultation to farewell, our dedicated team ensures a
                seamless and stress-free experience.
              </p>
            </div>
            <div className="feature flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
              <div className="text-5xl text-deep-orange-600 mb-4">
                <HiMiniShieldCheck />
              </div>
              <h3 className="text-xl font-semibold mb-2">ATOL Protected</h3>
              <p className="text-center text-gray-600">
                Enjoy complete peace of mind with our fully ATOL-protected
                holidays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Explore Section */}
      <section className="why-choose bg-[#304F47] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Embark on Your Next Adventure?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our website to discover a world of possibilities, from
            breathtaking island escapes to exhilarating city adventures. Let
            Viva Vista Vacations be your guide to crafting the perfect journey,
            one that leaves you with memories that will last a lifetime.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-[#304F47] font-bold rounded-lg shadow-lg hover:bg-gray-200">
            Start Planning Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
