import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import { List } from '@telegram-apps/telegram-ui';
import { CellSection } from '@/components/CellSection.tsx';
import { FormSection } from '@/components/FormSection/FormSection.tsx';
import { BannerSection } from '@/components/BannerSection.tsx';
import { TimelineSection } from '@/components/TimelineSection/TimelineSection.tsx';
import { TooltipSection } from '@/components/TooltipSection/TooltipSection.tsx';
import { ModalSection } from '@/components/ModalSection/ModalSection.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        <CellSection />
        <FormSection />
        <BannerSection />
        <TimelineSection />
        <TooltipSection />
        <ModalSection />
      </List>
    </Page>
  );
};
