import React, { ReactNode } from 'react';

import Filters from './Filters';
import SearchBox from './SearchBox';

type AllBooksLandingProps = {
  children: ReactNode;
};

const AllBooksLanding: React.FC<AllBooksLandingProps> = ({ children }) => (
  <div className="pt-20">
    <SearchBox />
    <div className="grid md:grid-cols-[1fr_4fr] gap-10 ">
      <Filters />
      <div>{children}</div>
    </div>
  </div>
);

export default AllBooksLanding;
