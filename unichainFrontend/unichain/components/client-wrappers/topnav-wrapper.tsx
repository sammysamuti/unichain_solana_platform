'use client';

import dynamic from 'next/dynamic';
import Loading from '@/app/loading';

const TopNav = dynamic(
  () => import('@/components/top-nav').then(mod => mod.TopNav),
  {
    loading: () => <Loading />,
    ssr: false
  }
);

export function ClientTopNav() {
  return <TopNav />;
}
