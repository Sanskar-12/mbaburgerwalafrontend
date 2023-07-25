import React from "react";
import Menucard from "./Menucard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import {useDispatch} from "react-redux"
import toast from "react-hot-toast"

const Menu = () => {
  const dispatch=useDispatch()
  const addtoCartHandler = (item) => {
    switch (item) {
      case 1:
        dispatch({type:"cheeseBurgerIncrement"})
        dispatch({type:"calculatePrice"})
        toast.success("Added to Cart")
        break;
        case 2:
        dispatch({type:"chickencheeseBurgerIncrement"})
        dispatch({type:"calculatePrice"})
        toast.success("Added to Cart")
        break;
        case 3:
        dispatch({type:"macwhooperBurgerIncrement"})
        dispatch({type:"calculatePrice"})
        toast.success("Added to Cart")
        break;
    
      default:
        dispatch({type:"macwhooperBurgerIncrement"})
        dispatch({type:"calculatePrice"})
        toast.success("Added to Cart")
        break;
    }
  };
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <Menucard
          ItemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addtoCartHandler}
          delay={0.1}
        />
        <Menucard
          ItemNum={2}
          burgerSrc={burger2}
          price={1200}
          title="Chicken Cheese Burger"
          handler={addtoCartHandler}
          delay={0.5}
        />
        <Menucard
          ItemNum={3}
          burgerSrc={burger3}
          price={1500}
          title="Mac Whooper Burger"
          handler={addtoCartHandler}
          delay={0.7}
        />
      </div>
    </section>
  );
};

export default Menu;
