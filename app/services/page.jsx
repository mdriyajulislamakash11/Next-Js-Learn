import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const services = [
  {
    _id: "65fa1b2c3d4e5f0011223344",
    service_name: "Home Cleaning Service",
    service_image: "https://i.ibb.co/9kmcLH01/Home-Cleaning1.jpg",
    service_description:
      "Professional home deep-cleaning service by trained cleaners.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223345",
    service_name: "AC Repair & Maintenance",
    service_image: "https://i.ibb.co/qYs76ykF/AC-Repair-Maintenance-2.jpg",
    service_description:
      "AC repair, gas refill, servicing, and overall maintenance.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223346",
    service_name: "Electrician Support",
    service_image: "https://i.ibb.co/KjKLCxG2/Electrician-Support-3.jpg",
    service_description:
      "Fan, light, wiring, switchboard fixing — all electrical tasks.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223347",
    service_name: "Plumbing Service",
    service_image: "https://i.ibb.co/v4VHk4v0/Plumbing-Service-4.jpg",
    service_description:
      "Leak fixing, pipe replacement, and all plumbing-related works.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223348",
    service_name: "Car Wash & Detailing",
    service_image: "https://i.ibb.co/zhTyRZqk/Car-Wash-Detailing-5.jpg",
    service_description:
      "Premium car wash, polish, and exterior/interior detailing.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223349",
    service_name: "Home Painting",
    service_image: "https://i.ibb.co/F4qFTzC0/Home-Painting-6.jpg",
    service_description:
      "Interior & exterior painting service by professional painters.",
  },
  {
    _id: "65fa1b2c3d4e5f001122334a",
    service_name: "Mobile Repair Service",
    service_image: "https://i.ibb.co/RGgGqRhk/Mobile-Repair-Service.jpg",
    service_description:
      "Mobile display replacement, battery change, and software fixes.",
  },
  {
    _id: "65fa1b2c3d4e5f001122334b",
    service_name: "Web Design & Development",
    service_image: "https://i.ibb.co/cS75gSkc/Web-Design-Development.jpg",
    service_description:
      "Responsive web design and full-stack development services.",
  },
  {
    _id: "65fa1b2c3d4e5f001122334c",
    service_name: "CCTV Installation",
    service_image: "https://i.ibb.co/SXwBrX9Z/CCTV-Installation.jpg",
    service_description:
      "CCTV setup, configuration, and monitoring system installation.",
  },
  {
    _id: "65fa1b2c3d4e5f001122334d",
    service_name: "Graphic Design Service",
    service_image: "https://i.ibb.co/Rn4NZJP/Graphic-Design-Service.jpg",
    service_description:
      "Logo, banner, poster, and all branding-related graphic design.",
  },
];

  return (
    <div className="p-6">
      <h2 className="font-bold text-3xl mb-6">Services Page</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-xl transition"
          >
            <img
              src={service?.service_image}
              alt={service?.service_name}
              className="w-full h-48 object-cover rounded-md"
            />

            <h3 className="text-xl font-bold mt-4">{service.service_name}</h3>

            <p className=" text-sm mt-2">
              {service.service_description}
            </p>

            <Link href={`/services/${service?._id}`}>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
