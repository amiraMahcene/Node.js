const http = require("http");

const PORT = 4000;

// ------------------------------------
// DATA
// ------------------------------------

const transactions = [
    { id: 1, user: "Sara", amount: 1200, status: "completed" },
    { id: 2, user: "Yahia", amount: 500, status: "pending" },
    { id: 3, user: "Sara", amount: 800, status: "completed" },
    { id: 4, user: "Nour", amount: 1500, status: "completed" },
    { id: 5, user: "Yahia", amount: 300, status: "cancelled" },
    { id: 6, user: "Sara", amount: 400, status: "completed" }
];


// ------------------------------------
// ANALYZE TRANSACTIONS
// ------------------------------------

function analyzeTransactions(transactions) {

    // 1. Keep only completed transactions
    const completedTransactions = transactions.filter(
        transaction => transaction.status === "completed"
    );

    //filter() creates a new array containing only elements that satisfy the condition.

    // 2. Calculate the total amount
    const totalCompleted = completedTransactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
    );

    //Why reduce()? Why reduce()?

   // We want to transform many transactions into one value.


    // 3. Calculate the average
    const averageCompleted =
        totalCompleted / completedTransactions.length;

    // 4. Calculate the total for each user
    const users = completedTransactions.reduce(
        (result, transaction) => {

            const { user, amount } = transaction;

            if (!result[user]) {
                result[user] = 0;
            }

            result[user] += amount;

            return result;
        },
        {}
    );

    // 5. Return the final result
    return {
        totalCompleted,
        averageCompleted,
        users
    };
}


// ------------------------------------
// HTTP SERVER
// ------------------------------------

const server = http.createServer((req, res) => {

    if (req.url === "/transactions" && req.method === "GET") {

        const result = analyzeTransactions(transactions);

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(result));
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