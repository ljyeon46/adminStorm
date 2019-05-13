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
                    <div className="box">그래프</div>
                    <div className="box2">그래프</div>
                    <div className="box3">캘린더</div>
                    <div className="box2">일정타임라인</div>
                </div>
              </div>
            
          </div>
      );
    }
  }
  
  export default TodayReview;
  