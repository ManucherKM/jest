import { ArrNumToStr } from './ArrNumToStr'

describe('Перевод массив чисел в массив строк', () => {
	test('Тест 1', () => {
		const arr = [1, 2, 3]
		expect(ArrNumToStr(arr)).toEqual(['1', '2', '3'])
	})
})
