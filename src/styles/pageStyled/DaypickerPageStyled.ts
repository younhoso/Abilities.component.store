'use client';

import { DayPicker } from 'react-day-picker';

import styled from 'styled-components';

export const DaypickerPageStyled = styled.div`
  .rdp-day {
    width: 40px;
    height: 40px;
    text-align: center;
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1a5463;
    .rdp-day_button {
      color: #e7edff;
    }
  }
`;
