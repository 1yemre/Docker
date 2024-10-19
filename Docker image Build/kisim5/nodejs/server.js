// Gerekli modülleri dahil et
const express = require('express');
const port = 8080;
const HOST='0.0.0.0'

// Ana sayfa için bir rota tanımla
app.get('/', (req, res) => {
  res.send('Selam, ben Emre!');
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://${HOST}:${port} adresinde çalışıyor.`);
});
