$(function () {
    var arr = [55,26,93,95,71,8,61,67,87,91,51,14,29,21,87,80,22,57,99,42,64,61,83,15,90,86,85,88,17,94,90,91,42,90,61,89,88,38,81,90,57,62,60,5,99,84,22,79,83,55,1,32,4,9,73,71,24,37,50,36,92,93,4,30,9,8,87,67,81,100,93,90,100,55,73,10,84,47,41,8,66,99,40,41,37,33,20,84,10,16,34,53,44,76,20,10,74,29,45,33,53,5,93,35,41,9,39,81,50,54,64,77,57,33,16,90,22,57,76,95,57,33,18,83,42,32,83,17,26,98,37,62,85,74,90,51,45,58,89,63,42,5,34,23,26,66,12,50,58,90,36,11,65,3,31,31,6,91,9,97,43,25,26,3,92,79,53,64,22,9,36,69,86,19,18,10,35,63,59,58,53,73,25,67,50,5,72,35,52,14,42,29,4,63,23,24,61,77,12,66,45,4,57,3,59,69,93,30,71,14,95,65,18,71,91,14,2,17,32,70,65,43,2,57,36,81,43,87,78,99,79,66,33,21,27,11,66,57,99,52,88,27,57,16,4,4,23,51,41,41,68,34,45,18,33,67,76,48,28,18,10,31,81,60,99,50,59,16,40,40,11,14,33,45,87,57,68,60,79,65,32,9,78,20,89,9,12,77,74,40,48,69,6,64,42,12,51,23,26,80,72,45,59,43,6,77,74,94,85,10,28,5,51,57,62,98,2,65,81,47,89,98,8,91,41,4,39,4,33,17,58,37,59,24,16,51,14,71,54,83,18,66,77,71,79,96,36,43,68,43,7,93,84,92,38,73,25,76,71,15,78,41,85,16,51,19,69,18,72,3,74,61,75,56,97,40,65,3,58,28,77,59,53,18,86,16,6,26,34,94,86,82,37,19,83,53,100,74,54,40,59,19,11,38,35,17,93,77,68,42,20,87,47,28,76,91,32,65,35,74,71,98,45,63,52,41,13,21,76,91,94,72,54,16,70,55,62,38,65,69,55,62,56,80,97,66,38,51,25,57,27,81,21,93,83,78,51,33,66,7,58,69,40,34,16,82,89,59,96,3,93,90,75,33,79,3,59,45,58,54,34,81,61,6,4,86,99,6,92,67,49,50,23,29,100,50,14,91,28,7,66,92,60,78,50,85,44,39,25,31,34,90,14,8,37,48,18,46,67,26,47,29,95,45,46,67,92,9,76,10,88,52,23,59,57,10,51,63,32,10,40,22,46,80,65,51,83,78,76,81,98,91,37,92,15,68,37,20,3,77,42,54,5,62,82,46,22,88,62,85,1,50,89,57,40,6,93,83,54,73,16,57,73,60,14,2,56,53,65,84,91,5,37,6,82,82,60,38,75,95,72,48,32,87,25,40,8,82,48,68,39,34,57,82,53,12,61,74,10,85,84,83,51,40,36,22,92,23,71,40,32,46,56,34,59,99,37,40,9,30,7,55,16,47,99,13,54,22,86,16,31,77,15,24,20,3,96,12,87,68,70,40,52,98,91,68,2,9,40,40,21,83,56,1,96,88,59,23,20,3,75,86,54,46,48,31,59,40,87,84,22,88,97,94,80,8,89,52,10,66,59,71,77,15,65,47,40,15,27,92,46,20,81,13,13,22,85,93,21,63,30,83,100,44,70,81,90,77,100,13,36,4,12,36,97,72,33,4,99,52,74,94,53,75,73,40,37,5,76,22,26,51,93,97,21,28,100,41,22,99,82,17,76,72,86,87,96,71,13,91,3,19,10,82,84,95,68,35,21,73,96,28,42,59,12,17,70,42,81,27,75,41,82,52,39,81,45,37,10,21,61,28,26,45,8,77,39,72,73,42,73,10,90,35,63,13,41,64,75,31,20,11,80,21,8,52,11,32,63,43,84,87,30,61,99,74,32,94,74,40,98,38,69,70,28,27,4,63,56,99,85,19,60,77,97,15,65,6,52,95,28,20,45,72,92,83,88,55,44,37,11,3,25,100,11,25,68,10,6,58,21,3,8,20,80,20,96,12,84,98,59,67,90,60,15,51,33,95,29,7,19,61,75,35,90,18,21,33,2,52,78,54,36,29];
   /*var arr =[];
    while(arr.length < 1000) {
        var randomnumber = Math.floor((Math.random() * 1000) + 1);
        arr.push(randomnumber);
    }*/
    $('#allNum').text(arr);
   /* $("#bubble").on('click', function () {
        var b0 = performance.now();

        arr.sort(function(a, b) {
            return a - b;
        });



        $("#allNum").text(arr);
        var b1 = performance.now();
        alert(b1 - b0);
    });*/
    $("#bubble").on('click', function () {
        var c0 = performance.now();

        function swap(arr, first_Index, second_Index){
            var temp = arr[first_Index];
            arr[first_Index] = arr[second_Index];
            arr[second_Index] = temp;
        }

        function bubble(arr){

            var len = arr.length,
                i, j, stop;

            for (i=0; i < len; i++){
                for (j=0, stop=len-i; j < stop; j++){
                    if (arr[j] > arr[j+1]){
                        swap(arr, j, j+1);
                      /*  console.log(arr);
                        alert(arr);*/
                    }
                }
            }
            return arr;
        }

        $("#allNum").text(bubble(arr));
        var c1 = performance.now();
        alert(c1 - c0 + 'ms');
    });
    $("#merger").on('click', function () {
        var c0 = performance.now();

        function mergeSort (arr) {
            if (arr.length === 1) {
                // return once we hit an array with a single item
                return arr
            }

            const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
            const left = arr.slice(0, middle); // items on the left side
            const right = arr.slice(middle); // items on the right side

            return merge(
                mergeSort(left),
                mergeSort(right)
            )
        }

// compare the arrays item by item and return the concatenated result
        function merge (left, right) {
            let result = [];
            let indexLeft = 0;
            let indexRight = 0;

            while (indexLeft < left.length && indexRight < right.length) {
                if (left[indexLeft] < right[indexRight]) {
                    result.push(left[indexLeft]);
                    indexLeft++
                } else {
                    result.push(right[indexRight]);
                    indexRight++
                }
            }

            return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
        }

        $("#allNum").text(mergeSort(arr));
        var c1 = performance.now();
        alert(c1 - c0 + 'ms');
    });
    $("#counting").on('click', function () {
        var c0 = performance.now();

        function countingSort(arr, min, max)
        {
            var i, z = 0, count = [];

            for (i = min; i <= max; i++) {
                count[i] = 0;
            }

            for (i=0; i < arr.length; i++) {
                count[arr[i]]++;
            }

            for (i = min; i <= max; i++) {
                while (count[i]-- > 0) {
                    arr[z++] = i;
                }
            }
            return arr;
        }
        /*var arra = [3, 0, 2, 5, 4, 1];
        console.log(arra.length);
        console.log("Original Array Elements");
        console.log(arra);
        console.log("Sorted Array Elements");
        console.log(countingSort(arra, 0, 4));*/

        $("#allNum").text(countingSort(arr, 0, 1000));
        var c1 = performance.now();
        alert(c1 - c0 + 'ms');
    });
    $("#heap").on('click', function () {
        var c0 = performance.now();

        var array_length;
        /* to create MAX  array */
        function heap_root(input, i) {
            var left = 2 * i + 1;
            var right = 2 * i + 2;
            var max = i;

            if (left < array_length && input[left] > input[max]) {
                max = left;
            }

            if (right < array_length && input[right] > input[max])     {
                max = right;
            }

            if (max !== i) {
                swap(input, i, max);
                heap_root(input, max);
            }
        }

        function swap(input, index_A, index_B) {
            var temp = input[index_A];

            input[index_A] = input[index_B];
            input[index_B] = temp;
        }

        function heapSort(input) {

            array_length = input.length;

            for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
                heap_root(input, i);
            }

            for (i = input.length - 1; i > 0; i--) {
                swap(input, 0, i);
                array_length--;


                heap_root(input, 0);
            }
        }
        heapSort(arr);

        $("#allNum").text(arr);
        var c1 = performance.now();
        alert(c1 - c0 + 'ms');
    });
    $("#quick").on('click', function () {
        var c0 = performance.now();

        function quick_Sort(origArray) {
            if (origArray.length <= 1) {
                return origArray;
            } else {

                var left = [];
                var right = [];
                var newArray = [];
                var pivot = origArray.pop();
                var length = origArray.length;

                for (var i = 0; i < length; i++) {
                    if (origArray[i] <= pivot) {
                        left.push(origArray[i]);
                    } else {
                        right.push(origArray[i]);
                    }
                }

                return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
            }
        }
        var sortedArray = quick_Sort(arr);
       $("#allNum").text(sortedArray);
        var c1 = performance.now();
        alert(c1 - c0 + 'ms');
    });



    $("#reload").on('click', function () {
       location.reload();
    });
});