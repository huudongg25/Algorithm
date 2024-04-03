// Sắp xếp nổi bọt (Bubble Sort):
// Thuật toán đơn giản, dễ hiểu và dễ triển khai.
// Hiệu quả kém cho mảng lớn.
// Độ phức tạp thời gian trung bình là O(n^2).

function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


const numbers3 = [2, 5, 6, 7, 4, 8, 11, 0, 3]

console.log(bubbleSort(numbers3))