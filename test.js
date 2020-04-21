var products = [
    {
        "Handle": "CBR1000RR-ABS",
        "ImageSrc": "https://cdn.shopify.com/s/files/1/2421/1049/products/2017_CBR1000RR_600x400_VictoryRed_trans.png?v=1566887032"
    },
    {
        "Handle": "CBR1000RR-ABS",
        "ImageSrc": "https://cdn.shopify.com/s/files/1/2421/1049/products/2017_CBR1000RR_01.jpg?v=1512601161"
    },
    {
        "Handle": "CBR1000RR-ABS",
        "ImageSrc": "https://cdn.shopify.com/s/files/1/2421/1049/products/2017_CBR1000RR_04.jpg?v=1512601161"
    },
    {
        "Handle": "CBR1000RR-ABS",
        "ImageSrc": "https://cdn.shopify.com/s/files/1/2421/1049/products/2017_CBR1000RR_05.jpg?v=1512601161"
    },
    {
        "Handle": "CBR1000RR-ABS",
        "ImageSrc": "https://cdn.shopify.com/s/files/1/2421/1049/products/2017_CBR1000RR_06.jpg?v=1512601161"
    },
]

var result = [];

function remapProduct() {
    result = products.map((item) => {
        let item_name = item.ImageSrc.split('/').pop().split('?')[0];
        let item_path = './' + item.Handle + '/' + item_name;
        item.img_name = item_name;
        item.img_path = item_path;
        return item;
    })
}

remapProduct()

console.log(result)

module.exports = result;