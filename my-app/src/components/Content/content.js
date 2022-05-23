import React, { useState } from 'react';
import Nav from '../Nav/nav';
import About from '../pages/About';


function PortfolioContent() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About/>
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="container">
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default PortfolioContent;