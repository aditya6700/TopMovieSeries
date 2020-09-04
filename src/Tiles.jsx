import React from 'react';


function Tiles(props){
    return (
        <>
            <div className="cards">
                <div className='card'>
                    <img src={props.img_src} alt="seriesImg" className="card_img" />
                    <div className="card_info">
                        <span className="card_category"> {props.stitle} </span>
                        <h3 className="card_title"> {props.sname} </h3>
                        <a href={props.slink}>
                            <button> Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tiles;