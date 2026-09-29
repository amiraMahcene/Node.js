/* =========================================================
   1. VARIABLES
   ========================================================= */
console.log("\n=== 1. VARIABLES ===");
var oldVar = 1;              // avoid
let count = 2;               // reassignable
const PI = 3.14;             // cannot reassign
const PI= 3;
console.log({ oldVar, count, PI });


/* =========================================================
   2. DATA TYPES
   ========================================================= */
console.log("\n=== 2. DATA TYPES ===");
const str = "hi";
const num = 42;
const bool = true;
const nul = null;
const undef = undefined;
const sym = Symbol("id");
const big = 10n;

console.log(typeof str, typeof num, typeof bool, typeof nul,
            typeof undef, typeof sym, typeof big);
console.log("typeof null:", typeof null); // "object" (famous bug)

// Falsy values
const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log("falsy count:", falsy.filter(v => !v).length); // 8


/* =========================================================
   3. OPERATORS
   ========================================================= */
console.log("\n=== 3. OPERATORS ===");
console.log("5 + 2 =", 5 + 2);
console.log("5 % 2 =", 5 % 2);
console.log("5 ** 2 =", 5 ** 2);
console.log("5 == '5':", 5 == "5");   // true
console.log("5 === '5':", 5 === "5"); // false
console.log("null == undefined:", null == undefined); // true
console.log("NaN === NaN:", NaN === NaN);             // false

console.log("0 || 'default':", 0 || "default"); // "default"
console.log("0 ?? 'default':", 0 ?? "default"); // 0

const user3 = { address: null };
console.log("optional chain:", user3?.address?.city); // undefined

let xOr = 0; xOr ||= 5;   console.log("||= :", xOr); // 5
let xNull = 0; xNull ??= 5; console.log("??= :", xNull); // 0


/* =========================================================
   4. STRINGS
   ========================================================= */
console.log("\n=== 4. STRINGS ===");
const s = "Hello World";
console.log(s.length, s.toUpperCase(), s.includes("World"));
console.log(s.slice(0, 5), s.split(" "), s.replace("World", "JS"));
console.log(s.repeat(2));

const name4 = "Sam";
console.log(`Hi ${name4}, you have ${2 + 3} messages`);


/* =========================================================
   5. ARRAYS
   ========================================================= */
console.log("\n=== 5. ARRAYS ===");
const a = [1, 2, 3];
a.push(4); console.log("push:", a);
a.pop();   console.log("pop:", a);
a.unshift(0); console.log("unshift:", a);
a.shift();    console.log("shift:", a);
console.log("slice(1,3):", a.slice(1, 3));
console.log("join:", a.join("-"));

const nums = [1, 2, 3, 4];
console.log("map:", nums.map(n => n * 2));
console.log("filter:", nums.filter(n => n % 2 === 0));
console.log("reduce:", nums.reduce((sum, n) => sum + n, 0));
console.log("find:", nums.find(n => n > 2));
console.log("findIndex:", nums.findIndex(n => n > 2));
console.log("some:", nums.some(n => n > 3));
console.log("every:", nums.every(n => n > 0));
console.log("sort:", [...nums].sort((a, b) => b - a));
console.log("Array.from:", Array.from("abc"));
console.log("spread:", [...nums, 5]);


/* =========================================================
   6. OBJECTS
   ========================================================= */
console.log("\n=== 6. OBJECTS ===");
const user6 = {
  name: "Sam",
  age: 30,
  greet() { return `Hi ${this.name}`; }
};
console.log(user6.name, user6["name"], user6.greet());
user6.email = "s@x.com";
delete user6.age;
console.log(user6);

const { name: userName, email = "none" } = user6;
console.log({ userName, email });

const copy6 = { ...user6, city: "NYC" };
console.log("copy:", copy6);

console.log("keys:", Object.keys(user6));
console.log("values:", Object.values(user6));
console.log("entries:", Object.entries(user6));

const n6 = "Sam", a6 = 30;
console.log("shorthand:", { n6, a6 });

