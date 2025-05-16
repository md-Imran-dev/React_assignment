import React, { useContext, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { orderMetrics } from "../../../data/orderData";
import ThemeContext from "../../../context/ThemeContext";
import "../../../styles/TabDashboard.css";

const MainContainer = styled.div`
  background: ${(props) => props.theme.colors.background.card};
`;

const Card = styled.div`
  background: ${(props) => props.theme.colors.background.card};
  border: 1px solid ${(props) => props.theme.colors.border.card};
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
  background: ${(props) => props.theme.colors.background.main};
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  padding: 14px 22px 16px 22px;
  border-top: 1px solid ${(props) => props.theme.colors.border.card};
`;
const MetricTitle = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.secondary};
  margin-bottom: 4px;
`;

const MetricValue = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.text.primary};
`;

const TabDashboard = () => {
  const scrollRef = useRef(null);
  const { isDarkMode } = useContext(ThemeContext);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <MainContainer>
      <div className="metrics-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <FaChevronLeft
            style={{
              height: "16px",
              width: "16px",
            }}
          />
        </button>

        <div className="metrics-scroll-area" ref={scrollRef}>
          {orderMetrics.map((metric, index) => (
            <Card key={index}>
              {/* --- TOP PART --- */}
              <CardTop>
                {metric.icon(isDarkMode ? "#010D19" : "#fff")}
                <div>
                  <MetricTitle>{metric.title}</MetricTitle>
                  <MetricValue>{metric.value}</MetricValue>
                </div>
              </CardTop>
              {/* --- BOTTOM PART --- */}
              <CardBottom>
                {metric.percent !== undefined && metric.status && (
                  <span
                    className={`metric-change ${
                      metric.status === "Up" || metric.isPositive
                        ? "positive"
                        : "negative"
                    }`}
                  >
                    <span className="arrow">
                      {metric.status === "Up" || metric.isPositive ? "↑" : "↓"}
                    </span>
                    {metric.percent || `${metric.change}%`}
                  </span>
                )}
                <span className="metric-period">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <img
                      src={"/assets/images/UpArrow.png"}
                      alt="Total Orders"
                      style={{ width: "16px", height: "10px" }}
                    />
                    <span style={{ color: "#22C55E" }}>15%</span>
                  </div>
                  {metric.period || "From The Last Month"}
                </span>
              </CardBottom>
            </Card>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>
          <FaChevronRight style={{ height: "16px", width: "16px" }} />
        </button>
      </div>
    </MainContainer>
  );
};

export default TabDashboard;
