// Tìm kiếm tuần tự (Linear Search):
// Ưu điểm: Đơn giản, dễ hiểu, dễ triển khai.
// Nhược điểm: Hiệu quả kém khi danh sách/mảng lớn.
// Phù hợp: Dữ liệu nhỏ, không cần hiệu suất cao.

function linearSearch(arr: number[], target: number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

