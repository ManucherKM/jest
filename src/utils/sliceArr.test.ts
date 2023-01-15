import { sliceArr } from './sliceArr'

describe('Тестирование функции сокращения массива', () => {
	test.each([1, 2, 3, 4, 5])('Правильное значение', a => {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		expect(sliceArr(arr, a)).toEqual(arr.slice(0, a))
	})
})
