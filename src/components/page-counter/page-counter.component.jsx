import React from 'react';

import './page-counter.styles.scss';

const PageCounter = ({ index, length }) => (
    <div>
        {index + 1} of {length}
    </div>
)

export default PageCounter;