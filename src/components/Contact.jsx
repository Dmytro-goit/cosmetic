import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setFormValues } from "../store/formSlice";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import contactImg from "../assets/contactImg.png";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name is entered incorrectly")
    .required("Name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  service: yup.string().required("Service selection is required"),
  message: yup
    .string()
    .min(10, "Message is too short")
    .max(50, "Message is too long"),
});

const Contact = () => {
  const dispatch = useDispatch();

  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-pink-600 text-xl" />,
      title: "Our Location",
      content: (
        <p className="text-gray-600">
          123 Beauty Avenue, Medical District <br />
          London
        </p>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-pink-600 text-xl" />,
      title: "Phone Numbers",
      content: (
        <p className="text-gray-600">
          Appointments:
          <a href="#" className="hover:text-pink-600">
            +44 11 234 5678
          </a>
          <br />
          Emergency:
          <a href="#" className="hover:text-pink-600">
            +44 11 234 5678
          </a>
          <br />
        </p>
      ),
    },
    {
      icon: <FaEnvelope className="text-pink-600 text-xl" />,
      title: "Email",
      content: (
        <p className="text-gray-600">
          <a href="#" className="hover:text-pink-600">
            info@glamorclinic.com
          </a>
          <br />
          <a href="#" className="hover:text-pink-600">
            appoin@glm.com
          </a>
          <br />
        </p>
      ),
    },
    {
      icon: <FaClock className="text-pink-600 text-xl" />,
      title: "Working Hours",
      content: (
        <p className="text-gray-600">
          Sunday - Thursday: 9:00 AM - 8.00 PM <br />
          Friday: 2.00 PM - 9.00 PM <br />
          Saturday: Closed
        </p>
      ),
    },
  ];

  const services = [
    { value: "botox", label: "Botox Treatments" },
    { value: "fillers", label: "Dermal Fillers" },
    { value: "laser", label: "Laser Therapy" },
    { value: "facelift", label: "Mon-Surgical Facelift" },
    { value: "other", label: "Other" },
  ];

  return (
    <article
      id="contact"
      className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full
          bg-pink-100 opacity-30 z-0"
          ></div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Contact <span className="text-pink-600">Our Clinic</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam,
            hic rem minima minus, ill
          </p>
        </header>
        <main className="flex flex-col lg:flex-row gap-12">
          <aside data-aos="fade-up" data-aos-delay="500" className="lg:w-2/5">
            <section className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl text-gray-800 mb-6">Get in Touch</h2>
              <address className="space-y-6">
                {contactItems.map((item, index) => (
                  <article key={index} className="flex items-start">
                    <figure className="bg-pink-100 p-3 rounded-full mr-4 flex-shrink-0">
                      {item.icon}
                    </figure>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      {item.content}
                    </div>
                  </article>
                ))}
              </address>
              <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
                <img
                  src={contactImg}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 "
                  width="400"
                  height="200"
                  loading="lazy"
                />
              </figure>
            </section>
          </aside>
          <section data-aos="fade-up" data-aos-delay="600" className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                  email: "",
                  service: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  dispatch(setFormValues(values));
                  alert("Form submitted!");

                  actions.resetForm();
                }}
              >
                <Form className="space-y-6">
                  <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full name
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-600 mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent"
                        placeholder="+44 XX XXX XXX"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-600 mt-1"
                      />
                    </div>
                  </fieldset>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Service Intersted In
                    </label>

                    <Field
                      as="select"
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="service"
                      component="div"
                      className="text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent"
                      placeholder="Tell us about your concerns or question"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className=" bg-pink-700 text-white px-8 py-3 rounded-full
                    transition shadow-lg w-full md:w-auto"
                      aria-label="Submit contact from"
                    >
                      Send Message
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </section>
        </main>
        <figure
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-012%2C51.50%2C-0.10%2C51.52&layer=mapnik"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Clinic Location Map"
            className="rounded-2xl"
            aria-label="Map showing clinic location"
          ></iframe>
        </figure>
      </div>
    </article>
  );
};

export default Contact;
