import { GeneralSettings } from '@/components/GeneralSettings';
import { Title } from '@/components/layout/Title';
import { GeistLink } from '@/components/ui/GeistLink';
import { Tabs } from '@geist-ui/core';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SPA-Geist</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Tabs initialValue='7'>
        <Tabs.Item label='Overview' value='1'>
          <Title>Overview</Title>
        </Tabs.Item>
        <Tabs.Item label='Reports' value='2'>
          <Title>Reports</Title>
        </Tabs.Item>
        <Tabs.Item label='Activity' value='3'>
          <Title>Activity</Title>
        </Tabs.Item>
        <Tabs.Item label='Domains' value='4'>
          <Title>Domains</Title>
        </Tabs.Item>
        <Tabs.Item label='Usage' value='5'>
          <Title>Usage</Title>
        </Tabs.Item>
        <Tabs.Item label='Integrations' value='6'>
          <Title>Integrations</Title>
        </Tabs.Item>
        <Tabs.Item label='Settings' value='7'>
          <Title>Personal Account Settings</Title>
          <div className='flex flex-row justify-center p-12'>
            <div className='flex flex-row'>
              <div className='p-4'>
                <nav className='flex flex-col mr-4'>
                  <GeistLink href={''}>General</GeistLink>
                  <GeistLink href={''}>Advanced</GeistLink>
                  <GeistLink href={''}>Theme</GeistLink>
                  <GeistLink href={''}>Other</GeistLink>
                  <GeistLink href={''}>Teams</GeistLink>
                </nav>
              </div>
              <div className='w-[910px] space-y-8'>
                <GeneralSettings />
              </div>
            </div>
          </div>
        </Tabs.Item>
      </Tabs>

      {/* <EmailVerify /> */}
    </>
  );
}
