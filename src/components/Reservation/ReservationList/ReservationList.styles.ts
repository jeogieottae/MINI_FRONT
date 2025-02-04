import styled from "styled-components";
import Link from "next/link";
import { device } from "@/styles/media";

export const ReservationHistoryList = styled.ul`
  margin-bottom: 5rem;
`;

export const ReservationHistoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  overflow: hidden;
  margin-bottom: 3rem;
  border-radius: 1.6rem;
  box-shadow: 0 2px 16px rgb(235, 235, 235);

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 34%;
  height: 28rem;

  @media ${device.tablet} {
    width: 100%;
    height: 0;
    padding-top: 45%;
  }
`;

export const ReservationInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  position: relative;
  padding: 2.6rem 2.6rem 2.6rem 0;

  @media ${device.tablet} {
    padding: 0 2.6rem 2.6rem;
    gap: 1.4rem;
  }
`;

export const UseCheckText = styled.span`
  width: 8rem;
  font-weight: 600;
  color: var(--color-gray-darker);
`;

export const AccomodationNameText = styled.strong`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 2.2rem;
  font-weight: 700;
`;

export const RoomNameText = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-darker);
`;

export const CheckInOutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  & > div {
    position: relative;

    &:first-child {
      padding-right: 3rem;

      @media ${device.tablet} {
        padding-right: 1.2rem;
      }
    }

    &:first-child::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      height: 4rem;
      background-color: var(--color-gray);
    }
  }

  @media ${device.tablet} {
    gap: 1.2rem;
  }

  span {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-gray-dark);
  }
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  right: 2.6rem;
  top: 2.6rem;
  margin-right: auto;
  padding: 0.8rem 3rem;
  border-radius: 0.8rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-hover);
  }

  @media ${device.tablet} {
    top: 0;
  }

  @media ${device.mobile} {
    position: relative;
    left: 0;
    right: 0;
    margin-right: 0;
    margin-top: 1rem;
    text-align: center;
  }
`;

export const TotalPriceText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-gray-darker);
  & > span {
    display: inline-block;
    padding-left: 0.8rem;
    font-size: 1.8rem;
    color: var(--color-black);
  }
`;
