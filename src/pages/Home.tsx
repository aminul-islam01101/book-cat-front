import { useAppSelector } from '@/redux/hooks';

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);
  return <div className="pt-20">{user?.email}</div>;
};

export default Home;
