"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface MosaicItemProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  reverse?: boolean;
}

const MosaicItem = ({ title, subtitle, imageUrl, link, reverse }: MosaicItemProps) => {
  return (
    <Link href={link}>
      <motion.div
        className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} overflow-hidden rounded-lg shadow-lg group cursor-pointer`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full md:w-1/2 h-64">
          <Image
            src={imageUrl}
            alt={title}
            width={1920} // You can use the actual image dimensions or set this to full width
            height={1080} // You can adjust this as per the aspect ratio you need
            layout="responsive"
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col justify-center p-8 bg-white w-full md:w-1/2">
          <p className="text-indigo-500 text-sm uppercase">{subtitle}</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-2">{title}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default function MosaicGrid() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="w-full space-y-12">
        
        {/* 1st Section */}
        <MosaicItem
          title="Creating User-Centered Experiences to Impress and Inspire"
          subtitle="Experience Design"
          imageUrl="https://creativechaos.co/wp-content/uploads/2018/04/m-exp_des.jpg"
          link="/experience-design"
        />

        {/* 2nd Section */}
        <MosaicItem
          title="Innovate, Develop, Deliver"
          subtitle="Innovation Delivery"
          imageUrl="https://creativechaos.co/wp-content/uploads/2018/04/m-inn_del_fra.jpg"
          link="/idf"
          reverse
        />

        {/* 3rd Section */}
        <MosaicItem
          title="Why Team Integration is a Strategy, and Outsourcing is Not"
          subtitle="Team Augmentation"
          imageUrl="https://creativechaos.co/wp-content/uploads/2018/04/m-insight_04.jpg"
          link="/insights/why-team-integration-is-a-strategy-and-outsourcing-is-not/"
        />

        {/* Keep adding more sections as needed... */}
        
      </div>
    </section>
  );
}
