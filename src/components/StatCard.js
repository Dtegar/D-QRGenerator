import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon, value, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="text-orange-400 mb-3 flex justify-center">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

export default StatCard;