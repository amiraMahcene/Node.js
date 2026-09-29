const http = require("http");

const PORT = 3000;


// ------------------------------------
// DATA
// ------------------------------------

const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 120000,
        stock: 5
    },
    {
        id: 2,
        name: "Mouse",
        category: "Electronics",
        price: 2500,
        stock: 20
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Electronics",
        price: 5000,
        stock: 0
    },
    {
        id: 4,
        name: "Notebook",
        category: "Stationery",
        price: 800,
        stock: 50
    },
    {
        id: 5,
        name: "Pen",
        category: "Stationery",
        price: 200,
        stock: 100
    }
];


// ------------------------------------
// FUNCTIONS
// ------------------------------------

function getProducts() {
    return products;
}


function findProduct(name) {

    return products.find(
        product => product.name.toLowerCase() === name.toLowerCase()
    );
}


function getProductsByCategory(category) {

    return products.filter(
        product =>
            product.category.toLowerCase() === category.toLowerCase()
    );
}


function getOutOfStockProducts() {

    return products.filter(
        product => product.stock === 0
    );
}


function calculateInventoryValue() {

    return products.reduce(
        (total, product) => {
            return total + product.price * product.stock;
        },
        0
    );
}


function getMostExpensiveProduct() {

    return products.reduce(
        (mostExpensive, product) => {

            if (product.price > mostExpensive.price) {
                return product;
            }

            return mostExpensive;
        }
    );
}


function sortByPrice() {

    return [...products].sort(
        (a, b) => a.price - b.price
    );
}


// ------------------------------------
// SERVER
// ------------------------------------

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");


    // GET /products
    if (req.url === "/products" && req.method === "GET") {

        res.writeHead(200);

        res.end(JSON.stringify(getProducts()));

        return;
    }


    // GET /products/out-of-stock
    if (
        req.url === "/products/out-of-stock" &&
        req.method === "GET"
    ) {

        res.writeHead(200);

        res.end(
            JSON.stringify(getOutOfStockProducts())
        );

        return;
    }


    // GET /products/category/Electronics
    if (
        req.url.startsWith("/products/category/") &&
        req.method === "GET"
    ) {

        const category = decodeURIComponent(
            req.url.split("/")[3]
        );

        const result = getProductsByCategory(category);

        res.writeHead(200);

        res.end(JSON.stringify(result));

        return;
    }


    // GET /products/expensive
    if (
        req.url === "/products/expensive" &&
        req.method === "GET"
    ) {

        const product = getMostExpensiveProduct();

        res.writeHead(200);

        res.end(JSON.stringify(product));

        return;
    }


    // GET /inventory/value
    if (
        req.url === "/inventory/value" &&
        req.method === "GET"
    ) {

        const value = calculateInventoryValue();

        res.writeHead(200);

        res.end(JSON.stringify({
            inventoryValue: value
        }));

        return;
    }


    // GET /products/sorted
    if (
        req.url === "/products/sorted" &&
        req.method === "GET"
    ) {

        const result = sortByPrice();

        res.writeHead(200);

        res.end(JSON.stringify(result));

        return;
    }


    // 404
    res.writeHead(404);

    res.end(JSON.stringify({
        error: "Route not found"
    }));
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});