const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task");
    resolve();
  }, 3000);
}).then(() => {
  console.log("Task Resolved");
});


const getData =  async () => {
    const data = await fetch("http//api.com")
    const jsonData = await data.json();
    return jsonData;
}