import React from 'react'

const Cart = (props) => {
    return (
        <div>
            {/* ..... component */}
            <button onClick={() => {
                props.inCreaseTotal();
            }}>Tăng slg</button>
        </div>
    )
}

export default Cart;