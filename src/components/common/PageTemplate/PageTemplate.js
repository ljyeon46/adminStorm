import React from 'react';
import './PageTemplate.css';
import Header from './Header';
import Treemenu from './Treemenu';

const PageTemplate =({children}) => (
  <div  className="page-template">
      <Header/>
      <main>
        <Treemenu/>
        {children}
      </main>
  </div>
);


export default PageTemplate;