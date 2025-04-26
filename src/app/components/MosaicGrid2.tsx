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
            width={1920} // Use the appropriate width for images
            height={1080} // Adjust the height for your image aspect ratio
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

export default function MosaicGridSecond() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="w-full space-y-12">
        
        {/* MVP in Action */}
        <MosaicItem
          title="MVP in Action: Learn, Iterate, and Optimize"
          subtitle="MVP in Action"
          imageUrl="https://creativechaos.co/wp-content/uploads/2018/04/m-mvp-action.jpg"
          link="/mvp-action"
        />

        {/* Four Stages of Innovation Delivery */}
        <MosaicItem
        title="From Vision to Execution: Four Stages of Innovation Delivery"
        subtitle="Innovation Delivery"
        imageUrl="/delivery.jpg"  // Correct the image path format
        link="/innovation-delivery"
        reverse
/>

        {/* Research & Insights */}
        <MosaicItem
          title="Data-Driven Decisions: Research & Insights"
          subtitle="Research & Insights"
          imageUrl="/researchinsights.jpg"
          link="/research-insights"
        />
        
        {/* Team Integration */}
        <MosaicItem
          title="Seamless Collaboration: Team Integration"
          subtitle="Team Integration"
          imageUrl="/team.jpg"
          link="/team-integration"
          reverse
        />

        {/* MVP Development */}
        <MosaicItem
          title="Rapid MVP Development: Bringing Ideas to Life"
          subtitle="MVP Development"
          imageUrl="/mvp.jpg"
          link="/mvp-development"
        />

        {/* DevOps & Cloud */}
        <MosaicItem
          title="Optimizing Workflows: DevOps & Cloud Solutions"
          subtitle="DevOps & Cloud"
          imageUrl="/devops.jpg"
          link="/devops-cloud"
          reverse
        />

      </div>
    </section>
  );
}
