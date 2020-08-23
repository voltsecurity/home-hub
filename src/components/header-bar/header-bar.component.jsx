import React from 'react';
import SearchBox from '../search-box/search-box.component';
import GoBackIcon from '../go-back-icon/go-back-icon.component';
import Arrow from '../arrows/arrow.component';
import PageCounter from '../page-counter/page-counter.component';
import MenuIcon from '../menu-icon/menu-icon.component';
import DropdownList from '../dropdown-list/dropdown-list.component';

import './header-bar.style.scss'

export class HeaderBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownActive: false,
        };
    }

    handleDrop = () => {
        this.setState({ dropdownActive: !this.state.dropdownActive });
    }

    handleHide = () => {
        this.setState({ dropdownActive: false });
    }


    render() {
        const { searchField, itemList, dropdown, clear, pageCounter,
            searchBox, arrows, handleClear, handleChange, handleReturn,
            handleClick, handleScroll, linkUrl, goBack, length, index } = this.props;
        return (

            <div className='bar'>
                <div className='left-container'>
                    {goBack ?
                        <div className='go-back-container'>
                            <GoBackIcon handleReturn={handleReturn} linkUrl={linkUrl} />
                        </div>
                        : null}
                </div>
                <div className='search-box-container'>
                    {searchBox ? <SearchBox
                        handleClear={handleClear}
                        handleChange={handleChange}
                        searchField={searchField} /> : null}
                </div>
                <div className='right-container'>
                    {clear ? <div className='clear-button-container'>
                    </div> : null}

                    {pageCounter ? (<div className='page-counter'>
                        <PageCounter length={length} index={index} /></div>) : null
                    }
                    {arrows ?
                        <div className='arrows'>
                            <Arrow handleScroll={handleScroll} direction='backward' />
                            <Arrow handleScroll={handleScroll} direction='forward' />
                        </div>
                        : null}
                    {dropdown ? (<div className='dropdown-list-container'>
                        <div className='menu-icon-container'>
                            <MenuIcon handleDrop={this.handleDrop} />
                            {this.state.dropdownActive ? (<div className='dropdown-container'>
                                <DropdownList
                                    itemList={itemList} handleClick={handleClick}
                                    handleHide={this.handleHide} handleClear={handleClear}
                                    handleChange={handleChange} searchField={searchField} />
                            </div>) : null}
                        </div>
                    </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

