const http = require("http");

const PORT = 5000;


// ------------------------------------
// BANK ACCOUNT
// ------------------------------------

function createBankAccount(initialBalance) {

    // Private variables
    let balance = initialBalance;
    const transactions = [];


    function deposit(amount) {

        if (amount <= 0) {
            throw new Error("Deposit must be greater than 0");
        }

        balance += amount;

        transactions.push({
            type: "deposit",
            amount
        });
    }


    function withdraw(amount) {

        if (amount <= 0) {
            throw new Error("Withdrawal must be greater than 0");
        }

        if (amount > balance) {
            throw new Error("Insufficient balance");
        }

        balance -= amount;

        transactions.push({
            type: "withdraw",
            amount
        });
    }


    function getBalance() {
        return balance;
    }


    function getTransactions() {
        return [...transactions];
    }


    return {
        deposit,
        withdraw,
        getBalance,
        getTransactions
    };
}


// ------------------------------------
// CREATE ACCOUNT
// ------------------------------------

const account = createBankAccount(1000);


// ------------------------------------
// SERVER
// ------------------------------------

const server = http.createServer((req, res) => {

    if (req.url === "/account" && req.method === "GET") {

        const result = {
            balance: account.getBalance(),
            transactions: account.getTransactions()
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(result));
        return;
    }


    if (req.url === "/account/deposit" && req.method === "GET") {

        try {

            account.deposit(500);

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "Deposit successful",
                balance: account.getBalance()
            }));

        } catch (error) {

            res.writeHead(400, {
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