import React from 'react';
import { SearchBox } from '../search-box/search-box.component';
import GoBackIcon from '../go-back-icon/go-back-icon.component';
import BackwardArrow from '../arrows/backward-arrow/backward-arrow.component';
import ForwardArrow from '../arrows/forward-arrow/forward-arrow.component';
import PageCounter from '../page-counter/page-counter.component';
import ClearButton from '../clear-button/clear-button.component';

import './header-bar.style.scss'

export const HeaderBar = ({ clear, pageCounter, searchBox, arrows, handleClear, handleChange, handleReturn, handleGoBack, handleGoForward, linkUrl, goBack, length, index }) => (
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
            {clear ? <div className='clear-button-container'>
                <ClearButton handleClear={handleClear}/>
            </div> : null}

            {pageCounter ? <PageCounter length={length} index={index} /> : null
            }
            {arrows ?
                <div className='arrows'>
                    <BackwardArrow handleGoBack={handleGoBack} />
                    <ForwardArrow handleGoForward={handleGoForward} />
                </div>
                : null}
        </div>
    </div>
)