const express = require('express');
const fs = require('fs');
const cors = require('cors'); // <== ADD THIS
const app = express();
const PORT = 3002;

app.use(cors()); 
app.use(express.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    fs.readFile('./users.txt', 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading file');
      }
  
      const lines = data.split('\n');
      let matchedUser = null;
  
      for (const line of lines) {
        const [user, pass, firstName, lastName] = line.split(',');
        if (user && pass && firstName && lastName) {
          if (user.trim() === email && pass.trim() === password) {
            matchedUser = { email: user.trim(), firstName: firstName.trim(), lastName: lastName.trim() };
            break;
          }
        }
      }
  
      if (matchedUser) {
        return res.status(200).json({
          message: 'Login successful!',
          user: matchedUser
        });
      } else {
        return res.status(401).send('Invalid credentials');
      }
    });
  });

app.post('/findProjects', (req,res) =>{
    const {email} = req.body;
    console.log(email);
    fs.readFile('./projects.json', 'utf-8', (err,data) =>{
        if (err) {
            return res.status(500).send('Failed to read project data');
        }
        try {
            const projects = JSON.parse(data);
            console.log(projects);
            // Filter projects where the user is an admin, pm, or team member
            const userProjects = projects.filter(project =>
              project.admin.includes(email) ||
              project.pm.includes(email) ||
              project.team_members.includes(email)
            );
            console.log("User Projects: " , userProjects)
            return res.status(200).json({ projects: userProjects });
      
          } catch (parseError) {
            return res.status(500).send('Failed to parse project data');
          }
      
    })
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
