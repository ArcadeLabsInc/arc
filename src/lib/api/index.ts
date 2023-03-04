import * as secp256k1 from '@noble/secp256k1'
import axios from 'axios'
import * as Crypto from 'expo-crypto'
import { randomFourLetterString } from 'lib/utils'
import { useStore } from 'stores/index'

export const getApiToken = async () => {
  const device_name = `Unknown Device ${randomFourLetterString()}`
  const pubkey = useStore.getState().user.publicKey
  const res = await axios.post('http://localhost:8000/api/nonce', {
    pubkey,
    device_name,
  })
  const data = await res.data
  const nonce = data.nonce
  const privateKey = useStore.getState().user.privateKey
  const secpPublicKey = secp256k1.getPublicKey(privateKey)

  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    nonce
  )

  const signature = secp256k1.utils.bytesToHex(
    secp256k1.signSync(hash, privateKey)
  )

  const res2 = await axios.post('http://localhost:8000/api/login', {
    pubkey,
    secp_pubkey: secp256k1.utils.bytesToHex(secpPublicKey),
    device_name,
    signature,
    nonce,
    hash,
  })
  const data2 = await res2.data
  return data2.token
}
