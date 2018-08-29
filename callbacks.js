//A-synchronized code and call backs (non blocking)

function getData(callBack) {
    const dataFromDB = 'OwO whats this? *grabs buldge*';
    setTimeout(() => callBack(dataFromDB), 1000);
}
getData((data) => {
    console.log(data);
});
