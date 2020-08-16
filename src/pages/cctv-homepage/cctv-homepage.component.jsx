import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import { AssetsContainerWithRouter } from '../../components/assets-container/assets-container.component';

import { selectCCTVCategory, selectCCTVItems, selectCCTVActions } from '../../redux/cctv/cctv.selectors';

import './cctv-homepage.styles.scss';

const CCTVHomePage = ({ category, items, actions }) => (
        <div>
            <AssetsContainerWithRouter category={category} items={items} actions={actions}/>
        </div>
);

const mapStateToProps = createStructuredSelector({
    category: selectCCTVCategory,
    items: selectCCTVItems,
    actions: selectCCTVActions
})


export default connect(mapStateToProps)(CCTVHomePage);