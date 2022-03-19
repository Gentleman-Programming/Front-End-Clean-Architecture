import { getMorty, getRick } from '@/services';
import { LayoutContainer } from '@/styled-components';
import { Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';

const Component1 = () => {
  const [morty, setMorty] = useState(null);
  const getApiData = async () => {
    try {
      const result = await getMorty();
      adaptMorty(result.data);
    } catch (e) {}
  };

  const adaptMorty = (data: any) => {
    setMorty(data.name);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return <div>{morty}</div>;
};

function Component2() {
  const [rick, setRick] = useState(null);
  const getApiData = async () => {
    try {
      const result = await getRick();
      adaptRick(result.data);
    } catch (e) {}
  };

  const adaptRick = (data: any) => {
    setRick(data.name);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return <div>{rick}</div>;
}

export const Dashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  return (
    <LayoutContainer>
      <div style={{ fontSize: '3rem' }}>
        <div>Buenas buenas mi gente !</div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ fontSize: '3rem' }} label="Item One" {...a11yProps(0)} />
          <Tab style={{ fontSize: '3rem' }} label="Item Two" {...a11yProps(1)} />
        </Tabs>
        <div role="tabpanel"> {value === 0 ? <Component1 /> : <Component2 />}</div>
      </div>
    </LayoutContainer>
  );
};

export default Dashboard;
