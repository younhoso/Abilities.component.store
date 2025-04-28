'use client';

import styled from 'styled-components';

interface DayPickerProps {}

export const DayPickerStyled = styled.div<DayPickerProps>`
  .rdp-root {
    .rdp-nav {
      display: none;
    }
    .rdp-month_caption {
      display: none;
    }
  }

  .rdp-month_grid {
    width: 100%;
  }

  .rdp-outside {
    button {
      color: #d1d1d1; /* 연한 회색 */
    }
  }

  .rdp {
    margin-top: 16px;
  }

  .rdp-caption_label {
    font-weight: bold;
    font-size: 1rem;
  }

  .rdp-head {
    color: #999;
  }

  .rdp-day {
    width: 36px;
    height: 36px;
    text-align: center;
    cursor: pointer;
    button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      &:hover {
        background-color: #f0f0f0;
      }
    }

    &.rdp-selected {
      button {
        background-color: #2563eb;
        color: white;
      }
    }

    &.rdp-today {
      button {
        border: 1px solid #2563eb;
      }
    }
  }

  &.single {
    width: 520px;
    display: inline-block;
    padding: 16px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  &.range {
    width: 520px;
    display: inline-block;
    padding: 16px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  &.multiple {
    width: 520px;
    display: inline-block;
    padding: 16px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    background: none;
    border: none;
    font-size: 0.9rem;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
    &:hover {
      background-color: #f5f5f5;
    }
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 8px;
  }
`;

export const CalendarSelect = styled.div`
  margin-left: auto;
  button {
    font-weight: 500;
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    padding: 4px 8px;
    border-radius: 6px;
  }
`;

export const DatePickerHeaderStyled = styled.div`
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f3f4f6;
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

export const DayPickerNavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const DatePickerContentsStyled = styled.div``;
