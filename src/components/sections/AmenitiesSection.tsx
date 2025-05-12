import React from 'react';
import ImageGallery from '../ImageGallery';

const AmenitiesSection = () => {
  const amenities = [
    {
      category: "Thư Giãn & Sức Khỏe",
      items: [
        "3 hồ bơi điện phân muối liên hoàn 3000m2",
        "Phòng tập Gym hiện đại",
        "Sân tenis, bóng rổ, pickle ball",
        "Cinema & Karaoke, bóng bàn, bida",
        "Công viên ven sông",
        "Vườn hoa, đường dạo bộ",
      ]
    },
    {
      category: "Giải Trí & Cộng Đồng",
      items: [
        "5 phòng tiệc đa năng",
        "Khu BBQ ngoài trời",
        "Khu vui chơi trẻ em",
        "Thư viện & phòng đọc sách",
        "Phòng chơi golf 3D",
      ]
    },
    {
      category: "An Ninh & Tiện Nghi",
      items: [
        "Bảo vệ 24/7",
        "Hệ thống camera an ninh",
        "Thẻ từ an ninh",
        "Bãi đậu xe thông minh",
      ]
    },
    {
      category: "Mua Sắm & Dịch Vụ",
      items: [
        "Siêu thị mini",
        "Nhà hàng",
        "Quán Cafe view sông",
        "Tiệm thuốc tây Pharmacity",
        "Trạm sạc xe điện",
      ]
    }
  ];

  const images = [
    {
      src: "/web_image/4_tien_ich/gym.jpg",
      alt: "Kiến trúc Privé"
    },
    {
      src: "/web_image/4_tien_ich/Golf_3D.jpg",
      alt: "Không gian sống"
    },
    {
      src: "/web_image/4_tien_ich/ho_boi_lumina.jpg",
      alt: "Cảnh quan xung quanh"
    },
    {
      src: "/web_image/4_tien_ich/BBQ.jpg",
      alt: "Không gian thư giãn"
    },
    {
      src: "/web_image/4_tien_ich/vui_choi_tre_em.jpg",
      alt: "Nội thất hiện đại"
    },
    {
      src: "/web_image/4_tien_ich/tram_sac_xe_dien.jpg",
      alt: "Kiến trúc độc đáo"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Tiện Ích Đẳng Cấp</h2>
          <p>
            Với hơn 50 tiện ích, The Privé mang đến hệ thống tiện ích cao cấp, đáp ứng mọi nhu cầu của cuộc sống hiện đại
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

        <div className="mt-12">
          <img
            src="/web_image/mbt_1_tienIch.jpg"
            alt="Tiện ích dự án Privé"
            className="w-full lg:w-4/5 h-auto rounded-lg shadow-md mx-auto"
          />
        </div>

        <div className="mt-12 prose max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600">
            Tại The Privé, mỗi chi tiết đều được chăm chút tỉ mỉ để tạo nên không gian sống hoàn hảo. 
            Từ khu vực công cộng đến các tiện ích riêng tư, tất cả đều được thiết kế để nâng cao trải nghiệm sống của cư dân. 
            Đây không chỉ là nơi để ở, mà còn là không gian để tận hưởng cuộc sống, kết nối cộng đồng và tạo nên những kỷ niệm đáng nhớ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
