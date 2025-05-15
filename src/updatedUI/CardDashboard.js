import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, useTheme } from "@mui/material";

const OSDonutChart = () => {
  const theme = useTheme();

  // Data representing the OS distribution
  const data = [
    { id: 0, value: 40, label: "Android", color: "#4361ee" },
    { id: 1, value: 30, label: "Windows", color: "#36a2eb" },
    { id: 2, value: 15, label: "OS X", color: "#4cc9a5" },
    { id: 3, value: 25, label: "iOS", color: "#ffb62e" },
  ];

  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <PieChart
        series={[
          {
            data,
            innerRadius: 60,
            outerRadius: 120,
            paddingAngle: 1,
            cornerRadius: 0,
            startAngle: 0,
            endAngle: 360,
            cx: 150,
            cy: 150,
            // Add labels inside the donut segments
            arcLabel: (item) => item.label,
            arcLabelMinAngle: 10,
          },
        ]}
        slotProps={{
          legend: { hidden: true },
        }}
        sx={{
          // Customize label appearance
          "& .MuiChartsLegend-mark": { rx: 10, ry: 10 },
          "& .MuiChartsLegend-series": { m: 2 },
          "& .MuiChartsLegend-label": {
            fill: theme.palette.text.primary,
            fontWeight: "bold",
          },
          // Customize label inside segments
          "& .MuiChartsAxis-tickLabel": {
            fill: theme.palette.text.primary,
            fontWeight: "bold",
          },
        }}
        width={400}
        height={300}
      />
    </Box>
  );
};

export default OSDonutChart;
