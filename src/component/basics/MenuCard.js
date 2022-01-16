import React, {useState} from 'react';


const ReadMore=({children}) => {
    const text= children;
    const [isReadMore, setIsReadMore] = useState(true);
   
    const toggleReadMore=() => {
        setIsReadMore(!isReadMore);
    };
    console.log(isReadMore);
    return(
        <p className='text'>
           
            {isReadMore ? text.slice(0,100)+`...`:text}
            <span onClick={toggleReadMore} className='read-or-hide'>
                {isReadMore ? <div className='card-read'>Read More</div> : <div className='card-read'>Read Less</div>}
            </span>
        </p>
    );
};
const MenuCard = ({menuData}) => {
   
    return (
        <>
            <section className="main-card--cointainer">             {
                menuData.map((currElement)=>{
                    const{id, name, category, price, image, description } = currElement;
                    return(
                            <>
                                <div className="card-container" key={id}>
                                 <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className='card-author subtle'>{category}</span>
                                        <h3 className='card-title'>{name}</h3 >
                                        <h4>{price}</h4>
                                        <span className='card-description subtle'><ReadMore children={description}></ReadMore></span>
                                             <div>
                                                <img src={image}  className='card-media' height={180} width={380}></img> 
                                                 <span className='card-tag subtle'>Order Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </>           
                    )
                })
            }
            </section>
        </>
    );
};

export default MenuCard;
