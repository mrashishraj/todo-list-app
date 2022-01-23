import React from 'react';

function listItem(props){
    return(
        <ol>
            <li>{props.item}</li>
        </ol>
    )
}

export default listItem;