interface Rect {
    //параметр только для чтения
    readonly id: string
    //необязательный параметр
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '123456',
    size: {
        width: 20,
        height: 6
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

