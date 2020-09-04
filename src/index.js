import React from 'react';
import ReactDOM from 'react-dom';
import Tiles from './Tiles';
import Series_data from './Seriesdata';
import './index.css'

ReactDOM.render(
    <>  
        <h1 className="heading_style"> Top Series one must watch</h1>
        {Series_data.map((item)=>{
            return (
                <Tiles
                    img_src = {item.img_src}
                    stitle = {item.stitle}
                    sname = {item.sname}
                    slink = {item.slink}
                />
            );
        })}
    </>,
    document.getElementById("root"));