const key6 = "id";
console.log("computed:", { [key6]: 1 });


/* =========================================================
   7. FUNCTIONS
   ========================================================= */
console.log("\n=== 7. FUNCTIONS ===");
function add(a, b) { return a + b; }
const add2 = function (a, b) { return a + b; };
const add3 = (a, b) => a + b;
const square = n => n * n;
const makeObj = () => ({ x: 1 });

console.log(add(1, 2), add2(1, 2), add3(1, 2), square(4), makeObj());

function greet(name = "world") { return `Hi ${name}`; }
console.log(greet(), greet("Sam"));

function sumAll(...nums) { return nums.reduce((a, b) => a + b, 0); }
console.log("rest:", sumAll(1, 2, 3));


/* =========================================================
   8. CONTROL FLOW
   ========================================================= */
console.log("\n=== 8. CONTROL FLOW ===");
const age8 = 20;
if (age8 >= 18) console.log("adult"); else console.log("minor");
console.log("ternary:", age8 >= 18 ? "adult" : "minor");

const color = "red";
switch (color) {
  case "red":   console.log("red!"); break;
  case "blue":  console.log("blue!"); break;
  default:      console.log("other");
}

for (let i = 0; i < 3; i++) console.log("for:", i);
for (const item of [10, 20]) console.log("for-of:", item);
for (const k in { a: 1, b: 2 }) console.log("for-in key:", k);

let w = 0;
while (w < 2) { console.log("while:", w); w++; }

for (const n of [-1, 2, 200]) {
  if (n < 0) continue;
  if (n > 100) break;
  console.log("loop:", n);
}


/* =========================================================
   9. DESTRUCTURING & SPREAD
   ========================================================= */
console.log("\n=== 9. DESTRUCTURING ===");
const [first, second, ...restArr] = [1, 2, 3, 4];
console.log({ first, second, restArr });

let sw1 = 1, sw2 = 2;
[sw1, sw2] = [sw2, sw1];
console.log("swap:", sw1, sw2);

const src = { id: 7, name: "Zoe", role: "admin" };
const { id, name: renamed = "anon", ...others } = src;
console.log({ id, renamed, others });

const m1 = [1, 2], m2 = [3, 4];
console.log("merged:", [...m1, ...m2]);
console.log("max:", Math.max(...m1, ...m2, 100));


/* =========================================================
   10. ASYNC
   ========================================================= */
console.log("\n=== 10. ASYNC ===");

// Callback
setTimeout(() => console.log("setTimeout fired"), 0);

// Promise
const p = new Promise((resolve, reject) => {
  Math.random() > 0.2 ? resolve("resolved!") : reject(new Error("failed"));
});
p.then(v => console.log("promise:", v))
 .catch(e => console.log("promise err:", e.message))
 .finally(() => console.log("promise cleanup"));

// async/await
async function demoAsync() {
  try {
    const val = await Promise.resolve("awaited value");
    console.log("async:", val);
  } catch (e) {
    console.error(e);
  }
}
demoAsync();

// Combinators
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(v => console.log("Promise.all:", v));
Promise.allSettled([Promise.resolve(1), Promise.reject("x")])
  .then(v => console.log("Promise.allSettled:", v.map(r => r.status)));
Promise.race([new Promise(r => setTimeout(() => r("fast"), 5)),
              new Promise(r => setTimeout(() => r("slow"), 50))])
  .then(v => console.log("Promise.race:", v));
Promise.any([Promise.reject("a"), Promise.resolve("b")])
  .then(v => console.log("Promise.any:", v));

// Event loop order
console.log("eventloop 1");
setTimeout(() => console.log("eventloop 2 (macro)"));
Promise.resolve().then(() => console.log("eventloop 3 (micro)"));
console.log("eventloop 4");
// → 1, 4, 3, 2


/* =========================================================
   11. CLASSES
   ========================================================= */
