function bai1() {
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = (Math.random() * (-20) + Math.random() * 30).toFixed(2);
    }
    document.write(arr);
    function sumGreater(array){
        let sum = 0;
        for(i=1;i<array.length;i++){
            if(Number(array[i])>Number(array[i-1])){
                sum += Number(array[i]);
            }
        }
        return sum;
    }
    document.write(sumGreater(arr));
}

function bai2() {
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = (Math.random() * (-20) + Math.random() * 30).toFixed(2);
    }
    document.write(arr);
    function avgSum(array){
        let sum =0;
        let avg;
        let count = 0;
        for(i=0;i<array.length;i++){
            if(array[i]>=0){
                count++;
                sum += Number(array[i]);
                avg = sum/count;
            }
        }
        return avg;
    }
    document.write(avgSum(arr));
}

function bai3(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = Number(Math.ceil(Math.random() * 30));
    }
    document.write(arr);
    function moveNumber(array) {
        let count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 3 == 0) {
                let temp = array[i];
                array[i] = array[count];
                array[count] = temp;
                count++;
            }
        }
        return array;
    }
    document.write(moveNumber(arr));
}
function bai4(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = (Math.random() * (-20) + Math.random() * 30).toFixed(2);
    }
    document.write(arr);
    function reverseArr(array) {
        for (var i = 0; i < array.length / 2; i++) {
            let temp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
        }
        return array;
    }
    document.write(reverseArr(arr));
}
function bai5(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = (Math.random() * (-20) + Math.random() * 30).toFixed(2);
    }
    document.write(arr);
    function logNum(array){
        for(i=0;i<array.length;i++){
            document.write(array[i]);
        }
    }
    logNum(arr);
}
function bai6(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
    }
    document.write(arr);
    function numAbs(array){
        for(i=0;i<array.length;i++){
            if(Number(array[i])>Math.abs(Number(array[i+1]))){
                document.write(array[i]);
            }
        }
    }
    document.write(numAbs(arr));
}
function bai7(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
    }
    document.write(arr);
    function sqrtIndex(array) {
        for (i = 0; i < array.length; i++) {
            let sqt = Math.sqrt(Number(array[i]));
            if (Number.isInteger(sqt)) {
                document.write(i);
            }
        }
    }
    document.write(sqrtIndex(arr));
}
function bai8(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
    }
    document.write(arr);
    function countNegav7(array) {
        let count = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] > 0 && array[i] % 7 == 0){
                count++;
            }
        }
        return count;
    }
    document.write(countNegav7(arr));
}
function bai9(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 80);
    }
    document.write(arr);
    function primeCount(array) {
        let countPrime = 0;
        for (i = 0; i < array.length; i++) {
            let count = 0;
            if (array[i] < 2) {
                count = 1;
            } else {
                for (j = 2; j < array[i]; j++) {
                    if (Number(array[i]) % j == 0) {
                        count++;
                    }
                }
            }
            if (count == 0) {
                countPrime++;
            }
        }
        return countPrime;
    }
    document.write(primeCount(arr));v
}
function bai10(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
    }
    document.write(arr);
    function dblEven(array) {
        let count = 0;
        for (i = 0; i < array.length; i++) {
            if (Number(array[i]) % 2 == 0 && Number(array[i + 1]) % 2 == 0){
                count++;
            }
        }
        return count;
    }
    document.write(dblEven(arr));
}
function bai11(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
    }
    document.write(arr);
    function arrParallel(array){
        let count = 1;
        for(var i =0;i<array.length/2;i++){
            if(array[i] != array[array.length-1-i]){
                count = 0;
                break;
            }
        }
        return count;
    }
    let arr2 = [1,2,3,4,4,3,2,1];
    document.write(arrParallel(arr2));
}
function bai12(){
    let arr = new Array(10);
    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
    }
    document.write(arr);
    function isAscending(array){
        let isAscend = true;
        for(var i =1;i<array.length;i++){
            if(Number(array[i])-Number(array[i-1])<0){
                isAscend = false;
            }
        }
        return isAscend;
    }
    let arrB = [1,2,3,4,5,6,9,10,20];
    document.write(isAscending(arrB));
}
function bai13(){
    function arrInarr(arrayA, arrayB) {
        let isIn = true;
        let count = 0;
        for (var i = 0; i < arrayA.length; i++) {
            for (var j = 0; j < arrayB.length; j++) {
                if (arrayA[i] == arrayB[j]) {
                    count++;
                    break;
                }
            }
        }
        if(count == arrayA.length){
            isIn = true;
        }else{
            isIn = false;
        }
        return isIn;
    }
    let arrA = [1,2,3,1,2,4,5,2,1];
    let arrB = [4,3,2,1];
    document.write(arrInarr(arrA,arrB));
}
function bai14(){
    let arr2Side = new Array(5).fill(new Array(4));
    for (var i = 0; i < arr2Side.length; i++) {
        for (var j = 0; j < arr2Side[i].length; j++) {
            arr2Side[i][j] = Math.ceil(Math.random() * 30);
        }
    }
    var sidesArray = new Array(4).fill(new Array(6));
    for (var row = 0; row < sidesArray.length; row++) {
        for (var column = 0; column < sidesArray[row].length; column++) {
            sidesArray[row][column] = Math.floor((Math.random() * 100) + 1);
        }
    }
    function isAllNegav(matrix) {
        let allNega = true;
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] < 0) {
                    allNega = false;
                }
            }
        }
        return allNega;
    }
    document.write(sidesArray);
    document.write(isAllNegav(sidesArray));
}
function bai15(){
    let matrixA = [];
    function collumnDescending(matrix) {
        let rowMax = matrix[0];
        for (var i = 1; i < matrix.length; i++) {
            if (rowMax < matrix[i]) {
                rowMax = matrix[i];
            }
        }
        for (var collumn = 0; collumn < rowMax.length; collumn++) {
            let flag = 0;
            for (var row = 1; row < matrix.length; row++) {
                if (matrix[row][collumn] > matrix[row - 1][collumn]) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                document.write(`Ma trận tại cột ${collumn} có thứ tự giảm dần!`);
            } else {
                document.write(`Ma trận tại cột ${collumn} không có thứ tự giảm dần!`);
            }
        }
    }
    var numbers = [];
    numbers.push([52, 12, 17, 09, 03]);
    numbers.push([13, 04, 08, 14, 01]);
    numbers.push([09, 06, 03, 07, 21]);
    document.write(numbers);
    collumnDescending(numbers);
}
function bai16(){
    function isEvenInMatrix(matrix) {
        let isEven = false;
        for (var row = 0; row < matrix.length; row++) {
            for (var collumn = 0; collumn < matrix[row].length; collumn++) {
                if (matrix[row][collumn] % 2 != 0) {
                    isEven = true;
                    break;
                }
            }
        }
        return isEven;
    }
    var numbers = [];
    numbers.push([52, 12, 17, 09, 03]);
    numbers.push([13, 04, 08, 14, 01]);
    numbers.push([09, 06, 03, 07, 21]);
    let arr2Side = new Array(5).fill(new Array(4));
    for (var i = 0; i < arr2Side.length; i++) {
        for (var j = 0; j < arr2Side[i].length; j++) {
            arr2Side[i][j] = (Math.ceil(Math.random() * 30))*2;
        }
    }
    document.write(arr2Side);
    document.write(isEvenInMatrix(arr2Side));
}
function bai17(){
    function rowDescending(matrix){
        for(var row =0; row<matrix.length;row++){
            let isDescend = true;
            for(var collumn = 1; collumn<matrix[row].length;collumn++){
                if(matrix[row][collumn] > matrix[row][collumn-1]){
                    isDescend = false;
                    break;
                }
            }
            if(isDescend){
                document.write(`Dòng ${row} giảm dần`);
            }
        }
    }
    var numbers = [];
    numbers.push([52, 19, 17, 09, 03]);
    numbers.push([13, 04, 08, 14, 01]);
    numbers.push([09, 06, 03, 07, 21]);
    document.write(numbers);
    document.write(rowDescending(numbers));
}
function bai18(){
    function firstEven(matrix){
        for (var row = 0;row<matrix.length;row++){
            for(var collumn=0;collumn<matrix[row].length;collumn++){
                if(matrix[row][collumn]%2==0){
                    let first = matrix[row][collumn];
                    return first;
                }
            }
        }
    }
    var numbers = [];
    numbers.push([53, 12, 17, 09, 03]);
    numbers.push([13, 04, 08, 14, 01]);
    numbers.push([09, 06, 03, 07, 21]);
    document.write(numbers);
    document.write(firstEven(numbers));
}
function bai19(){
    function biggestEven(matrix) {
        let evenArr=[];
        for (var row = 0; row < matrix.length; row++) {
            for (var collumn = 0; collumn < matrix[row].length; collumn++) {
                if (matrix[row][collumn] % 2 == 0) {
                    evenArr.push(matrix[row][collumn]);
                }
            }
        }
        document.write(evenArr);
        let evenMax = evenArr[0];
        for (var i = 1; i < evenArr.length; i++) {
            if (evenMax < evenArr[i]) {
                evenMax = evenArr[i];
            }
        }
        return evenMax;
    }
    var numbers = [];
    numbers.push([53, 12, 17, 09, 03]);
    numbers.push([13, 04, 08, 14, 01]);
    numbers.push([09, 06, 03, 07, 21]);
    document.write(numbers);
    document.write(biggestEven(numbers));
}
function bai20(){
    function maxSumRow(matrix){
        let sumArr = [];
        for(var row = 0; row<matrix.length;row++){
            let sum=0;
            for(var collumn = 0 ;collumn<matrix[row].length;collumn++){
                sum+= matrix[row][collumn];
            }
            sumArr.push(sum);
        }
        let sumMax = sumArr[0];
        let index = 0;
        for(var i=1;i<sumArr.length;i++){
            if(sumMax<sumArr[i]){
                sumMax = sumArr[i];
                index = i;
            }
        }
        document.write(`Dòng có tổng lớn nhất là ${index} với tổng ${sumMax}`);
    }
    var numbers = [];
    numbers.push([53, 12, 17, 09, 03]);
    numbers.push([13, 04, 08, 14, 01]);
    numbers.push([99, 06, 03, 07, 21]);
    document.write(numbers);
    document.write(maxSumRow(numbers));
}