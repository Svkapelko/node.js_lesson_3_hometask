
const express = require('express');

const fs = require('fs');

const path = require('path');

const app = express();

app.get('/', (req, res) => {
    const pathToFileHome = path.join(__dirname, 'userCountHome.json');
    
    const userCountHomeData = JSON.parse(fs.readFileSync(pathToFileHome, 'utf-8'));
    console.log("вывод после плюса-1", `Всего просмотров: ${userCountHomeData.count}`);
    userCountHomeData.count = userCountHomeData.count + 1;
    
    fs.writeFileSync(pathToFileHome, JSON.stringify(userCountHomeData, null, 2));
   
    console.log("вывод после плюса-2", `Всего просмотров: ${userCountHomeData.count}`);
    console.log(typeof `${userCountHomeData.count}`);

    res.send(`<h1>Welcome to Home Page!</h1><p>Viewed: ${userCountHomeData.count}</p><a href="/about">Link To About</a>`);
});

app.get('/about', (req, res) => {
    const pathToFileAbout = path.join(__dirname, 'userCountAbout.json');
    
    
    const userCountAboutData = JSON.parse(fs.readFileSync(pathToFileAbout, 'utf-8'));
    console.log("вывод после плюса-1", `Всего просмотров: ${userCountAboutData.count}`);
    userCountAboutData.count = userCountAboutData.count + 1;

    fs.writeFileSync(pathToFileAbout, JSON.stringify(userCountAboutData, null, 2));

    console.log("вывод после плюса-2", `Всего просмотров: ${userCountAboutData.count}`);

    res.send(`<h1>About Page</h1><p>Viewed: ${userCountAboutData.count}</p><a href="/">Link To Home</a>`);

});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

