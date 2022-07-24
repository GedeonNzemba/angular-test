import Products from './modals/products.js';
import Prices from './modals/prices.js';

const resolvers = {
    Query: {
        getAllProducts: async () => {
            const products = await Products.find();
            return products;
        },
        getProduct: async (root, args) => {
            const product = await Products.findById(args.id);
            return product;
        },

        getAllPrices: async () => {
            const prices = await Prices.find();
            return prices;
        },
        getPrice: async (root, args) => {
            const price = await Prices.findById(args.id);
            return price;
        },
    },

    Mutation: {
        createProduct: async (root, args) => {
            const newProduct = new Products({
                sku: args.sku,
                name: args.name,
                image: args.image,
            });
            await newProduct.save();
            return newProduct;
        },
        createPrice: async (root, args) => {
            const newPrice = new Prices({
                sku: args.sku,
                price: args.price,
                discount: args.discount,
            });
            await newPrice.save();
            return newPrice;
        },
        deleteProduct: async (root, args) => {
            await Products.findByIdAndDelete(args.id);
            return 'The product has been deleted successfully';
        },
        deletePrice: async (root, args) => {
            await Prices.findByIdAndDelete(args.id);
            return 'This Price has been deleted successfully';
        },
        updateProduct: async (root, args) => {
            const { id, sku, name, image } = args;
            const updateProduct = {};

            if (sku != undefined) {
                updatedUser.sku = sku;
            }

            if (name != undefined) {
                updatedUser.name = name;
            }

            if (image != undefined) {
                updatedUser.image = image;
            }

            const product = await Products.findByIdAndUpdate(id, updatedProduct, { new: true });

            return product;
        },
        updateProduct: async (root, args) => {
            const { id, sku, price, discount } = args;
            const updatePrice = {};

            if (sku != undefined) {
                updatedUser.sku = sku;
            }

            if (price != undefined) {
                updatedUser.price = price;
            }

            if (discount != undefined) {
                updatedUser.discount = discount;
            }

            const newPrice = await Prices.findByIdAndUpdate(id, updatedPrice, { new: true });

            return newPrice;
        },
    },
};

export default resolvers;
