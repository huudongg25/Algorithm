// Sắp xếp chọn lọc (Selection Sort):
// Tương tự như Bubble Sort, nhưng hiệu quả hơn một chút.
// Độ phức tạp thời gian trung bình là O(n^2).

function selectionSort(arr: number[]):number[] {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}


const numbers2 = [2, 5, 6, 7, 4, 8, 11, 10, 0]

console.log(selectionSort(numbers2))