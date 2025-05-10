
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from '@/components/ui/dialog';

const FloorPlansSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const floorPlans = [
    {
      type: "1bedroom",
      name: "Căn hộ 1 Phòng Ngủ",
      variants: [
        {
          name: "Type A - 50m²",
          image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
          details: "Diện tích: 50m² | 1 Phòng Ngủ | 1 Phòng Tắm | Ban công"
        },
        {
          name: "Type B - 60m²",
          image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
          details: "Diện tích: 60m² | 1 Phòng Ngủ + 1 Phòng Đa Năng | 1 Phòng Tắm | Ban công Lớn"
        }
      ]
    },
    {
      type: "2bedroom",
      name: "Căn hộ 2 Phòng Ngủ",
      variants: [
        {
          name: "Type C - 75m²",
          image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
          details: "Diện tích: 75m² | 2 Phòng Ngủ | 2 Phòng Tắm | Ban công"
        },
        {
          name: "Type D - 85m²",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
          details: "Diện tích: 85m² | 2 Phòng Ngủ | 2 Phòng Tắm | 2 Ban công"
        }
      ]
    },
    {
      type: "3bedroom",
      name: "Căn hộ 3 Phòng Ngủ",
      variants: [
        {
          name: "Type E - 100m²",
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
          details: "Diện tích: 100m² | 3 Phòng Ngủ | 2 Phòng Tắm | Ban công"
        },
        {
          name: "Type F - 120m²",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
          details: "Diện tích: 120m² | 3 Phòng Ngủ | 2 Phòng Tắm | Phòng Làm Việc | 2 Ban công"
        }
      ]
    },
    {
      type: "penthouse",
      name: "Penthouse & Sky Villa",
      variants: [
        {
          name: "Sky Villa - 160m²",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
          details: "Diện tích: 160m² | 3 Phòng Ngủ | 3 Phòng Tắm | Phòng Khách Lớn | Sân Vườn"
        },
        {
          name: "Penthouse - 200m²",
          image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
          details: "Diện tích: 200m² | 4 Phòng Ngủ | 4 Phòng Tắm | Phòng Giải Trí | Sân Vườn | Hồ Bơi Riêng"
        }
      ]
    }
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="floor-plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Mặt Bằng Dự Án</h2>
          <p>
            Đa dạng các loại căn hộ được thiết kế tối ưu công năng, mang đến không gian sống lý tưởng
          </p>
        </div>

        <Tabs defaultValue="1bedroom" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-6 bg-transparent">
            {floorPlans.map((plan) => (
              <TabsTrigger 
                key={plan.type} 
                value={plan.type}
                className="px-6 py-3 rounded-md data-[state=active]:bg-prive data-[state=active]:text-white"
              >
                {plan.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {floorPlans.map((plan) => (
            <TabsContent key={plan.type} value={plan.type} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plan.variants.map((variant, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div 
                      className="h-64 overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(variant.image)}
                    >
                      <img 
                        src={variant.image} 
                        alt={variant.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-prive">{variant.name}</h3>
                      <p className="text-gray-600">{variant.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-gray-600">
                  Liên hệ với chúng tôi để nhận thêm thông tin chi tiết về mặt bằng và thiết kế nội thất của từng loại căn hộ.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Lightbox for floor plans */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Floor plan detail"
                className="max-h-[80vh] max-w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FloorPlansSection;
