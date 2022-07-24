import Products from './modals/products.js';

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
        deleteProduct: async (root, args) => {
            await Products.findByIdAndDelete(args.id);
            return 'The product has been deleted successfully';
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
    },
};

export default resolvers;
