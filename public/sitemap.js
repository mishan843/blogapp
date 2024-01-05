const axios = require('axios');
const fs = require('fs');
const filePathxml = 'public/sitemap.xml'; // Change file extension to .xml
const filePathtxt = 'public/sitemap.txt'; // Change file extension to .xml


const apiUrlBlog = 'https://blogapp-q8b0.onrender.com/blog/getAllBlogs';
const apiUrlStories = 'https://blogapp-q8b0.onrender.com/story/getAllStories';


const sitemap = [
    'https://www.bloggersground.com',
    'https://www.bloggersground.com/about',
    'https://www.bloggersground.com/blog/getallblogs?categoryFilter=Finance',
    'https://www.bloggersground.com/blog/getallblogs?categoryFilter=Coding',
    'https://www.bloggersground.com/blog/getallblogs?categoryFilter=Travel',
    'https://www.bloggersground.com/blog/getallblogs?categoryFilter=Food',
    'https://www.bloggersground.com/blog/getallblogs?categoryFilter=Fashion',
    'https://www.bloggersground.com/blog/getallblogs?categoryFilter=Technology',
];

async function fetchData(apiUrl) {
    try {
        const response = await axios.get(apiUrl);
        console.log("response", response)
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

function writeSitemapToFilexml(sitemap, filePath) {
    const fileStream = fs.createWriteStream(filePath);
    fileStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
    fileStream.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

    sitemap.forEach(url => {
        fileStream.write('  <url>\n');
        fileStream.write(`    <loc>${url}</loc>\n`);
        fileStream.write('  </url>\n');
    });

    fileStream.write('</urlset>\n');
    fileStream.end();

    fileStream.on('finish', () => {
        console.log('Sitemap data has been written to sitemap.xml');
    });

    fileStream.on('error', (err) => {
        console.error('Error writing sitemap data:', err);
    });
}

async function createNewSiteMap() {
    try {
        let blogData = await fetchData(apiUrlBlog);
        let storiesData = await fetchData(apiUrlStories);

        console.log(storiesData);
        const blogLinks = blogData.map(obj => `https://www.bloggersground.com/blog/${obj.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}?id=${obj._id}`);
        const storiesLinks = storiesData.map(obj => `https://www.bloggersground.com/stories?id=${obj._id}`);


        sitemap.push(...blogLinks, ...storiesLinks);

        writeSitemapToFilexml(sitemap, filePathxml);
        writeSitemapToFile(sitemap, filePathtxt)
    } catch (error) {
        console.log("error>>", error);
    }
}

createNewSiteMap();