console.log("\n=== 11. CLASSES ===");
class Animal {
  #secret = 42;             // private
  static kingdom = "Animalia";
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound`; }
  get shout() { return this.speak().toUpperCase(); }
  static create(n) { return new Animal(n); }
}
class Dog extends Animal {
  constructor(name, breed) { super(name); this.breed = breed; }
  speak() { return `${this.name} barks`; }
}

const d = new Dog("Rex", "Lab");
console.log(d.speak());
console.log("shout:", d.shout);
console.log("instanceof Animal:", d instanceof Animal);
console.log("static kingdom:", Animal.kingdom);
console.log("static factory:", Animal.create("Cat").speak());


/* =========================================================
   12. MODULES (shown as comments — can't run in one file)
   ========================================================= */
console.log("\n=== 12. MODULES (comments) ===");
// math.js:
//   export const PI = 3.14;
//   export function add(a,b){ return a+b; }
//   export default function mul(a,b){ return a*b; }
// main.js:
//   import mul, { PI, add } from "./math.js";
//   import * as math from "./math.js";
console.log("(see comments)"); 


/* =========================================================
   13. ERROR HANDLING
   ========================================================= */
console.log("\n=== 13. ERRORS ===");
try {
  throw new Error("boom");
} catch (err) {
  console.log("caught:", err.message);
} finally {
  console.log("finally always runs");
}

class ValidationError extends Error {
  constructor(msg) { super(msg); this.name = "ValidationError"; }
}
try { throw new ValidationError("bad input"); }
catch (e) { console.log(e.name + ": " + e.message); }


/* =========================================================
   14. GOTCHAS
   ========================================================= */
console.log("\n=== 14. GOTCHAS ===");
console.log("[] + []:", [] + []);
console.log("[] + {}:", [] + {});
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);

const ref1 = [1, 2, 3];
const ref2 = ref1;
ref2.push(4);
console.log("same reference:", ref1);

const shallow = { a: 1, b: { c: 2 } };
const shallowCopy = { ...shallow };
shallowCopy.b.c = 99;
console.log("shallow leaked:", shallow.b.c); // 99

const deepCopy = structuredClone({ a: 1, b: { c: 2 } });
deepCopy.b.c = 100;
console.log("deep safe:", deepCopy.b.c);


/* =========================================================
   15. MODERN SYNTAX
   ========================================================= */
console.log("\n=== 15. MODERN SYNTAX ===");
console.log("optional chain:", ({ a: { b: () => 42 } })?.a?.b?.()); // 42
console.log("nullish:", null ?? "fallback");
let la = 0; la ||= 5;  console.log("||=:", la);
let lb = 1; lb &&= 9;  console.log("&&=:", lb);
let lc = 0; lc ??= 7;  console.log("??=:", lc);
console.log("numeric sep:", 1_000_000);
console.log("bigint:", 9007199254740993n);
console.log("at(-1):", [1, 2, 3].at(-1));


/* =========================================================
   16. PRACTICE DRILLS (with answers)
   ========================================================= */
console.log("\n=== 16. DRILLS ===");
console.log("drill1:", [1, 2, 3, 4].filter(n => n % 2).map(n => n * 10));
const { a: da = 1, b: db = 2 } = { a: 5 };
console.log("drill2:", { da, db });

// drill3 - order
setTimeout(() => console.log("drill3: t"), 0);
Promise.resolve().then(() => console.log("drill3: p"));
console.log("drill3: s");
// → s, p, t

// drill5 - deep clone comparison
const orig = { when: new Date(), set: new Set([1, 2]) };
const sc = structuredClone(orig);
console.log("structuredClone keeps Date:", sc.when instanceof Date);
console.log("structuredClone keeps Set:", sc.set instanceof Set);


/* =========================================================
   17. HABITS CHECKLIST (comments)
   ========================================================= */
// ✅ const first, let when needed
// ✅ === / !==
// ✅ ?? for defaults (allows 0 and "")
// ✅ map/filter/reduce over manual loops
// ✅ async/await over .then chains
// ✅ destructure params & props
// ✅ ESLint + Prettier
// ✅ understand the event loop


console.log("\n✅ All sections executed.\n");