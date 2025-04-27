
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border border-guarani-gold/20 hover:border-guarani-gold transition-colors bg-white hover:bg-guarani-light">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="rounded-full p-2 bg-guarani-green/10 text-guarani-green">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-guarani-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-guarani-dark/80">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
