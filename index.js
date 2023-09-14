const express = require('express')
const app = express()
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', async(req, res) => {
    const users = await prisma.user.findMany();
    res.send(users)
  })
  
app.post('/api', async(req, res) => {
  try {
    const { name } =  req.body;
    const newUser = await prisma.user.create({
      data: {
        name,
      },
    });

    res.status(201).json(newUser);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to create user' });
  }
})


// GET route to retrieve a single user by ID
app.get('/api/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve user' });
  }
});

// PUT route to update a user by ID
app.put('/api/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { name } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to update user' });
  }
});

// DELETE route to delete a user by ID
app.delete('/api/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to delete user' });
  }
});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});