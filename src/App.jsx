import React from 'react';
import Tiles from './Tiles';
import Series_data from './Seriesdata';


const App = () => (
    <>  
        <h1 className="heading_style"> Top Series one must watch</h1>
        {Series_data.map((item)=>{
            return (
                <Tiles
                    key = {item.id}
                    img_src = {item.img_src}
                    stitle = {item.stitle}
                    sname = {item.sname}
                    slink = {item.slink}
                />
            );
        })}
    </>
)

export default App;
