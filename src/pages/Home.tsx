import { useAppSelector } from '@/redux/hooks';

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log('🌼 🔥🔥 file: Home.tsx:6 🔥🔥 Home 🔥🔥 user🌼', user);

  return <div className="pt-20">{user?.email}</div>;
};

export default Home;
