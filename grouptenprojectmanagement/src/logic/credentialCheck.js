const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(express.json()); // allows server to parse JSON body

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  fs.readFile('./credentials.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const lines = data.split('\n');
    const found = lines.find(line => {
      const [user, pass] = line.split(',');
      return user.trim() === email && pass.trim() === password;
    });

    if (found) {
      return res.status(200).send('Login successful!');
    } else {
      return res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
