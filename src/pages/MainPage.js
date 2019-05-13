import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import TodayReview from '../components/common/main/TodayReview';
import MainNotice from '../components/common/main/MainNotice'

const MainPage = () => {
    return (
        <div>
            <PageTemplate>
                <TodayReview/>
            </PageTemplate>
            <MainNotice/>
        </div>
    );
}

export default MainPage;