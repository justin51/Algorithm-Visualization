
let w = 4;
let values = [];
let states = [];

function setup() {
    createCanvas(800, 500);
    values = new Array(floor(width / w));
    for (i = 0; i < values.length; i++) {
        values[i] = Math.random()*height*.76+height*.12;    
    }

    quickSort(values, 0, values.length-1);
}

function draw() {
    background(0);
    stroke(0);
    fill(235)
    for (i = 0; i < values.length; i++) {
        rect(i*w, height - values[i], w, values[i]);
    }
}

// main qsort method with array, lower and upper bound
async function quickSort(arr, lb, ub) {
    // lower bound crossed upper bound
    if (lb >= ub) return;

    // index j = the index of the "pivot"
    let j = await partition(arr, lb, ub);

    await Promise.all([
        quickSort(arr, lb, j-1),
        quickSort(arr, j+1, ub)
    ]);
}

async function partition(arr, lb, ub) {
    let a = arr[lb]; // the pivot element
    let up = ub;
    let down = lb;

    //traverse the array and swap elements
    while (down < up) {
        while (arr[down] <= a && down < ub) {
            down++;
        }
        while (arr[up] > a) {
            up--;
        }
        if (down < up) {
            await swap(arr, down, up);
        }
    }

    arr[lb] = arr[up];
    arr[up] = a;

    //return the index where the pivot is now a
    return up;
} // end partition

async function swap(arr, a, b) {
    await sleep(70);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
