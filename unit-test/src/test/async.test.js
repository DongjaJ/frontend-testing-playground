const fetchProduct = require('../async');

describe('Async', () => {
  it('async - done', (done) => {
    fetchProduct('some').then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  it('async - return', () => {
    return fetchProduct('some').then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct('some');
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolve', async () => {
    return expect(fetchProduct('some')).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });

  it('async - reject', async () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
