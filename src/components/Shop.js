import React, {useState} from "react";

import products from "./data";

const style = {
    cardWrapper: {
        border: "1px solid black",
        padding: "10px",
        margin: "10px"
    },
    cardForm: {
        display: "flex",
    }
};

const Card = ({product, addToCart}) => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuan = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuan = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    }

    const handleChange = (event) => {
        try{
            setQuantity(parseInt(event.target.value));
        }
        catch (err) {
            console.log("not a integer value");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div style={style.cardWrapper}>
            <div>
                <div>
                    product: {product.name}
                </div>
                <div>category: {product.category}</div>
                <div>{product.detail}</div>
                <div>${product.price}</div>
                <div><img src={product.pic} alt={product.name + " picture"}/></div>
            </div>
            <form onSubmit={handleSubmit} style={style.cardForm}>
                <input type="number" step="1" value={quantity} onChange={handleChange}/>
                <button onClick={decreaseQuan}><i className="fas fa-minus"></i></button>
                <button onClick={increaseQuan}><i className="fas fa-plus"></i></button>
                <button onClick={() => {addToCart(product.id, product.name, quantity);}}>Add to Cart</button>
            </form>
        </div>
    );
}

const Shop = (props) => {
    const allItems = products.map((product, index) => {
        return <Card product={product} addToCart={props.addToCart} key={"product" + index}/>;
    });

    return (
        <div>
            {allItems}
        </div>
    );
};

export default Shop;