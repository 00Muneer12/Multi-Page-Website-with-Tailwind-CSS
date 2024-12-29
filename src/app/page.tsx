import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => (
  <div className="bg-gray-50 min-h-screen">
    <header className="text-center py-5 bg-[#1a237e] text-white">
      <h2 className="text-4xl font-bold">Welcome to </h2>
      <h1 className="text-4xl font-bold pt-0"> Horizon Haven Estate</h1>

      </header>

    <nav className="text-center py-4 bg-gray-200">
      <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
    </nav>

    <section className="py-20 px-6">
      {/* <h2 className="text-3xl font-semibold text-center mb-6 text-[#1a237e]">Our Expertise</h2> */}
      <h2 className="text-3xl font-semibold text-center mb-6 text-[#1a237e]"></h2>
      
      <p className=" pt-2 text-3xl text-[#1a237e] font-extrabold mb-2 text-center">
                We are providing digital marketing solutions in  <br /><u>REAL ESTATE DEVELOPMENT.</u>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {["SEO", "Social Media Marketing", "Content Creation"].map((service) => (
          <div key={service} className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#009688]">{service}</h3>
            <p className="text-gray-600">Professional {service.toLowerCase()} to boost your business.</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 px-6 bg-[#f5f5f5]">
     
    </section>
  </div>
);

export default Home;
