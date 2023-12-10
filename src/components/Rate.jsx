import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
const Rate = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                alert(
                  `Are you sure you want to give ${givenRating} stars ?`
                );
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  min-height: 6vh;
  font-size: 60px;
`;
export const Radio = styled.input`
  display: none;
`;
export const Rating = styled.div`
  cursor: pointer;
`;

export default Rate;
