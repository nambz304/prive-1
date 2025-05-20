import React from 'react';
interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const LocationSection: React.FC<SectionProps> = ({ t }) => {
  const locationFeatures = [{
    icon: "🏙️",
    title: 'superConnected',
    description: 'superConnectedDesc'
  }, {
    icon: "🛣️",
    title: 'adjacentInternationalUrbanAreas',
    description: 'adjacentInternationalUrbanAreasDesc'
  }, {
    icon: "🏥",
    title: 'anticipatingMajorPlans',
    description: 'anticipatingMajorPlansDesc'
  }, {
    icon: "🌉",
    title: 'threeWaterSides',
    description: 'threeWaterSidesDesc'
  }];
  return <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.locationTitle}</h2>
          <p>{t.locationSubtitle}</p>
          <div className="mt-6">
            <img
              src="/web_image/viTri_2.jpg"
              alt="Vị trí dự án Privé"
              className="w-full lg:w-4/5 h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="animate-on-scroll">
            <h3 className="text-xl font-bold text-prive mb-6">{t.positionAdvantages}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locationFeatures.map((feature, index) => <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{t[feature.title]}</h4>
                  <p className="text-gray-600">{t[feature.description]}</p>
                </div>)}
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img alt="Vị trí dự án Privé" src="/lovable-uploads/2bcf6504-c315-418a-99c4-15564ed0ecb2.jpg" className="w-full h-full object-contain" />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 text-white p-4">
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://zalo.me/0346697531"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-prive text-white py-3 px-6 rounded-lg shadow-md hover:bg-prive-dark transition-colors animate-zoom-bounce"
          >
            {t.viewExactPosition}
          </a>
        </div>
      </div>
    </section>;
};
export default LocationSection;