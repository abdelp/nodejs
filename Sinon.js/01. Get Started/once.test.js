import once from './once'
import { it, fake, assert } from 'sinon'

it('calls the original function', () => {
  const callback = fake()
  const proxy = once(callback)

  proxy()

  assert(callback.called)
})

it('calls the original function only once', () => {
  const callback = fake()
  const proxy = once(callback)

  proxy()
  proxy()

  assert(callback.calledOnce)
  // ...or:
  // assert.equals(callback.callCount, 1);
})

it('calls original function with right this and args', () => {
  const callback = fake()
  const proxy = once(callback)
  const obj = {}

  proxy.call(obj, 1, 2, 3)

  assert(callback.calledOn(obj))
  assert(callback.calledWith(1, 2, 3))
})

it('returns the return value from the original function', () => {
  const callback = fake.returns(42)
  const proxy = once(callback)

  assert.equals(proxy(), 42)
})
