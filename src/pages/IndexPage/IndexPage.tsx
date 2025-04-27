import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import styles from './IndexPage.module.css';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div className={styles.container}>
        <h1 className={styles.title}>Telegram Mini App</h1>
      </div>
    </Page>
  );
};
