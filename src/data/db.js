const posts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    body: "JavaScript closures are functions that have access to the outer function’s variables, even after the outer function has closed.",
  },
  {
    id: 2,
    title: "A Guide to Modern JavaScript",
    body: "Modern JavaScript, also known as ES6+, includes new syntax and features that make writing JavaScript easier and more efficient.",
  },
  {
    id: 3,
    title: "Introduction to Asynchronous Programming",
    body: "Asynchronous programming in JavaScript allows your code to perform long network requests or heavy computations without blocking the main thread.",
  },
  {
    id: 4,
    title: "JavaScript Array Methods You Should Know",
    body: "Mastering JavaScript array methods like map, filter, and reduce can significantly enhance your coding efficiency and productivity.",
  },
  {
    id: 5,
    title: "Understanding JavaScript Promises",
    body: "JavaScript promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.",
  },
];
export function getPosts() {
  return posts;
}
