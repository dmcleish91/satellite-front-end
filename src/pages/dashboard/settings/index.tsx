import { GeneralSettings } from '@/components/GeneralSettings';
import { Title } from '@/components/layout/Title';
import { GeistLink } from '@/components/ui/GeistLink';

export default function Dashboard() {
  return (
    <>
      <Title>Personal Account Settings</Title>
      <div className='flex flex-row justify-center p-12 bg-[#fafafa]'>
        <div className='flex flex-row space-x-4'>
          <nav className='flex flex-col'>
            <GeistLink route={''}>General</GeistLink>
            <GeistLink route={''}>Advanced</GeistLink>
            <GeistLink route={''}>Theme</GeistLink>
            <GeistLink route={''}>Other</GeistLink>
            <GeistLink route={''}>Teams</GeistLink>
          </nav>
          <div className='w-[910px] space-y-8'>
            <GeneralSettings />
          </div>
        </div>
      </div>
    </>
  );
}
