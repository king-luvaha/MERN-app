import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import prodcompare from "../images/images/prodcompare.svg";
import wish from "../images/images/wish.svg";
import addcart from "../images/images/add-cart.svg";
import view from "../images/images/view.svg";
import { useDispatch } from 'react-redux';
import { addToWishlist } from "../features/products/productSlice";


const ProductCard = (props) => {
    const { grid, data } = props;
    let location = useLocation();
    const dispatch = useDispatch();

    
    const addToWish = (id) => {
        dispatch(addToWishlist(id));
    }

    return (
        <>  
            {data?.map((item, index) => {
                    return (
                        <div key={index} className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3" } `}>
                            <Link
                                to={`${
                                    location.pathname == "/"
                                    ? 'product/:id'
                                    : location.pathname == "/product/:id"
                                    ? "/product/:id" : ":id"}`} 
                                className="product-card position-relative">
                                <div className="wishlist-icon position-absolute">
                                    <button
                                     className="border-0 bg-transparent" 
                                     onClick={() => {addToWish(item?._id)}}>
                                        <img src={wish} alt="wishlist" />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img
                                     src={item?.images[0].url} 
                                     className="img-fluid d-block mx-auto" alt="Product Name"
                                     width={160} />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">{item?.brand}</h6>
                                    <h5 className="product-title">
                                        {item?.title}
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={item?.totalrating.toString()}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                                        dangerouslySetInnerHTML={{ __html: item?.description }}
                                     >
                                    </p>
                                    <p className="price">Ksh {item?.price}</p>
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column gap-15">
                                        <button className="border-0 bg-transparent">
                                            <img src={prodcompare} alt="compare" />
                                        </button>
                                        <button className="border-0 bg-transparent">
                                            <img src={view} alt="view" />
                                        </button>
                                        <button className="border-0 bg-transparent">
                                            <img src={addcart} alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            
        </>
    );
};

ProductCard.propTypes = {
    grid: PropTypes.number,
    data: PropTypes.array.isRequired,
};


export default ProductCard;
