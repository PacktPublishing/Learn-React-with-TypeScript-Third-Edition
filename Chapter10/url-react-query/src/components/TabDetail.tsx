import { useSearchParams } from 'next/navigation';
import { Profile } from './Profile';
import { Hobbies } from './Hobbies';
import { Address } from './Address';

export function TabDetail() {
  const params = useSearchParams();
  const activeTab = params.get('tab');
  if (activeTab === 'profile') {
    return <Profile />;
  }
  if (activeTab === 'hobbies') {
    return <Hobbies />;
  }
  return <Address />;
}
