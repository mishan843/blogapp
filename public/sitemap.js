const axios = require('axios');
const fs = require('fs');
const filePath = 'public/sitemap.txt';

const apiUrlBlog = 'https://blogapp-q8b0.onrender.com/blog/getAllBlogs'

const sitemap = [
    'https://bloggersground.com',
    'https://bloggersground.com/about',
];

async function fetchData(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function writeSitemapToFile(sitemap, filePath) {
    const fileStream = fs.createWriteStream(filePath);
    sitemap.forEach(url => {
        fileStream.write(url + '\n');
    });
    fileStream.end();
    fileStream.on('finish', () => {
        console.log('Sitemap data has been written to sitemap.txt');
    });
    fileStream.on('error', (err) => {
        console.error('Error writing sitemap data:', err);
    });
}

async function createNewSiteMap() {
    try {

        let blogData = await fetchData(apiUrlBlog)
        console.log(blogData)
        const blogLinks = blogData.map(obj => `https://bloggersground.com/blog/${obj.title.toLowerCase().replace(/[\s?]+/g, "-")}?id=${obj._id}`);

        sitemap.push(...blogLinks);

        writeSitemapToFile(sitemap, filePath);
    } catch (error) {
        console.log("error>>", error);
    }
}

createNewSiteMap();
