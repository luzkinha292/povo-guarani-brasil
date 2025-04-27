
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="mb-10 text-center">
      {icon && <div className="inline-block mb-3 text-guarani-green">{icon}</div>}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-guarani-dark relative decorative-line">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-guarani-dark/80 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
