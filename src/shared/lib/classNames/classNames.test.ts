import classNames from 'shared/lib/classNames/classNames';

describe('classNames tests', () => {
  test('first test', () => {
    expect(classNames('classname')).toBe('classname');
  });

  test('function with one arg', () => {
    const expected = 'className1 className2 className3';

    expect(classNames('className1', {}, ['className2', 'className3'])).toBe(
      expected
    );
  });

  test('function with two arg', () => {
    const expected = 'className1 className3 className2';
    expect(classNames('className1', { className2: true }, ['className3'])).toBe(
      expected
    );
  });

  test('function with three arg', () => {
    const expected = 'className1 className3';
    expect(
      classNames('className1', { className2: false }, ['className3'])
    ).toBe(expected);
  });

  test('function with underfined arg', () => {
    const expected = 'className1 className3 hovered';
    expect(
      classNames(
        'className1',
        { className2: false, className4: undefined, hovered: true },
        ['className3']
      )
    ).toBe(expected);
  });
});
