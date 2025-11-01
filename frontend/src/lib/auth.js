// Simple client-only auth helper with a single demo user (no backend)
export const demoUser = {
  name: 'Ravi Shah',
  email: 'ravi.shah@example.com',
  password: '123456'
}

export function login(email, password) {
  // Synchronous check in a promise to mimic async calls
  return Promise.resolve(
    email === demoUser.email && password === demoUser.password ? { name: demoUser.name, email: demoUser.email } : null
  )
}

export function signup(name, email, password) {
  // Demo app allows only a single hardcoded user — return failure
  return Promise.resolve({ success: false, message: 'This demo only supports the preconfigured user.' })
}
