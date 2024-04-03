// Quick Sort:
// Thuật toán "chia và trị" hiệu quả nhất.
// Độ phức tạp thời gian trung bình là O(n log n), nhưng có thể tồi tệ nhất là O(n^2).
// JavaScript
// Sẽ lấy phần tử pivot ở giữa của mảng và so sánh lần lượt với tất cả 
// Push các item nhỏ hơn vào phía mảng bên trái và ngược lại
// Sau đó đệ quy tiếp 2 mảng vừa rồi và nối lại

function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left: number[] = [];
    const right: number[] = [];

    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([pivot]).concat(quickSort(right));
}

const numbers = [2, 5, 6, 7, 4, 8, 11, 10, 0]

console.log(quickSort(numbers))