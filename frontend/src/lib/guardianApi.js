// Hardcoded helpers for Financial Guardian features
// These return deterministic data on the client without any backend or randomness.
export function scanForScams() {
  const transactions = [
    { id: 1, label: 'Grocery • 10/1', amount: 842, risk: 'green' },
    { id: 2, label: 'Utilities • 10/2', amount: 1299, risk: 'green' },
    { id: 3, label: 'Mobile Recharge • 10/3', amount: 199, risk: 'yellow' },
    { id: 4, label: 'Unknown Merchant • 10/4', amount: 4999, risk: 'red' },
    { id: 5, label: 'Subscription • 10/5', amount: 299, risk: 'green' },
    { id: 6, label: 'Wallet Top-up • 10/6', amount: 1200, risk: 'green' },
  ]

  const found = transactions.some((t) => t.risk === 'red')
  return Promise.resolve({ found, transactions })
}

export function getAiTips() {
  // Deterministic tip and delta for demo; replace with different text if needed
  return Promise.resolve({ tip: 'Try setting aside ₹200 every other day into savings.', delta: '-2.3' })
}

export function detectEmotion() {
  // Return a fixed demo emotion (no real audio processing or randomness)
  return Promise.resolve('Calm')
}
