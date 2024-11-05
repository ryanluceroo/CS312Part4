const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let posts = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Route to show all posts
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Route to show form to create a post
app.get('/create', (req, res) => {
    res.render('create');
});

// Route to handle post creation
app.post('/create', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        date: new Date().toLocaleString()
    };
    posts.push(newPost);
    res.redirect('/');
});

// Route to show form to edit a post
app.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render('edit', { post });
});

// Route to handle post editing
app.post('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect('/');
});

// Route to handle post deletion
app.get('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
