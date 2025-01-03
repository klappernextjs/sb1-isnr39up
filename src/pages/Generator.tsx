import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/generator/kittie/Tabs';
import WalletRequired from '../components/auth/WalletRequired';
import StudioLayout from '../components/generator/studio/StudioLayout';
import StudioCanvas from '../components/generator/studio/StudioCanvas';
import TraitControls from '../components/generator/studio/TraitControls';
import KittieBuilder from '../components/generator/kittie/KittieBuilder';
import { CatTraits, defaultTraits } from '../types/CatTraits';
import { ProfileProvider } from '../components/profile/ProfileContext';

export default function Generator() {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [traits, setTraits] = React.useState<CatTraits>(defaultTraits);

  const handleComplete = () => {
    setTimeout(() => navigate('/profile'), 100);
  };

  return (
    <WalletRequired>
      <ProfileProvider>
        <Tabs defaultValue="studio">
          <TabsList>
            <TabsTrigger value="studio">Vector Studio</TabsTrigger>
            <TabsTrigger value="kittie">Create KittieAgent</TabsTrigger>
          </TabsList>

          <TabsContent value="studio">
            <StudioLayout>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-[320px] order-2 lg:order-1">
                  <TraitControls 
                    traits={traits} 
                    onChange={setTraits} 
                  />
                </div>
                <div className="w-full lg:flex-1 order-1 lg:order-2">
                  <StudioCanvas 
                    traits={traits}
                    onReset={() => setTraits(defaultTraits)}
                    onComplete={handleComplete}
                  />
                </div>
              </div>
            </StudioLayout>
          </TabsContent>

          <TabsContent value="kittie">
            <KittieBuilder />
          </TabsContent>
        </Tabs>
      </ProfileProvider>
    </WalletRequired>
  );
}