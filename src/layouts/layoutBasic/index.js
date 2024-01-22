import React, { Fragment } from 'react';
export default function LayoutBasic({ render }) {
    return (
        <Fragment>
             {render}
        </Fragment>
    );
}