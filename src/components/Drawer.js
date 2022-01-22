function Drawer(){
  return(
    <div style={{display: 'none'}} className="overlay">
  <div className="drawer">

    <h2 className="d-flex justify-between mb-30">
      Cart <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
    </h2>

    <div className="items">

      <div className="cartItem d-flex align-center mb-20">
        <div
          style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
          className="cartItemImg"></div>

        <div className="mr-20 flex">
          <p className="mb-5">Nike Blazor Sneakers for Men Mid Suedeu</p>
          <b>200 lei</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </div>

      <div className="cartItem d-flex align-center mb-20">
        <div
          style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
          className="cartItemImg"></div>
          
        <div className="mr-20 flex">
          <p className="mb-5">Nike Blazor Sneakers for Men Mid Suedeu</p>
          <b>200 lei</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </div>


    </div>

    <div className="cartTotalBlock">
      <ul>

        <li className="d-flex">
          <span>Total</span>
          <div></div>
          <b>549 lei</b>
        </li>

        <li className="d-flex">
          <span>Tax: 19%: </span>
          <div></div>
          <b>10 lei</b>
        </li>


      </ul>
    
      <button className="greenButton">
        Place Order <img src="/img/arrow-right.svg" alt="Arrow" />
      </button>
    </div>
  </div>
</div>
  )
}

export default Drawer;