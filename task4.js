/* 
    -Task no. : 4
    -Task Description: A function merges two lists by alternatingly taking elements
    -Author: Ali Abdulkareem Shamit
*/

var array1 = [1, 2, 5, 8, 0];
var n1 = array1.length;
var array2 = [9, 4, 8, 7, 6];
var n2 = array2.length;
var array3 = [];
array3.length = n1 + n2;

function alternateMerge(arr1, arr2, n1, n2, arr3) {
    var i = 0, j = 0, k = 0;

    // Traverse both array 
    // it will be excuted if arr1.length == arr2.length or only for equal indexes
    while (i < n1 && j < n2) {
        arr3[k++] = arr1[i++];
        arr3[k++] = arr2[j++];
    }

    // Store remaining elements of first array 
    // it will be excuted if arr1.length > arr2.length to avoid printing empty value
    while (i < n1)
        arr3[k++] = arr1[i++];

    // Store remaining elements of second array 
    // it will be excuted if arr2.length > arr1.length to avoid printing empty value
    while (j < n2)
        arr3[k++] = arr2[j++];
        
    console.log(arr3)
} 

alternateMerge(array1, array2, n1, n2, array3);