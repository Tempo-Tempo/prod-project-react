import { classNames } from 'shared/lib/classNames/classNames';

describe('classNamesTest', () => {
    test('className', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('className+additional', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });
    test('className', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
    test('className', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
