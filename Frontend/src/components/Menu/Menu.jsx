import React, { useEffect } from "react";
import "./Menu.scss";
import { TbMeat } from "react-icons/tb";
import { ImInsertTemplate, ImSpoonKnife, ImTelegram } from "react-icons/im";
import { BiSolidDrink } from "react-icons/bi";
import {
  fetchData,
  addBasket,
  deleteBasket,
} from "../../redux/slices/mealSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";

const Menu = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.meal.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(data);

  return (
    <>
      <div className="menu">
        <div className="container2">
          <div className="text2">
            <h4>OUR MENU</h4>
            <h1>Discover Our Exclusive Menu</h1>
          </div>
          <div className="btnmeal">
            <div className="main">
              <TbMeat
                style={{
                  fontSize: "25px",
                  marginTop: "10px",
                  marginLeft: "15px",
                }}
              />
              {/* icon */}
              <h4>Main</h4>
            </div>
            <div className="main">
              <ImSpoonKnife
                style={{
                  fontSize: "25px",
                  marginTop: "10px",
                  marginLeft: "15px",
                }}
              />
              {/* icon */}
              <h4>Dessert</h4>
            </div>
            <div className="main">
              <BiSolidDrink
                style={{
                  fontSize: "25px",
                  marginTop: "10px",
                  marginLeft: "15px",
                }}
              />
              {/* icon */}
              <h4>Drinks</h4>
            </div>
          </div>
        </div>
        {data &&
          data.map((elem) => {
            return (
              <>
                <div className="menular">
                  <div className="menus">
                    <div className="main1">
                      <div className="leftimg1">
                        <img
                          src="./../../../public/images/dessert-9.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text10">
                        <h1>{elem.name}</h1>
                        <span>{elem.about}</span>
                      </div>
                      <div className="price">
                        <span>{elem.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="menus">
                    <div className="main1">
                      <div className="leftimg1">
                        <img
                          src="./../../../public/images/dessert-9.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text10">
                        <h1>{elem.name}</h1>
                        <span>{elem.about}</span>
                      </div>
                      <div className="price">
                        <span>{elem.price}</span>
                      </div>
                      <FaShoppingBasket
                        onClick={() => {
                          dispatch(addBasket(elem));
                        }}
                        style={{ fontSize: "25px" }}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Menu;
