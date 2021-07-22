import { PieChart } from "react-minimal-pie-chart";
import styled, { css } from "styled-components";

export const Button = styled.p`
  background: #000d3a;
  padding: 1rem;
  cursor: pointer;
  width: ${({ width }) => width};
  border: 3px solid #fcc527;
  border-radius: 10px;
  color: #fcc527;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  &:hover {
    color: #000d3a;
    background: #fcc527;
  }
  &:active:hover {
    background: #f5d062;
    color: white;
  }
`;

export const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    align-items: center;
    text-align: center;
    & .text {
      align-items: center;
      text-align: center;
    }
    & .icon {
      display: none;
    }
  }
`;

export const Heading = styled.h2`
  text-align: center;
  margin: 3rem 0;
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    margin: 1rem 0;
  }
`;

export const FeatureCard = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  border: 1px solid ${({ border }) => border};
  border-radius: 10px;
  max-width: 30ch;
  min-width: 300px;
  min-height: 300px;
  & img {
    margin-bottom: 1.5rem;
    height: 40px;
  }
  & .desc {
    margin-top: 1rem;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;
  }
`;

export const PieChartWrapper = styled.div`
  position: relative;
  height: 330px;
  width: 330px;
  border-radius: 50%;

  z-index: 1;
  display: grid;
  place-content: center;
`;
export const Hole = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background: #000d3a;
  & p {
    position: absolute;
    font-family: "Krona One", sans-serif;
    font-size: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    color: ${({ color }) => color};
    padding: 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    height: 170px;
    width: 170px;
  }
`;

export const AllocationCard = styled.div`
  border: 1px solid ${({ color }) => color};
  border-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  & .light {
    font-weight: 300;
  }
  & .title {
    color: ${({ color }) => color};
  }
  & img {
    margin-top: 2.5rem;
    height: 100px;
  }
  & .Diamond {
    margin-top: calc(2.5rem - 20px);
    height: 120px;
  }
  & .Platinum {
    margin-top: calc(2.5rem - 30px);
    height: 130px;
  }
  & .footer {
    width: 100%;
    height: 40px;
    background: ${({ color }) => color};
    margin-top: 1.5rem;
  }
`;

export const Token = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  & h4 {
    font-weight: 400;
  }
  ${({ highlight }) =>
    highlight &&
    css`
      & h4 {
        color: ${({ color }) => color};
        font-weight: 700;
      }
    `};
  max-width: 440px;
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding: 0.4rem 1rem;
    & img {
      width: 30px;
    }
  }
`;

export const MainContainer = styled.div`
  padding-top: ${({ theme }) => theme.navHeight};
  min-height: 100vh;
`;

export const StyledPieChart = styled(PieChart)`
  width: 430px;
  height: 430px;
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    width: 250px;
    height: 250px;
  }
`;

export const TextRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    align-items: center;
  }
`;

export const PersonCard = styled.div`
  text-align: center;
  & .image {
    display: inline-block;
    height: 134px;
    width: 134px;
    border-radius: 50%;
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)),
      drop-shadow(-7px -7px 20px #001251);
  }
  & h5 {
    font-size: 17px;
  }
`;

export const DistributionCard = styled.div`
  & h2 {
    font-size: 36px;
    line-height: 36px;
    color: #80869c;
  }
  & p {
    margin-top: 1.4rem;
    margin-bottom: 0.2rem;
  }
  & h5 {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ContactUsHeader = styled.div`
  flex-wrap: wrap-reverse;
  & h2 {
    line-height: 30px;
  }
  & h5 {
    line-height: 21px;
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    text-align: center;
    & img {
      width: 100px;
    }
  }
`;
export const Separator = styled.div`
  height: 120px;
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: none;
  }
`;
export const FormGroup = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    justify-content: flex-start !important;
    & div {
      max-width: 100% !important;
    }
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: ${({ textarea }) => (textarea ? "100%" : "350px")};
  padding: 0.5rem;
  & label {
    margin-bottom: 0.3rem;
    color: ${({ error }) => (error ? "red" : "white")};
  }
  & input,
  & textarea {
    outline: none;
    border: none;
    background: transparent;
    color: white;
    border-bottom: 1px solid ${({ error }) => (error ? "red" : "white")};
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
  }
`;

export const ErrorMessage = styled.p``;
