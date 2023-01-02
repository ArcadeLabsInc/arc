import { useMessages } from 'lib/hooks/useMessages'
import * as React from 'react'
import { FlatList, View } from 'react-native'
import { Message } from './Message'

type Props = {}

export const MessageList: React.FC<Props> = () => {
  const messages = useMessages()
  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => <Message message={item} />}
      keyExtractor={(item) => item.id}
      style={{ paddingHorizontal: 10 }}
      ListFooterComponent={<View style={{ margin: 5 }} />}
    />
  )
}
