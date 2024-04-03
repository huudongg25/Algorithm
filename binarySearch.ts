// Tìm kiếm nhị phân (Binary Search):

// Mô tả: Chỉ áp dụng cho danh sách/mảng đã được sắp xếp. Chia đôi danh sách/mảng liên tục cho đến khi tìm thấy phần tử cần tìm hoặc loại trừ khả năng phần tử đó tồn tại.
// Ưu điểm:
// Rất hiệu quả khi danh sách/mảng lớn và đã được sắp xếp.
// Độ phức tạp thời gian trung bình là O(log n), nơi n là số lượng phần tử trong danh sách/mảng.
// Nhược điểm:
// Yêu cầu danh sách/mảng phải được sắp xếp trước khi sử dụng.
// Phức tạp hơn so với tìm kiếm tuần tự.

function binarySearch(arr: number[], target: number) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const currentVal = arr[mid];

        if (currentVal === target) {
            return mid; // Vị trí của phần tử tìm thấy
        } else if (currentVal < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // Phần tử không được tìm thấy
}

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(binarySearch(numbers4, 10))