
import React from 'react';

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Privé - Căn Hộ Cao Cấp",
    "description": "Dự án căn hộ cao cấp Privé tại Thủ Đức - Không gian sống đẳng cấp với tiện ích hiện đại từ Tập đoàn Đất Xanh",
    "image": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "telephone": "+84346697531",
    "email": "info@privedatxanh.vn",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phường An Phú",
      "addressLocality": "Thành phố Thủ Đức",
      "addressRegion": "TP. Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.800720",
      "longitude": "106.721510"
    },
    "url": "https://your-domain.com",
    "sameAs": [
      "https://zalo.me/0346697531"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:30",
      "closes": "17:30"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;
