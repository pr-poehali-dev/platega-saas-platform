import { useState } from 'react';
import Layout from '@/components/flux/Layout';
import HomeSection from '@/components/flux/HomeSection';
import CabinetSection from '@/components/flux/CabinetSection';
import SupportSection from '@/components/flux/SupportSection';
import type { Section } from '@/components/flux/types';

const Index = () => {
  const [section, setSection] = useState<Section>('home');
  const [topUp, setTopUp] = useState('5000');

  return (
    <Layout section={section} setSection={setSection}>
      {section === 'home' && <HomeSection setSection={setSection} />}
      {section === 'cabinet' && <CabinetSection topUp={topUp} setTopUp={setTopUp} />}
      {section === 'support' && <SupportSection />}
    </Layout>
  );
};

export default Index;
