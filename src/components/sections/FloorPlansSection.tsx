import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const FloorPlansSection = ({ t }) => {
  const [activeTab, setActiveTab] = useState("1pn");
  
  const floorPlans = [
    {
      id: "1pn",
      title: t.studio,
      area: "50m²",
      image: "/web_image/5_matBangCacCan/1PN.jpg",
      features: [
        `${t.areaLabel}: 50m²`,
        t.studioFeature1,
        t.studioFeature2,
        t.studioFeature3,
        t.studioFeature4,
        t.suitableForCouple
      ]
    },
    {
      id: "2pn",
      title: t.twoBedroom,
      area: "71m² - 88m²",
      image: "/web_image/5_matBangCacCan/2PN_phongKhach_bep.jpg",
      features: [
        `${t.areaLabel}: 71m² - 88m²`,
        t.twoBedroomFeature1,
        t.twoBedroomFeature2,
        t.twoBedroomFeature3,
        t.twoBedroomFeature4,
        t.suitableForFamily
      ]
    },
    {
      id: "3pn",
      title: t.threeBedroom,
      area: "98m²",
      image: "/web_image/5_matBangCacCan/3PN.jpg",
      features: [
        `${t.areaLabel}: 98m²`,
        t.threeBedroomFeature1,
        t.threeBedroomFeature2,
        t.suitableForMultiGen
      ]
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="floor-plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.floorPlansTitle}</h2>
          <p>{t.floorPlansDesc}</p>
        </div>

        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-6 bg-gray-100">
              {floorPlans.map((plan) => (
                <TabsTrigger 
                  key={plan.id} 
                  value={plan.id}
                  className="data-[state=active]:bg-prive data-[state=active]:text-white"
                >
                  {plan.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {floorPlans.map((plan) => (
              <TabsContent key={plan.id} value={plan.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-xl p-6 shadow-sm">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={plan.image}
                      alt={`${t.floorPlansTitle} ${plan.title}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-prive mb-2">{plan.title}</h3>
                    <p className="text-lg font-semibold mb-4">{plan.area}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-prive mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        onClick={openZalo} 
                        className="bg-prive hover:bg-prive-dark animate-zoom-bounce"
                      >
                        {t.getDetails}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={openZalo}
                        className="border-prive text-prive hover:bg-prive hover:text-white"
                      >
                        {t.bookConsult}
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://zalo.me/0346697531"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-prive text-white py-3 px-6 rounded-lg shadow-md hover:bg-prive-dark transition-colors animate-zoom-bounce"
          >
            {t.viewDesigns}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
