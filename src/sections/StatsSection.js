import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import { FaTruck, FaUsers, FaMapMarkedAlt, FaCalendarCheck } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    {
      icon: <FaTruck size={36} />,
      value: '10+',
      label: 'Armada Kendaraan'
    },
    {
      icon: <FaUsers size={36} />,
      value: '500+',
      label: 'Pelanggan Puas'
    },
    {
      icon: <FaMapMarkedAlt size={36} />,
      value: '25+',
      label: 'Wilayah Terlayani'
    },
    {
      icon: <FaCalendarCheck size={36} />,
      value: '5+',
      label: 'Tahun Pengalaman'
    }
  ];

  return (
    <section id="stats" className="py-16 bg-teal-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;