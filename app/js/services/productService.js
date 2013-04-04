/*global define */
 
define(['services/utilService'], function (utilService) {
    return ['productService', ['utilService', function (utilService) {

        var key = 'products',
            products = utilService.getFromLocal(key);

        return {
            getProducts: function () {
                return products;
            },
            addProduct: function (product) {
                products.push(product);
                utilService.saveToLocal(key, products);
            }
        };
    }]];
});
