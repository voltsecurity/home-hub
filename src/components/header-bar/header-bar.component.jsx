import React from 'react';
import { SearchBox } from '../search-box/search-box.component';
import GoBackIcon from '../go-back-icon/go-back-icon.component';
import BackwardArrow from '../arrows/backward-arrow/backward-arrow.component';
import ForwardArrow from '../arrows/forward-arrow/forward-arrow.component';

import './header-bar.style.scss'

export const HeaderBar = ({ cameraId, searchBox, arrows, handleChange, handleReturn, handleGoBack, handleGoForward, linkUrl, goBack }) => (
    <div className='bar'>
        <div className='go-back-container'>
            {goBack ?
            <GoBackIcon handleReturn={handleReturn} linkUrl={linkUrl} />
            : null}
        </div>
        <div className='search-box-container'>
            {searchBox ? <SearchBox
                placeholder={'SEARCH'}
                handleChange={handleChange} /> : null}
        </div>
        <div className='arrows-container'>
            {arrows ?
                <div className='arrows'>
                    <BackwardArrow handleGoBack={handleGoBack} cameraId={cameraId}/>
                    <ForwardArrow handleGoForward={handleGoForward} cameraId={cameraId} />
                </div>
                : null}
        </div>
    </div>
)