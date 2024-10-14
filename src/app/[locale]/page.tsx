import {useTranslations} from 'next-intl';
import SocialMedia from '../components/socialMedia';
import Navbar from '../components/navbar';
import Profile from '../components/profile';
import Summary from '../components/summary';
import Experience from '../components/experiences';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <div className="grid grid-cols-2 h-full">
        <div className="h-full max-h-80 box-content p-20 sticky top-0">
          <Profile />
          <Navbar />
          <SocialMedia />
        </div>
        <div className="box-content p-20 overflow-y-auto">
          <Summary />
          <Experience />
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
}
