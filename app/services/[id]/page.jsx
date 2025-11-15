/* eslint-disable @next/next/no-img-element */
import React from "react";

const ServiceDetailPage = async ({ params }) => {
  const resolveId = await params;
  const id = resolveId.id;

  const services = [
  {
    _id: "65fa1b2c3d4e5f0011223344",
    service_name: "Home Cleaning Service",
    service_image: "https://i.ibb.co/9kmcLH01/Home-Cleaning1.jpg",
    service_description:
      "Professional home deep-cleaning service by trained cleaners. We provide thorough cleaning of all rooms, kitchens, bathrooms, floors, and furniture, using safe and eco-friendly cleaning products. Perfect for maintaining a hygienic and fresh living environment.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223345",
    service_name: "AC Repair & Maintenance",
    service_image: "https://i.ibb.co/qYs76ykF/AC-Repair-Maintenance-2.jpg",
    service_description:
      "AC repair, gas refill, servicing, and overall maintenance. Our experts handle installation, cleaning of filters, checking coolant levels, fixing mechanical or electrical faults, ensuring your air conditioner works efficiently and saves energy.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223346",
    service_name: "Electrician Support",
    service_image: "https://i.ibb.co/KjKLCxG2/Electrician-Support-3.jpg",
    service_description:
      "Fan, light, wiring, switchboard fixing — all electrical tasks. Certified electricians provide safe and reliable solutions for residential and commercial electrical issues, including rewiring, socket installation, and troubleshooting short circuits or power failures.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223347",
    service_name: "Plumbing Service",
    service_image: "https://i.ibb.co/v4VHk4v0/Plumbing-Service-4.jpg",
    service_description:
      "Leak fixing, pipe replacement, and all plumbing-related works. Our skilled plumbers handle bathroom and kitchen repairs, pipe installation, drainage unclogging, and regular maintenance to prevent water damage and ensure smooth plumbing.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223348",
    service_name: "Car Wash & Detailing",
    service_image: "https://i.ibb.co/zhTyRZqk/Car-Wash-Detailing-5.jpg",
    service_description:
      "Premium car wash, polish, and exterior/interior detailing. We clean every corner of your vehicle, including engine bay, tires, upholstery, and windows, using high-quality products to restore shine, remove dirt, and protect paint from scratches or corrosion.",
  },
  {
    _id: "65fa1b2c3d4e5f0011223349",
    service_name: "Home Painting",
    service_image: "https://i.ibb.co/F4qFTzC0/Home-Painting-6.jpg",
    service_description:
      "Interior & exterior painting service by professional painters. We use premium quality paints and techniques to provide smooth, long-lasting finishes. Services include wall preparation, primer application, multiple coats, and detailed finishing touches to transform your space.",
  },
  {
    _id: "65fa1b2c3d4e5f001122334a",
    service_name: "Mobile Repair Service",
    service_image: "https://i.ibb.co/RGgGqRhk/Mobile-Repair-Service.jpg",
    service_description:
      "Mobile display replacement, battery change, and software fixes. Our certified technicians diagnose and repair hardware or software issues, restore device performance, replace screens, batteries, cameras, and provide virus removal or system upgrades.",
  },
  {
    _id: "65fa1b2c3d4e5f001122334b",
    service_name: "Web Design & Development",
    service_image: "https://i.ibb.co/cS75gSkc/Web-Design-Development.jpg",
    service_description:
      "Responsive web design and full-stack development services. We create modern, user-friendly websites with responsive layouts, fast loading, SEO optimization, and secure back-end systems. Includes e-commerce, blogs, business sites, and custom web applications.",
  },
  {
    _id: "65fa1b2c3d4e5f001122334c",
    service_name: "CCTV Installation",
    service_image: "https://i.ibb.co/SXwBrX9Z/CCTV-Installation.jpg",
    service_description:
      "CCTV setup, configuration, and monitoring system installation. We provide end-to-end security solutions including camera installation, DVR/NVR setup, remote monitoring, motion detection, and maintenance to ensure your home or business is protected 24/7.",
  },
  {
    _id: "65fa1b2c3d4e5f001122334d",
    service_name: "Graphic Design Service",
    service_image: "https://i.ibb.co/Rn4NZJP/Graphic-Design-Service.jpg",
    service_description:
      "Logo, banner, poster, and all branding-related graphic design. Our creative designers craft professional graphics that elevate your brand, including social media visuals, marketing materials, brochures, and digital content with attention to aesthetics and brand identity.",
  },
];

  const singleData = services.find((service) => service._id === id);

  if(singleData){
return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left: Content */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-8">{singleData.service_name}</h1>
          <p className="text-lg leading-relaxed">{singleData.service_description}</p>

          <div className="p-4 border rounded-lg bg-gray-100 mt-4">
            <p className="text-sm text-gray-500">
              <strong>Service ID:</strong> {singleData._id}
            </p>
          </div>
        </div>

        {/* Right: Image full height of content */}
        <div className="md:w-1/2 h-full">
          <img
            src={singleData.service_image}
            alt={singleData.service_name}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
  }else{
    return(
      <>
      <p>Not Found Service</p>
      </>
    )
  }

  
};

export default ServiceDetailPage;
