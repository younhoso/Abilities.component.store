'use client';

import styled from 'styled-components';

export const DaypickerRangePageStyled = styled.div`
  .rdp-day {
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 0;
  }
  .rdp-months {
    display: flex;
    gap: 20px;
  }

  .rdp-table {
    border-collapse: collapse;
  }

  .rdp-button {
    width: 40px;
    height: 40px;
  }
  .rdp-caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rdp-cell {
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 0;
  }

  .rdp-selected,
  .rdp-selected:focus-visible {
    background-color: #1a5463;
    color: #e7edff;

    .rdp-day_button {
      color: #e7edff;
    }
  }

  .rdp-range_start {
    background: linear-gradient(90deg, #0000 50%, #1a5463 50%);
    

    .rdp-day_button{
      width: 40px;
      height: 40px;
      background-color: #073845;
      border-radius: 50%;
    }
  }

  .rdp-range_end {
    background: linear-gradient(90deg, #1a5463 50%, #0000 50%);

    .rdp-day_button{
      width: 40px;
      height: 40px;
      background-color: #073845;
      border-radius: 50%;
    }
  }  

  .rdp-range_middle{
    border-radius: 0;
  }

  .rdp-outside{
    opacity: 0.25;
  }
`;
