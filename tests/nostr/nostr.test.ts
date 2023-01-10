import { delay } from 'app/lib/utils'
import { Nostr, NostrEvent } from 'lib/nostr'
import { RelayPoolSubscription } from 'nostr-relaypool'

describe('Nostr class', () => {
  let nostr: Nostr
  let sub: RelayPoolSubscription
  beforeEach(async () => {
    nostr = new Nostr()
    await delay(1000)
  })

  afterEach(async () => {
    if (sub) {
      sub.unsub()
    }
    await delay(1000)
    nostr.close()
  })

  test('initial subscriptions', () => {
    // const sub = nostr.setupInitialSubscriptions()
    // sub = nostr.setupInitialSubscriptions()
    expect(sub).toBeDefined()
    // additional assertions to check if the subscription has been set up correctly
  })

  //   test('publish event', () => {
  //     const event: NostrEvent = {
  //       kind: 1,
  //       pubkey: '',
  //       created_at: Date.now(),
  //       tags: [],
  //       content: 'hello world',
  //     }
  //     const pub = nostr.publish(event)
  //     expect(pub).toBeDefined()
  //     // additional assertions to check if the event has been published correctly
  //   })

  //   test('set keys', () => {
  //     const publicKey =
  //       '22a12a128a3be27cd7fb250cbe796e692896398dc1440ae3fa567812c8107c1c'
  //     const privateKey =
  //       '5c6c25b7ef18d8633e97512159954e1aa22809c6b763e94b9f91071836d00217'
  //     nostr.setKeys(publicKey, privateKey)
  //     expect(nostr.publicKey).toEqual(publicKey)
  //     // additional assertions to check if the keys have been set correctly
  //   })

  //   test('subscribe', () => {
  //     const filters = [{ kinds: [42], limit: 30, '#e': ['channelId'] }]
  //     const mockHandleEvent = jest.fn()
  //     const mockUseStore = {
  //       getState: jest.fn().mockReturnValue({
  //         chatActions: {
  //           addChannel: mockHandleEvent,
  //           addMessage: mockHandleEvent,
  //         },
  //       }),
  //     }
  //     jest.mock('stores', () => ({
  //       useStore: mockUseStore,
  //     }))

  //     const sub = nostr.subscribe(filters)
  //     expect(sub).toBeDefined()
  //     expect(mockUseStore.getState).toHaveBeenCalled()
  //   })
})
