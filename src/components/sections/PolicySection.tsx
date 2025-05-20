import React from 'react';
import { Button } from '@/components/ui/button';
import ProjectImagesSectionComponent from './ProjectImagesSection';

interface SectionProps {
  t: typeof import('@/lib/translations').default['vi'];
}

const PolicySection: React.FC<SectionProps> = ({ t }) => {
  const policies = [
    {
      title: t.policyDiscount,
      details: [
        { title: t.discount3, description: t.earlyBooking },
        { title: t.discount12, description: t.bulkBuy },
        { title: t.discount2, description: t.priority, subDetails: [
          t.loyalCustomer, t.shareholder, t.bankEmployee
        ]}
      ]
    },
    {
      title: t.policyFinance,
      details: [
        { title: t.lowInitialPayment, description: t.lowInitialPaymentDesc },
        { title: t.bankSupport, description: t.bankSupportDesc },
        { title: t.interestSupport, description: t.interestSupportDesc },
        { title: t.gracePeriod, description: t.gracePeriodDesc },
        { title: t.manyBanks, description: t.manyBanksDesc }
      ]
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0346697531', '_blank');
  };

  return (
    <section id="policy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>{t.policy}</h2>
          <p>{t.policyDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-prive transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-prive">{policy.title}</h3>
              <ul className="space-y-3">
                {policy.details.map((detail, idx) => (
                  <li key={idx} className="flex flex-col items-start">
                    <span className="text-prive font-bold">{detail.title}</span>
                    <span className="text-gray-700">{detail.description}</span>
                    {detail.subDetails && (
                      <ul className="mt-2 space-y-1 pl-4 list-disc">
                        {detail.subDetails.map((subDetail, subIdx) => (
                          <li key={subIdx} className="text-gray-600">{subDetail}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            {t.policyContactDesc}
          </p>
          <Button onClick={openZalo} className="bg-prive hover:bg-prive-dark" size="lg">{t.policyConsultBtn}</Button>
        </div>

        {/* Add spacing before ProjectImagesSection */}
        <div className="mt-12"></div>

        <ProjectImagesSectionComponent 
          images={[
            { src: "/web_image/7_HinhAnhDuAn/shopHouse.jpg", alt: t.lobbyAlt },
            { src: "/web_image/7_HinhAnhDuAn/sanPickleBall.jpg", alt: t.modernLivingAlt },
            { src: "/web_image/7_HinhAnhDuAn/sanTheThapDaNang.jpg", alt: t.projectRenderAlt }
          ]}
          onContact={() => window.open('https://zalo.me/0346697531', '_blank')}
          t={t}
        />
      </div>
    </section>
  );
};

export default PolicySection;
