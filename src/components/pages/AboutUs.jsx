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

      {/* About Section */}
      <section className="about bg-[#304F47] text-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">
            About Viva Vista Vacation
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Viva Vista Vacation LTD is a well-established, independent travel
            agency committed to creating unforgettable travel experiences
            tailored to your preferences. With over 15 years of experience, we
            specialize in crafting the perfect holiday packages, ensuring
            seamless and extraordinary travel experiences.
          </p>
          <p className="text-lg text-gray-300 mb-6 text-center">
            <strong>Company Number:</strong> 16227067
            <br />
            <strong>Registered Office Address:</strong> 01, 195-197 Wood Street,
            London, England, E17 3NU
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
                Financial Protection
              </h3>
              <p className="text-center text-gray-600">
                Book with confidence knowing we are PTS members and all holidays
                are ATOL protected.
              </p>
            </div>
            <div className="feature flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
              <div className="text-5xl text-deep-orange-600 mb-4">
                <FaTag />
              </div>
              <h3 className="text-xl font-semibold mb-2">Price Match</h3>
              <p className="text-center text-gray-600">
                We pride ourselves on our customer service and high level of
                repeat business.
              </p>
            </div>
            <div className="feature flex flex-col items-center p-6 bg-white shadow-lg rounded-xl">
              <div className="text-5xl text-deep-orange-600 mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-center text-gray-600">
                We provide round-the-clock customer service to assist you
                anytime.
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

      {/* Why Choose Section */}
      <section className="why-choose bg-[#304F47] text-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose Viva Vista Vacations?
          </h2>
          <ul className="text-lg space-y-4 max-w-3xl mx-auto">
            <li>
              ✔ <strong>Tailor-Made Travel Experiences:</strong> Customized
              holidays that suit your needs.
            </li>
            <li>
              ✔ <strong>Best Value & Competitive Prices:</strong> Affordable
              deals without compromising quality.
            </li>
            <li>
              ✔ <strong>Worldwide Travel Solutions:</strong> From hotels and
              flights to adventure packages and tours.
            </li>
            <li>
              ✔ <strong>Trusted Service & Expertise:</strong> A professional
              team ensuring seamless travel experiences.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
