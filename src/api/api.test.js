import { mockablePhones } from './api';

// Test API.
describe('#loadPhones() using async/await', () => {
  it('should load phones data', async () => {
    const phones = await mockablePhones()
    expect(phones).toBeDefined()
    expect(phones).toHaveLength(16)
  })
})