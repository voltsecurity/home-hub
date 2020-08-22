import React from 'react';

import { HeaderBar } from '../../components/header-bar/header-bar.component';
import { AssetDetailed } from '../../components/asset-detailed/asset-detailed.component';

import './asset-detailed-page.styles.scss';

const AssetDetailedPage = () => (
    <div className='asset-container-box'>
        <HeaderBar
            pageCounter
            arrows
            goBack
            dropdown
            // searchField={searchField}
            // itemList={filteredItems}
            // length={items.length}
            // index={items.findIndex(item =>
            //     item.name.toLowerCase() === props.match.params.assetid
            // )}
            // handleChange={this.handleChange}
            // handleClear={this.handleClear}
            // handleReturn={this.handleReturn}
            // handleGoForward={this.handleGoForward}
            // handleGoBack={this.handleGoBack}
            // handleClick={this.handleClickDropdown}
        />
        <AssetDetailed
            // assetUpdateState={this.assetUpdateState}
            // item={items.find(item =>
            //     item.name.toLowerCase() === props.match.params.assetid
            // )} 
            />
    </div>
);

export default AssetDetailedPage;
