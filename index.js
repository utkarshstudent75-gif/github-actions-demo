const express = require('express');
const app = express();

app.get('/',(req, res) => {
	res.send('Hello from CI/CD');
});

module.exports = app; // 👈 important
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}




