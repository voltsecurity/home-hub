import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { AssetsContainerWithRouter } from '../../components/assets-container/assets-container.component';

import { selectAccessCategory, selectAccessActions, selectAccessItems } from '../../redux/access/access.selectors';

import './access-control-page.styles.scss';


const AccessControlPage = ({ actions, category, items, match }) => {
    console.log(match)
    
    return (
        <div>
            <AssetsContainerWithRouter category={category} items={items} actions={actions} />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    actions: selectAccessActions,
    category: selectAccessCategory,
    items: selectAccessItems
});


export default connect(mapStateToProps)(AccessControlPage);  