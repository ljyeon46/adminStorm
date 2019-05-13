import React from 'react';
import './MainNotice.css';
import CheckboxList from './realtime';
import ReactVirtualizedTable from './NoticeAll';

const MainNotice =() => (
  <div className="with-padding">
    <div className="slide1">

        <div className="block-border">

         <div className="block-border block-content">
            <CheckboxList/>

            <div className="block-content2 h1">
                <h1>실시간알림</h1>
            </div>

         </div>

        </div>
        <div className="block-border2">

         <div className="block-border2 block-content2">
          <ReactVirtualizedTable/>
            <div className="block-content h1">
                <h1>알림내역</h1>
            </div>
         </div>
        </div>

        </div>
    </div>
);


export default MainNotice;