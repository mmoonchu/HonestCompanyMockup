class ProductModel {
    constructor(name, image, price, rating = '', options = '', tag = null) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.rating = rating;
        this.options = options;
        this.tag = tag
    }
}


export default ProductModel;