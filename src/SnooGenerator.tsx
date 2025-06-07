import React, { useEffect, useState } from 'react';
import { Container, Button, Typography, Box } from '@mui/material';

interface Snoo {
  style: string;
  color: string;
  url: string;
}

function getRandomSnoo(): Snoo {
  const avatars = [
    'A5A4A4',
    '545452',
    'A06A42',
    'C18D42',
    'FF4500',
    'FF8717',
    'FFB000',
    'FFD635',
    'DDBD37',
    'D4E815',
    '94E044',
    '46A508',
    '46D160',
    '0DD3BB',
    '25B79F',
    '008985',
    '24A0ED',
    '0079D3',
    '7193FF',
    '4856A3',
    '7E53C1',
    'FF66AC',
    'DB0064',
    'EA0027',
    'FF585B',
  ];
  const style = String(Math.floor(Math.random() * 20 + 1)).padStart(2, '0');
  const color = avatars[Math.floor(Math.random() * avatars.length)];
  return {
    style,
    color,
    url: `https://www.redditstatic.com/avatars/avatar_default_${style}_${color}.png`,
  };
}

export default function SnooGenerator() {
  const [snoo, setSnoo] = useState<Snoo | null>(null);

  useEffect(() => {
    handleGenerate();
  }, []);

  const handleGenerate = () => {
    setSnoo(getRandomSnoo());
  };

  if (!snoo) return null;

  return (
    <Container sx={{ textAlign: 'center', mt: 4, p: 2, boxShadow: 2, width: 300, bgcolor: 'background.paper', height: 380 }}>
      <Box sx={{ height: 256 }}>
        <img src={snoo.url} alt="snoo" />
      </Box>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Snoo style: {snoo.style}
      </Typography>
      <Typography variant="body1" sx={{ color: `#${snoo.color}` }}>
        Hexcode: #{snoo.color}
      </Typography>
      <Button variant="contained" onClick={handleGenerate} sx={{ mt: 2, bgcolor: `#${snoo.color}` }}>
        Generate
      </Button>
    </Container>
  );
}
