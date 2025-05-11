import React from 'react';
import ImageGallery from '../ImageGallery';

const AmenitiesSection = () => {
  const amenities = [
    {
      category: "Thư Giãn & Sức Khỏe",
      items: [
        "Hồ bơi vô cực view panorama",
        "Phòng tập Gym hiện đại",
        "Khu Spa & Massage",
        "Phòng Sauna",
        "Vườn thiền Zen",
        "Đường chạy bộ cảnh quan",
      ]
    },
    {
      category: "Giải Trí & Cộng Đồng",
      items: [
        "Sky Bar tầng thượng",
        "Khu BBQ ngoài trời",
        "Phòng tiệc đa năng",
        "Khu vui chơi trẻ em",
        "Thư viện & phòng đọc sách",
        "Phòng game giải trí",
      ]
    },
    {
      category: "An Ninh & Tiện Nghi",
      items: [
        "Bảo vệ 24/7",
        "Hệ thống camera an ninh",
        "Smart Home tích hợp",
        "Thẻ từ an ninh",
        "Bãi đậu xe thông minh",
        "Dịch vụ concierge",
      ]
    },
    {
      category: "Mua Sắm & Dịch Vụ",
      items: [
        "Trung tâm thương mại",
        "Siêu thị mini",
        "Nhà hàng cao cấp",
        "Cafe sang trọng",
        "Dịch vụ giặt ủi",
        "Dịch vụ vệ sinh",
      ]
    }
  ];

  const images = [
    {
      src: "public/web_image/4_tien_ich/gym.jpg",
      alt: "Kiến trúc Privé"
    },
    {
      src: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      alt: "Không gian sống"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      alt: "Cảnh quan xung quanh"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      alt: "Không gian thư giãn"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      alt: "Nội thất hiện đại"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      alt: "Kiến trúc độc đáo"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Tiện Ích Đẳng Cấp</h2>
          <p>
            Privé mang đến hệ thống tiện ích cao cấp, đáp ứng mọi nhu cầu của cuộc sống hiện đại và đẳng cấp
          </p>
        </div>

        <div className="mb-16">
          <ImageGallery images={images} columns={3} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-prive">{amenity.category}</h3>
              <ul className="space-y-2">
                {amenity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-prive rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 prose max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600">
            Tại Privé, mỗi chi tiết đều được chăm chút tỉ mỉ để tạo nên không gian sống hoàn hảo. 
            Từ khu vực công cộng đến các tiện ích riêng tư, tất cả đều được thiết kế để nâng cao trải nghiệm sống của cư dân. 
            Đây không chỉ là nơi để ở, mà còn là không gian để tận hưởng cuộc sống, kết nối cộng đồng và tạo nên những kỷ niệm đáng nhớ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
