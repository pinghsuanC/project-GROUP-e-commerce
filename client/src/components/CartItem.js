import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GoTrashcan } from "react-icons/go";

import {
  addItem,
  removeItem,
  removeItemCompletely,
  updateQuantity,
} from "./../actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const theState = useSelector((state) => state);
  // const item = useSelector((state) => state[id]);

  const { _id, imageSrc, name, price, quantity, numInStock } = item;
  const id = _id;

  return (
    <Wrapper>
      <Image src={imageSrc} /> <Name>{name}</Name>
      <Price>${price}</Price>
      <QuantityContainer>
        {/* <DecrementButton
          onClick={() => {
            quantity > 1
              ? dispatch(removeItem({ ...item, id }))
              : dispatch(removeItemCompletely({ id }));
          }}
        >
          -
        </DecrementButton> */}
        <Quantity
          min="1"
          max={numInStock}
          type="number"
          value={quantity}
          onKeyPress={(e) => {
            e.preventDefault();
            return false;
          }}
          onChange={(e) => {
            dispatch(
              updateQuantity({ ...item, id, quantity: Number(e.target.value) })
            );
          }}
        ></Quantity>
        {/* <IncrementButton onClick={() => dispatch(addItem({ ...item, id }))}>
          +
        </IncrementButton> */}
      </QuantityContainer>
      <RemoveButton
        onClick={() => {
          dispatch(removeItemCompletely({ id }));
        }}
      >
        <GoTrashcan />
      </RemoveButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  background: lightpink;
  border-bottom: 2px solid blue;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
`;

const Name = styled.p``;

const Price = styled.p``;

const QuantityContainer = styled.div``;

// const DecrementButton = styled.button`
//   all: unset;
// `;

const Quantity = styled.input`
  border: none;
  /* box-sizing: border-box; */
  font-weight: bold;
  height: 40px;
  margin: 10px;
  resize: none;
  text-align: center;
  vertical-align: middle;
  width: 40px;
`;

// const IncrementButton = styled.button`
//   all: unset;
// `;

const RemoveButton = styled.button`
  border: none;
`;

export default CartItem;
