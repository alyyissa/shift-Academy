import { useState,useEffect } from 'react';
import Hero from '../components/Home/Hero'
import Loading from '../components/Loading/Loading';
import Stats from '../components/Home/Stats';
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';

const Home = () => {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;
  return (
    <div>
      <Hero />
      <Stats />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Home
