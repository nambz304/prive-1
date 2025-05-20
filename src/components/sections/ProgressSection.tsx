import React from 'react';
import { Progress } from '@/components/ui/progress';

const ProgressSection = ({ t }) => {
  const constructionProgress = [
    { 
      stage: "Thiết kế & Quy hoạch",
      status: "Hoàn thành",
      progress: 100,
      description: "Hoàn thành việc thiết kế chi tiết và quy hoạch tổng thể dự án.",
      date: "Q3/2023"
    },
    { 
      stage: "Chuẩn bị mặt bằng",
      status: "Hoàn thành",
      progress: 100,
      description: "San lấp mặt bằng, chuẩn bị công trường và hạ tầng cơ bản.",
      date: "Q4/2023"
    },
    { 
      stage: "Móng & Tầng hầm",
      status: "Hoàn thành",
      progress: 100,
      description: "Hoàn thành xây dựng phần móng và các tầng hầm.",
      date: "Q1/2024"
    },
    { 
      stage: "Kết cấu chính",
      status: "Đang thực hiện",
      progress: 70,
      description: "Xây dựng kết cấu chính của các tòa tháp, đang hoàn thiện đến tầng 18.",
      date: "Q2/2024 - Q4/2024"
    },
    { 
      stage: "Hoàn thiện bên ngoài",
      status: "Đang thực hiện",
      progress: 40,
      description: "Lắp đặt kính, hoàn thiện mặt ngoài tòa nhà.",
      date: "Q3/2024 - Q1/2025"
    },
    { 
      stage: "Hoàn thiện bên trong",
      status: "Chưa bắt đầu",
      progress: 0,
      description: "Thi công nội thất, hệ thống điện, nước, PCCC cho các căn hộ.",
      date: "Q4/2024 - Q3/2025"
    },
    { 
      stage: "Tiện ích công cộng",
      status: "Chưa bắt đầu",
      progress: 0,
      description: "Xây dựng và hoàn thiện các tiện ích công cộng của dự án.",
      date: "Q1/2025 - Q3/2025"
    },
    { 
      stage: "Nghiệm thu & Bàn giao",
      status: "Chưa bắt đầu",
      progress: 0,
      description: "Kiểm tra, nghiệm thu và chuẩn bị bàn giao cho khách hàng.",
      date: "Q4/2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Hoàn thành":
        return "text-green-600";
      case "Đang thực hiện":
        return "text-blue-600";
      default:
        return "text-gray-500";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500";
    if (progress > 0) return "bg-blue-500";
    return "bg-gray-300";
  };

  return (
    <section id="progress" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.progressTitle}</h2>
          <p>{t.progressDesc}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm">
          <div className="flex justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold text-prive">{t.totalProgress}</h3>
              <p className="text-gray-600">{t.updated}: Tháng 5/2024</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-prive">51%</span>
              <p className="text-gray-600">{t.completed}</p>
            </div>
          </div>
          
          <Progress value={51} className="h-3 mb-10" />
          
          <div className="space-y-8">
            {constructionProgress.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <div className="flex flex-wrap justify-between mb-2">
                  <h4 className="text-lg font-medium">{item.stage}</h4>
                  <span className={`font-semibold ${getStatusColor(item.status)}`}>{item.status}</span>
                </div>
                
                <Progress 
                  value={item.progress} 
                  className={`h-2 mb-3 ${getProgressColor(item.progress)}`}
                />
                
                <div className="flex flex-wrap justify-between text-sm">
                  <p className="text-gray-600 max-w-lg">{item.description}</p>
                  <span className="text-gray-500">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt={t.constructionAlt} 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt={t.renderAlt} 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
