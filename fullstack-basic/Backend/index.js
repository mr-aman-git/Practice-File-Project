import express from 'express';
const app = express();

app.get('/jokes', (req, res)=>{
    const jokes=[
        {
            id: 1,
            title: 'A joke',
            content: 'My first Joke',
        },
        {
            id: 2,
            title: 'second joke',
            content: 'My second Joke',
        },
        {
            id: 3,
            title: 'third joke',
            content: 'My third Joke',
        },
        {
            id: 4,
            title: 'fourth joke',
            content: 'My fourth Joke',
        },
        {
            id: 5,
            title: 'fifth joke',
            content: 'My fifth Joke',
        },
        {
            id: 6,
            title: 'sixth joke',
            content: 'My sixth Joke',
        },
        {
            id: 7,
            title: 'seventh joke',
            content: 'My seventh Joke',
        },
        {
            id: 8,
            title: 'eighth joke',
            content: 'My eighth Joke',
        },
        {
            id: 9,
            title: 'nineth joke',
            content: 'My nineth Joke',
        },

    ]
    res.send(jokes);
});

const port= process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`server at  http://localhost:${port}`);
    
});