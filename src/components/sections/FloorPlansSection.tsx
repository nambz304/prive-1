import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const FloorPlansSection = () => {
  const [activeTab, setActiveTab] = useState("1pn");
  
  const floorPlans = [
    {
      id: "1pn",
      title: "Căn hộ Studio",
      area: "50m²",
      image: "/web_image/5_matBangCacCan/1PN.jpg",
      features: [
        "Diện tích: 50m²",
        "1 phòng ngủ, 1 phòng tắm",
        "Ban công riêng",
        "Bếp mở hiện đại",
        "Không gian linh hoạt",
        "Phù hợp cho cặp đôi, người độc thân"
      ]
    },
    {
      id: "2pn",
      title: "Căn hộ 2 Phòng ngủ",
      area: "71m² - 88m²",
      image: "/web_image/5_matBangCacCan/2PN_phongKhach_bep.jpg",
      features: [
        "Diện tích: 71m² - 88m²",
        "2 phòng ngủ, 2 phòng tắm",
        "Phòng khách rộng rãi",
        "Ban công panorama",
        "Bếp riêng biệt",
        "Phù hợp cho gia đình trẻ"
      ]
    },
    {
      id: "3pn",
      title: "Căn hộ 3 Phòng ngủ",
      area: "98m²",
      image: "/web_image/5_matBangCacCan/3PN.jpg",
      features: [
        "Diện tích: 98m²",
        "3 phòng ngủ, 2 phòng tắm",
        "Ban công rộng",
        "Phù hợp cho gia đình nhiều thế hệ"
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
          <h2>Mặt Bằng Căn Hộ</h2>
          <p>
            Đa dạng các loại hình căn hộ với thiết kế tối ưu không gian sống
          </p>
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
                      alt={`Mặt bằng ${plan.title}`}
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
                        className="bg-prive hover:bg-prive-dark"
                      >
                        Nhận thông tin chi tiết
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={openZalo}
                        className="border-prive text-prive hover:bg-prive hover:text-white"
                      >
                        Đặt lịch tư vấn
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
