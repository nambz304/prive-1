import React from 'react';
interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const OverviewSection: React.FC<SectionProps> = ({ t }) => {
  const projectDetails = [
    { key: 'projectName', value: 'The Privé' },
    { key: 'location', value: t.locationDetail },
    { key: 'investor', value: t.investorDetail },
    { key: 'designConsultant', value: t.designConsultantDetail },
    { key: 'constructionUnit', value: t.constructionUnitDetail },
    { key: 'area', value: t.areaDetail },
    { key: 'scale', value: t.scaleDetail },
    { key: 'productTypes', value: t.productTypesDetail },
    { key: 'productArea', value: t.productAreaDetail },
    { key: 'highlightedUtilities', value: t.highlightedUtilitiesDetail },
    { key: 'legal', value: t.legalDetail },
    { key: 'handoverMaterials', value: t.handoverMaterialsDetail },
    { key: 'handoverTime', value: t.handoverTimeDetail },
    { key: 'partnerBanks', value: t.partnerBanksDetail },
  ];
  return <section id="overview" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.projectOverview}</h2>
          <p>{t.detailedInformation}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-gray-100">
          <div className="lg:col-span-2">
              <img alt="Privé Building" className="w-full lg:w-[78%] h-full object-cover mx-auto" src="/lovable-uploads/9a274b96-1cc0-45bc-813e-ad4620d51bc2.jpg" />
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-prive">{t.detailedInformation}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {projectDetails.map((detail, index) => <div key={index} className="border-b border-gray-700 pb-3">
                    <span className="text-sm text-gray-400">{t[detail.key]}</span>
                    <p className="font-medium text-white">{detail.value}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OverviewSection;
