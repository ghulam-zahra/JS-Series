// fetch queue is also called micro task queue and priority queue
// micro task queue is a queue of tasks that are executed after the current task is completed and before the next task in the event loop is executed.
// 404 errors are also go into the on fulfilled array
// when a request is not go or any response is not occur then it goes into the on rejected array.
const request = fetch('https://jsonplaceholder.typicode.com/posts/1');
request.then((response) => {
    console.log('on fulfilled', response);
}).catch((error) => {
    console.log('on rejected', error);
});