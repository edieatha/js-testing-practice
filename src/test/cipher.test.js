import caesar from '../cipher'

test('Cipher from z to a', () => {
  expect(caesar('abcdefghijklmnopqrstuvwxyz')).toEqual('bcdefghijklmnopqrstuvwxyza');
});

test('Cipher attack at dawn shift 5', () => {
  expect(caesar('attack at dawn', 5)).toEqual('fyyfhp fy ifbs');
});

test('Cipher hello, how are you? shift 1', () => {
  expect(caesar('hello, how are you?')).toEqual('ifmmp, ipx bsf zpv?');
});

test('Cipher HELLO, HOW ARE YOU? shift 1', () => {
  expect(caesar('HELLO, HOW ARE YOU?')).toEqual('IFMMP, IPX BSF ZPV?');
});

test('Cipher Hello, How are you? shift 1', () => {
  expect(caesar('Hello! How are you?')).toEqual('Ifmmp! Ipx bsf zpv?');
});
