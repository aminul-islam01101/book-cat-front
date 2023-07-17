import React, { ReactNode } from 'react';

import Filters from './Filters';
import SearchBox from './SearchBox';

type AllBooksLandingProps = {
  children: ReactNode;
};

const AllBooksLanding: React.FC<AllBooksLandingProps> = ({ children }) => {
  console.log('first');
  return (
    <div className="pt-20">
      <SearchBox />
      <Filters />
      <div>{children}</div>
    </div>
  );
};

export default AllBooksLanding;
