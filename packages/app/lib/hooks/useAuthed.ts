import { useStore } from 'app/stores'
import * as SecureStore from 'expo-secure-store'
import { useEffect } from 'react'

export const useAuthed = () => {
  const privateKey = useStore((s) => s.user.privateKey)
  const publicKey = useStore((s) => s.user.publicKey)

  const checkForKeys = async () => {
    const storeAvailable = await SecureStore.isAvailableAsync()
    if (!storeAvailable) return
    const priv = await SecureStore.getItemAsync('ARC_PRIVATE_KEY')
    const pub = await SecureStore.getItemAsync('ARC_PUBLIC_KEY')
    console.log('Keys from storage:', pub, priv)
    if (!priv || !pub) return
    useStore.setState({ user: { privateKey: priv, publicKey: pub, name: 'Test Ostrich' } })
    console.log('Keys set from storage.')
  }

  useEffect(() => {
    checkForKeys()
  }, [])

  const authed = privateKey.length > 10 && publicKey.length > 10 // TODO: Sophisticate this
  return authed
}
