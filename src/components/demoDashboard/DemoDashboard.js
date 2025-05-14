import React from 'react';
import './DemoDashboard.css';
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #f5f5f7;
  width: 100%;
  padding: 0 0 30px 0;
`;

const InnerContainer = styled.div`
  width: 100%;
  background: #fff;
`;

const Card = styled.div`
    background: ${props => props.theme.colors.background.card};
    border: 1px solid #e5e8eb;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(68, 68, 68, 0.06);
    display: flex;
    flex-direction: column;
    width: 250px;
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
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
`;


const DemoDashboard = () => {

  const metrics = [
    {
      title: 'Total Orders',
      value: '123',
      icon: '❤️',
      bgColor: '#ffe9f1',
      iconColor: '#e91e63',
      change: 28,
      isPositive: true
    },
    {
      title: 'Total Taken',
      value: '123',
      icon: '👥',
      bgColor: '#f3e5f5',
      iconColor: '#9c27b0',
      change: 15,
      isPositive: false
    },
    {
      title: 'Total Revenue',
      value: '123',
      icon: '🍔',
      bgColor: '#fff3e0',
      iconColor: '#ff6d00',
      change: 28,
      isPositive: true
    },
    {
      title: 'Pending Orders',
      value: '$1234.99',
      icon: '⏱️',
      bgColor: '#ffebee',
      iconColor: '#f44336',
      change: 28,
      isPositive: true
    },
    {
      title: 'Pending Returns',
      value: '$1234.99',
      icon: '🔄',
      bgColor: '#f3e5f5',
      iconColor: '#9c27b0',
      change: 28,
      isPositive: true
    },
    {
      title: 'Pending Orders',
      value: '$1234.99',
      icon: '⏱️',
      bgColor: '#ffebee',
      iconColor: '#f44336',
      change: 28,
      isPositive: true
    },
    {
      title: 'Pending Returns',
      value: '$1234.99',
      icon: '🔄',
      bgColor: '#f3e5f5',
      iconColor: '#9c27b0',
      change: 28,
      isPositive: true
    }
  ];



  return (
    <MainContainer >
      <InnerContainer >
        <div className="metrics-container">
          <button className="scroll-button left"><FaChevronLeft /></button>


          <div className="metrics-scroll-area">
            {metrics.map((metric, index) => (
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
                <div className="metric-card-bottom">
                  {metric.percent !== undefined && metric.status &&
                    <span className={`metric-change ${metric.status === "Up" || metric.isPositive ? "positive" : "negative"}`}>
                      <span className="arrow">{metric.status === "Up" || metric.isPositive ? "↑" : "↓"}</span>
                      {metric.percent || `${metric.change}%`}
                    </span>
                  }
                  <span className="metric-period">
                    {metric.period || "From The Last Month"}
                  </span>
                </div>
              </Card>
            ))}
          </div>



          <button className="scroll-button right"><FaChevronRight /></button>
        </div>
      </InnerContainer>
    </MainContainer>
  );
};

export default DemoDashboard;