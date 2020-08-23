import React, { Fragment } from 'react';

import CardImage from '../card-image/card-image.component';
import { CardInfo } from '../card-info/card-info.component';
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
        const { item, fields } = this.props;

        return (
            <div className='asset-detailed-container'>
                {item ?
                    <div className='assetBox'>
                        <Fragment>
                            <div className='card-info-detailed-container'>
                                <div className='card-image-container'>
                                    <CardImage item={item} />
                                </div>
                                <div className='card-info-container'>
                                <CardInfo item={item} fields={fields} />
                                </div>
                            </div>
                            <AssetSubInfo item={item} />
                            <AssetDocuments item={item} />
                        </Fragment>
                    </div>
                    : <ErrorPage />}

            </div>

        )
    }
}
