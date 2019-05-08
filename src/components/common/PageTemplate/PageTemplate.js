import React , {Component}from 'react';
import './PageTemplate.css';
import Header from './Header';


class PageTemplate extends Component {
    render() {
      return (
        <div >
            <Header/>
                <main className="page-template">
                </main>
    </div>
      );
    }
  }

export default PageTemplate;