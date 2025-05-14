import React, { useRef } from 'react';
import './DemoDashboard.css';
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa';
import styled from 'styled-components';
import { orderMetrics } from '../../data/orderData';

const MainContainer = styled.div`
  background: ${props => props.theme.colors.background.card};
`;

const Card = styled.div`
    background: ${props => props.theme.colors.background.card};
    border: 1px solid ${props => props.theme.colors.border.card};
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(68, 68, 68, 0.06);
    display: flex;
    flex-direction: column;
    width: 250px;
    min-width: 250px;
    overflow: hidden;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 22px 8px 22px; 
  background: ${props => props.theme.colors.background.main};
`;

const CardIconGradient = styled.div`
  background: linear-gradient(135deg,#f5576c 0,#f093fb 100%);
  border-radius: 12px;
  display: inline-flex;
  padding: 2px;
`;

const CardIconInner = styled.div`
  background: ${props => props.theme.colors.background.card};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  padding: 14px 22px 16px 22px;
  border-top: 1px solid ${props => props.theme.colors.border.card};
`;


const DemoDashboard = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <MainContainer >
      <div className="metrics-container">
        <button className="scroll-button left" onClick={scrollLeft}><FaChevronLeft /></button>

        <div className="metrics-scroll-area" ref={scrollRef}>
          {orderMetrics.map((metric, index) => (
            <Card key={index}>
              {/* --- TOP PART --- */}
              <CardTop>
                <CardIconGradient>
                  <CardIconInner>
                    <span className="metric-icon-emoji">{metric.icon}</span>
                  </CardIconInner>
                </CardIconGradient>
                <div>
                  <div className="metric-title">{metric.title}</div>
                  <div className="metric-value">{metric.value}</div>
                </div>
              </CardTop>
              {/* --- BOTTOM PART --- */}
              <CardBottom>
                {metric.percent !== undefined && metric.status &&
                  <span className={`metric-change ${metric.status === "Up" || metric.isPositive ? "positive" : "negative"}`}>
                    <span className="arrow">{metric.status === "Up" || metric.isPositive ? "↑" : "↓"}</span>
                    {metric.percent || `${metric.change}%`}
                  </span>
                }
                <span className="metric-period">
                  {metric.period || "From The Last Month"}
                </span>
              </CardBottom>
            </Card>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}><FaChevronRight /></button>
      </div>
    </MainContainer>
  );
};

export default DemoDashboard;