const http = require("http");

const PORT = 6000;


// ------------------------------------
// SIMULATED API REQUESTS
// ------------------------------------

function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Sara"
            });

        }, 1000);
    });
}


function getOrders(userId) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                { id: 101, total: 500 },
                { id: 102, total: 800 }
            ]);

        }, 1500);
    });
}


function getProducts() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                "Laptop",
                "Phone",
                "Tablet"
            ]);

        }, 1000);
    });
}


// ------------------------------------
// LOAD DATA
// ------------------------------------

async function loadData() {

    try {

        // User must be retrieved first
        const user = await getUser();

        // Orders depend on the user ID
        const ordersPromise = getOrders(user.id);

        // Products don't depend on the user
        const productsPromise = getProducts();

        // Run independent operations concurrently
        const [orders, products] = await Promise.all([
            ordersPromise,
            productsPromise
        ]);

        return {
            user,
            orders,
            products
        };

    } catch (error) {

        throw new Error("Failed to load data");
    }
}


// ------------------------------------
// SERVER
// ------------------------------------

const server = http.createServer(async (req, res) => {

    if (req.url === "/data" && req.method === "GET") {

        try {

            const data = await loadData();

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(data));

        } catch (error) {

            res.writeHead(500, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                error: error.message
            }));
        }

        return;
    }


    res.writeHead(404, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        error: "Route not found"
    }));
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});