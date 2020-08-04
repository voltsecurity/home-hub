import React from 'react';
import { SearchBox } from '../search-box/search-box.component';
import GoBackIcon from '../go-back-icon/go-back-icon.component';
import BackwardArrow from '../arrows/backward-arrow/backward-arrow.component';
import ForwardArrow from '../arrows/forward-arrow/forward-arrow.component';
import PageCounter from '../page-counter/page-counter.component';
import ClearButton from '../clear-button/clear-button.component';
import MenuIcon from '../menu-icon/menu-icon.component';
import DropdownList from '../dropdown-list/dropdown-list.component';

import './header-bar.style.scss'

export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownActive: false
        };
    }

    handleDrop = () => {
        console.log('clicked')
        this.setState({ dropdownActive: !this.state.dropdownActive }, console.log(this.state.dropdownActive));
    }

    render() {
        const { itemList, dropdown, clear, pageCounter, searchBox, arrows, handleClear, handleChange, handleReturn, handleGoBack, handleGoForward, linkUrl, goBack, length, index } = this.props;

        return (

            <div className='bar'>
                <div className='left-container'>
                    {goBack ?
                        <div className='go-back-container'><GoBackIcon handleReturn={handleReturn} linkUrl={linkUrl} /></div>
                        : null}
                </div>
                <div className='search-box-container'>
                    {searchBox ? <SearchBox
                        placeholder={'SEARCH'}
                        handleChange={handleChange} /> : null}
                </div>
                <div className='right-container'>
                    {clear ? <div className='clear-button-container'>
                        <ClearButton handleClear={handleClear} />
                    </div> : null}

                    {pageCounter ? (<div className='page-counter'>
                        <PageCounter length={length} index={index} /></div>) : null
                    }
                    {arrows ?
                        <div className='arrows'>
                            <BackwardArrow handleGoBack={handleGoBack} />
                            <ForwardArrow handleGoForward={handleGoForward} />
                        </div>
                        : null}
                    {dropdown ? (<div className='dropdown-list-container'>
                        <div className='menu-icon-container'>
                            <MenuIcon handleDrop={this.handleDrop} />
                            {this.state.dropdownActive ? (<div className='dropdown-container'>
                                <DropdownList itemList={itemList} />
                            </div>) : null}
                        </div>
                    </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

