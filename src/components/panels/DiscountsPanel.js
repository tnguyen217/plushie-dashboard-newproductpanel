// import React, { forwardRef } from 'react';

import { PanelStyles, PanelBody, PanelHeader } from './styles';

function DiscountsPanel({title, ...$prop}) {
    return ( 
        <>
            <PanelStyles>
                <PanelHeader>
                    <h2>{ title || "Display Panel" }</h2>
                </PanelHeader>
                <PanelBody>

                </PanelBody>
        </PanelStyles>
            
        </>
     );
}

export default DiscountsPanel;