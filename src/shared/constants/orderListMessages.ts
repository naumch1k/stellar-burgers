export const OrderListMessages = {
  feed: 'Zero orders detected 🤔 Did someone zap all cravings into a black hole?!',
  profile: `You haven't ordered anything yet`,
}

export type OrderListVariant = keyof typeof OrderListMessages
