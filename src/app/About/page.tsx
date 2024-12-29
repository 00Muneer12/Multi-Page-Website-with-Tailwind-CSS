import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const About: React.FC = () => (
    <div className="min-h-screen bg-slate-100">
        <header className="py-10 bg-[#1a237e] text-white text-center">
      <h1 className="text-4xl font-bold">About</h1>
    </header>        <nav className="text-center py-4 bg-gray-200">
            <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
                   </nav>
        <section className="py-20 px-6 max-w-3xl mx-auto text-center bg-slate-200">
         
            <p className="text-3xl text-blue-700 font-extrabold">
                We are providing digital marketing solutions in  <br /><u>REAL ESTATE DEVELOPMENT.</u>
            </p>
            <h2 className="text-2xl text-red-800 font-bold  ">Focused on Affordability and Inclusivity</h2>
            <ol className="text-1xl text-yellow-600 font-bold">
               <li>HomeReach Agency</li>
               <li>Affordable Abodes</li>
               <li>KeyStart Living</li>
               <li>ValueNest Realty</li>
               <li>SmartChoice Properties</li>
            </ol>
            <h2 className="text-2xl text-red-800 font-bold"> Broader Coverage and Builder-Friendly</h2>
            <ol className="text-1xl text-yellow-600 font-bold">
               <li>NextStep Realty Group</li>
               <li>Builder & Home Solution</li>
               <li>PrimeLand Living</li>
               <li>AllCity Realty Services</li>
               <li>Brick-by-Brick Estates</li>
            </ol>
        </section>
    </div>
);

export default About;
