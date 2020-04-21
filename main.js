const fs = require('fs');
const axios = require('axios');
const product = require('./test');

/* ============================================================
  Function: Download Image
============================================================ */

const download_image = (url, image_path, image_name) =>
    axios({
        url,
        responseType: 'stream',
    }).then(
        response =>
            new Promise((resolve, reject) => {
                if (fs.existsSync(image_path)) {
                    response.data
                        .pipe(fs.createWriteStream(image_name))
                        .on('finish', () => resolve())
                        .on('error', e => reject(e));
                } else {
                    fs.mkdirSync(image_path);
                    response.data
                        .pipe(fs.createWriteStream(image_name))
                        .on('finish', () => resolve())
                        .on('error', e => reject(e));
                }
            }),
    );

/* ============================================================
  Download Images in Order
============================================================ */

// console.log(product);

(async () => {
    product.forEach(async (item, i) => {
        setTimeout(async () => {
            await download_image(item.ImageSrc, item.Handle, item.img_path)
        }, i * 300)
    })
})();