import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { AssetsContainerWithRouter } from '../../components/assets-container/assets-container.component';

import { selectIntruderCategory, selectIntruderItems, selectIntruderActions } from '../../redux/intruder/intruder.selector';

import './intruder-page.styles.scss';

const IntruderHomepage = ({ category, items, actions }) => (
    <div>
        <AssetsContainerWithRouter category={category} items={items} actions={actions} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    category: selectIntruderCategory,
    items: selectIntruderItems,
    actions: selectIntruderActions
})


export default connect(mapStateToProps)(IntruderHomepage);