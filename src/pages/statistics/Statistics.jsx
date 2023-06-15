import React, { useEffect, useState } from 'react';
import { Typography, Container, Card, CircularProgress, Box, Grid } from '@mui/material';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getReviewStatistics } from '../../service/reviewService';
import { useLocation } from 'react-router-dom';
import Rating from '@mui/material/Rating';

Chart.register(ArcElement);

const Statistics = () => {
  const location = useLocation();
  const [recipeStatistics, setRecipeStatistics] = useState({});
  const [averageRating, setAverageRating] = useState(null);
  const [loading, setLoading] = useState(true);

  const calculateAverageRating = (statistics) => {
    let totalScore = 0;
    let totalCount = 0;
    Object.keys(statistics).forEach((star) => {
      totalScore += Number(star) * statistics[star];
      totalCount += statistics[star];
    });
    return totalCount > 0 ? Number((totalScore / totalCount).toFixed(1)) : 0;
  };

  useEffect(() => {
    const fetchRecipeStatistics = async () => {
      try {
        const { id } = location.state;
        const statistics = await getReviewStatistics(id);
        setAverageRating(null);
        if (statistics) {
          setRecipeStatistics(statistics);
          const average = calculateAverageRating(statistics);
          setAverageRating(average);
        }
      } catch (error) {
        console.error('Error fetching recipe statistics:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeStatistics();
  }, [location.state]);

  const labels = ['1', '2', '3', '4', '5'];
  const backgroundColors = [
    '#FF6384',
    '#FF9F40',
    '#FFCD56',
    '#4BC0C0',
    '#36A2EB',
  ];
  console.log(recipeStatistics);
  const generatePieChartData = (recipeStatistics) => {
    const dataValues = labels.map((label) => {
      let value = recipeStatistics[label] || 0;
      return value;
    });
    const data = {
      labels,
      datasets: [
        {
          data: dataValues,
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors,
        },
      ],
    };
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
    <Container maxWidth="xl" sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
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
        <Card sx={{ margin: 'auto', width: '80%', p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Pie type="pie" data={chartConfig.data} options={chartConfig.options} />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" align="center" style={{ fontWeight: 'bold', color: 'black' }}>
                Average Rating
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                <Rating name="average-rating" value={parseFloat(averageRating)} precision={0.1} readOnly />
                <Typography variant="body1" style={{ marginLeft: '1rem' }}>
                  {averageRating}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', mt: 2 }}>
                {labels.map((label, i) => (
                  <Grid item xs={4} sm={2} md={2} lg={2} key={label}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ width: 24, height: 24, marginRight: 2, backgroundColor: backgroundColors[i] }} />
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
