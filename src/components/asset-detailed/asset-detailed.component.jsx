import React, { Fragment } from 'react';

import AssetMainInfo from '../asset-main-info/asset-main-info.component'
import AssetSubInfo from '../asset-sub-info/asset-sub-info.component'
import AssetDocuments from '../asset-documents/asset-documents.component'

import ErrorPage from '../../pages/error-page/error-page.component';

import './asset-detailed.styles.scss';

export class AssetDetailed extends React.Component {

    componentDidUpdate = (prevProps) => {
        const { item } = this.props;
        if (item !== prevProps.item) {
            this.props.assetUpdateState(item);
        }
    }

    // componentDidMount = () => {
    //     const { item } = this.props;
    //     this.props.assetUpdateState(item);
    // }

    render() {
        const { item } = this.props;

        return (
            <div className='asset-detailed-container'>
                {item ?
                    <div className='assetBox'>
                    <Fragment>
                        <AssetMainInfo item={item} />
                        <AssetSubInfo item={item} />
                        <AssetDocuments item={item} />
                    </Fragment>
                    </div>
                    : <ErrorPage/>}

            </div>

        )
    }
}
