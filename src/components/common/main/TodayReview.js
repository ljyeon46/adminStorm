import React,{ Component } from 'react';
import './TodayReview.css';

class TodayReview extends Component {

    render() {
      return (
          <div>
              <div className="slide-ul">
                <div className="slide-li">
                    <div className="review-category">
                        TodayReview
                    </div>
                    <div className="review-category">
                        Calendar
                    </div>
                </div>
              </div>
            
          </div>
      );
    }
  }
  
  export default TodayReview;
  