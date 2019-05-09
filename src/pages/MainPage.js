import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import TodayReview from '../components/common/main/TodayReview';

const MainPage = () => {
    return (
        <div>
            <PageTemplate>
                <TodayReview/>
            </PageTemplate>
        </div>
    );
}

export default MainPage;