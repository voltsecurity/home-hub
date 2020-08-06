import React from 'react';

import ClearButton from '../clear-button/clear-button.component';
import searchIcon from '../../assets/search-icon.png';

import './search-box.style.scss';

class SearchBox extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        searchIcon: true
                }
        }

        handleClick = () => {
                this.setState({ searchIconHidden: true, })
        }

        handleToggle = () => {
                setTimeout(() => {
                        this.setState({ searchIconHidden: false })
                }, 100);
        }

        handleBlur = () => {
                if (this.props.searchField === '') {
                        setTimeout(() => {
                                this.setState({ searchIconHidden: false })
                        }, 150);
                }
        }

        render() {
                const { searchField, handleChange, handleClear } = this.props;
                const { searchIconHidden } = this.state;
                return (
                        <div className='search-box-wrapper'>
                                {/* {!searchIconHidden ?
                                        <img className='search-icon' src={searchIcon} alt="search" />
                                        : null} */}
                                <input onChange={handleChange}
                                        onClick={this.handleClick}
                                        onBlur={this.handleBlur}
                                        type="search" className='search-box'
                                        value={searchField} />
                                <div className='clear-button-wrapper'>
                                        {searchIconHidden ?
                                                <ClearButton handleClear={handleClear} handleToggle={this.handleToggle} />
                                                : <img className='search-icon' src={searchIcon} alt="search" />}
                                </div>
                        </div>

                )
        }
}


export default SearchBox;