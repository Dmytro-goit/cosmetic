import React from "react";
import {
  FaClinicMedical,
  FaUserMd,
  FaRegSmile,
  FaSyringe,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: (
        <FaClinicMedical
          className="text-4xl text-pink-600"
          aria-hidden="true"
        />
      ),
      title: "Facelift Procedures",
      desc: "Lorem ipsum sit amet consectetur adipisicing elit. Alias esse saepe modi ducimus",
      link: "#facelift",
    },
    {
      icon: <FaUserMd className="text-4xl text-pink-600" aria-hidden="true" />,
      title: "Botox & Fillers",
      desc: "Lorem ipsum sit amet consectetur adipisicing elit. Alias esse saepe modi ducimus",
      link: "#botox",
    },
    {
      icon: (
        <FaRegSmile className="text-4xl text-pink-600" aria-hidden="true" />
      ),
      title: "Laser Treatments",
      desc: "Lorem ipsum sit amet consectetur adipisicing elit. Alias esse saepe modi ducimus",
      link: "#laser",
    },
    {
      icon: <FaSyringe className="text-4xl text-pink-600" aria-hidden="true" />,
      title: "Body Contouring",
      desc: "Lorem ipsum sit amet consectetur adipisicing elit. Alias esse saepe modi ducimus",
      link: "#contouring",
    },
  ];

  return (
    <section
      id="services"
      className=" py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-center mb-16"
        >
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Our <span className="text-pink-600">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            consectetur adipisicing elit. Debitis excepturi recusandae
            perferendis magni minus!
          </p>
        </header>
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <li key={index}>
              <article
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300
              hover:translate-y-[-5px] h-full flex flex-col"
              >
                <figure className="mb-6">{service.icon}</figure>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 m-6 flex-grow"> {service.desc}</p>
                <a
                  href={service.link}
                  className="text-pink-600 font-medium hover:text-pink-700 transition
                  flex items-center mt-auto"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </article>
            </li>
          ))}
        </ul>
        <footer
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Ready to transform your look?
          </h3>
          <a
            href="#appointment"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full
            inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
            aria-label="Book your consultation now"
          >
            Book Your Consultation Now
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Services;
