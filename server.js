const path = require('path');
const express = require('express');
const app = express();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const $ = require("jquery");
const axios = require("axios");
const PORT = process.env.PORT || 8080;
// const api = require('./backend/routes');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});


// app.get('/craigslist', async (req, res) => {
//
//     var offset = 0;
//     var apartments = [];
//     const getPage = async (offset) => {
//       var endpoint = `https://sfbay.craigslist.org/search/sfc/apa?query=apartment%20in%20san%20francisco&s=${offset}`
//       return await axios(endpoint)
//       .then((response)=>{
//         const { window } = (new JSDOM(`${response.data}`));
//         var $ = require("jquery")(window);
//         var rowRefs = $('.rows').find('.result-row').find('.result-title').toArray();
//         rowRefs.map((row) => {
//           axios(row.getAttribute('href'))
//           .then((listing)=>{
//             var { window } = (new JSDOM(`${listing.data}`));
//             $ = require("jquery")(window);
//             let bedsAndBath = $('.attrgroup').children('.shared-line-bubble').first().text().split(' / ');
//             let beds = bedsAndBath[0][0];
//             let baths = bedsAndBath[1] ? bedsAndBath[1][0] : 'unavailable';
//             let second = $('.attrgroup').children('.shared-line-bubble').first().next().text();
//             let third = $('.attrgroup').children('.shared-line-bubble').first().next().next().text()
//             var area = !isNaN(second[0]) ? second.split('ft')[0] : 'unavailable';
//             var dateAvailable = (third ?
//               $('.attrgroup').children('.shared-line-bubble').first().next().next().attr('data-date') :
//               $('.attrgroup').children('.shared-line-bubble').first().next().attr('data-date'));
//             $('.attrgroup').children('.shared-line-bubble').first().next().text();
//             // console.log(beds, baths, area, dateAvailable);
//             apartments.push({
//               title: $('.postingtitle').children('.postingtitletext').find('#titletextonly').text(),
//               pictures: $('.iw.multiimage').children('#thumbs').children('a').toArray().map((picture)=>{
//                 return picture.getAttribute('href')
//               }),
//               lat: parseFloat($('#map').attr('data-latitude')),
//               lng: parseFloat($('#map').attr('data-longitude')),
//               postBody: $('#postingbody').text(),
//               address: $('.mapaddress').first().text(),
//               timePosted: $('.date.timeago').attr('datetime'),
//               beds: beds ? parseInt(beds) : 'unavailable',
//               baths: baths ? parseInt(baths) : 'unavailable',
//               area: area ? parseInt(area) : 'unavailable',
//               dateAvailable: dateAvailable ? dateAvailable : 'unavailable',
//               price: parseInt($('.price').text().slice(1))
//             })
//           })
//         })
//       })
//       .then(() => {
//         offset += 120;
//         return offset;
//       })
//     }
//
//     const awaitPage = async (fn, offset) => {
//       while(offset < 2500){
//         offset = await fn(offset);
//         console.log(offset);
//       }
//     }
//
//     await awaitPage(getPage, offset);
//
//     //******************************************************************************************
//     //      TEST CODE!!! READS ONE CRAIGSLIST LISTING
//     //
//     // var endpoint = `https://sfbay.craigslist.org/sfc/apa/d/where-luxury-city-living/6407011177.html`;
//     // await axios(endpoint)
//     // .then((response) => {
//     //   const { window } = (new JSDOM(`${response.data}`));
//     //   var $ = require("jquery")(window);
//     //
//     //   let bedsAndBath = $('.attrgroup').children('.shared-line-bubble').first().text().split(' / ');
//     //   let beds = bedsAndBath[0][0];
//     //   let baths = bedsAndBath[1][0];
//     //   let second = $('.attrgroup').children('.shared-line-bubble').first().next().text();
//     //   console.log(second);
//     //   let third = $('.attrgroup').children('.shared-line-bubble').first().next().next().text()
//     //   var area = !isNaN(second[0]) ? second.split('ft')[0] : 'unavailable';
//     //   var dateAvailable = (third ?
//     //     $('.attrgroup').children('.shared-line-bubble').first().next().next().attr('data-date') :
//     //     $('.attrgroup').children('.shared-line-bubble').first().next().attr('data-date'));
//     //   $('.attrgroup').children('.shared-line-bubble').first().next().text();
//     //   console.log(beds, baths, area, dateAvailable);
//     //   apartments.push({
//     //     title: $('.postingtitle').children('.postingtitletext').find('#titletextonly').text(),
//     //     pictures: $('.iw.multiimage').children('#thumbs').children('a').toArray().map((picture)=>{
//     //       return picture.getAttribute('href')
//     //     }),
//     //     lat: $('#map').attr('data-latitude'),
//     //     lng: $('#map').attr('data-longitude'),
//     //     postBody: $('#postingbody').text(),
//     //     address: $('.mapaddress').first().text(),
//     //     timePosted: $('.date.timeago').attr('datetime'),
//     //     beds: beds ? beds : 'unavailable',
//     //     baths: baths ? baths : 'unavailable',
//     //     area: area ? area : 'unavailable',
//     //     dateAvailable: dateAvailable ? dateAvailable : 'unavailable',
//     //     price: parseInt($('.price').text().slice(1))
//     //   })
//     // })
//
//     res.json({apartments,});
// })


// app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
