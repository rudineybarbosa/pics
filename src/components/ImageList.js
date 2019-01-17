import React from 'react';

const ImageList = (props) => {
    //console.log(props.images);
    const images = props.images.map(({id, description, urls}) => {
        
        return (
            <div id={id}>
                <img alt={description} src={urls.regular} />
            </div>
            )
    });


    return (
        <div>{images}</div>
    )
};

export default ImageList;