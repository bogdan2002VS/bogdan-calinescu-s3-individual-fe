import React, { useEffect, useState } from 'react';
import { Typography, Container, Card, CircularProgress, Box, Grid } from '@mui/material';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getReviewStatistics } from '../../service/reviewService';
import { useLocation } from 'react-router-dom';

Chart.register(ArcElement);

const Statistics = (recipe) => {
  const location = useLocation();
  const { state } = location;
  const { id } = state;
console.log(id);
  const [recipeStatistics, setRecipeStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeStatistics = async () => {
      try {
        const recipesWithStatistics = await getReviewStatistics(id);
        setRecipeStatistics(recipesWithStatistics);
      } catch (error) {
        console.error('Error fetching recipe statistics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeStatistics();
  }, [id]);

  const labels = ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'];
  const backgroundColors = [
    '#FF6384',
    '#FF9F40',
    '#FFCD56',
    '#4BC0C0',
    '#36A2EB',
  ];

  const generatePieChartData = (recipeStatistics) => {
    const data = {
      labels,
      datasets: [
        {
          data: [], // Placeholder for the actual statistics
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors,
        },
      ],
    };

    if (recipeStatistics.length > 0) {
      const recipe = recipeStatistics[0]; // Assuming there's only one recipe in the statistics

      data.datasets[0].data = Object.values(recipe.statistics);
    }

    return data;
  };

  const chartConfig = {
    type: 'pie',
    data: generatePieChartData(recipeStatistics),
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: '8rem', marginBottom: '8rem' }}>
      <Box sx={{ my: 5 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Review Statistics
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Distribution of reviews per star rating.
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Pie type="pie" data={chartConfig.data} options={chartConfig.options} />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', mt: 2 }}>
                {labels.map((label, i) => (
                  <Grid item xs={4} sm={2} md={2} lg={2} key={label}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box
                        sx={{ width: 24, height: 24, marginRight: 2, backgroundColor: backgroundColors[i] }}
                      />
                      <Typography variant="body1">{label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Card>
      )}
    </Container>
  );
};

export default Statistics;
