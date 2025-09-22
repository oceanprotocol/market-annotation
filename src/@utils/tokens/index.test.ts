import {
  getWETHAddress,
  getApprovedBaseTokensForNetwork,
  isApprovedBaseToken
} from './index'

describe('Token utilities', () => {
  describe('getWETHAddress', () => {
    it('should return correct WETH address for Ethereum mainnet', () => {
      expect(getWETHAddress(1)).toBe(
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
      )
      expect(getWETHAddress('mainnet')).toBe(
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
      )
    })

    it('should return correct WETH address for Optimism', () => {
      expect(getWETHAddress(10)).toBe(
        '0x4200000000000000000000000000000000000006'
      )
      expect(getWETHAddress('optimism')).toBe(
        '0x4200000000000000000000000000000000000006'
      )
    })

    it('should return correct WETH address for Polygon', () => {
      expect(getWETHAddress(137)).toBe(
        '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'
      )
      expect(getWETHAddress('polygon')).toBe(
        '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'
      )
    })

    it('should return correct WETH address for Sepolia', () => {
      expect(getWETHAddress(11155111)).toBe(
        '0x5f207d42f869fd1c71d7f0f81a2a67fc20ff7323'
      )
      expect(getWETHAddress('sepolia')).toBe(
        '0x5f207d42f869fd1c71d7f0f81a2a67fc20ff7323'
      )
    })

    it('should return undefined for unsupported network', () => {
      expect(getWETHAddress(999)).toBeUndefined()
      expect(getWETHAddress('unsupported')).toBeUndefined()
    })
  })

  describe('getApprovedBaseTokensForNetwork', () => {
    it('should return WETH token for supported networks', () => {
      const tokens = getApprovedBaseTokensForNetwork(1)
      expect(tokens).toHaveLength(1)
      expect(tokens[0]).toEqual({
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        name: 'Wrapped Ether',
        symbol: 'WETH',
        decimals: 18
      })
    })

    it('should include Ocean token when provided and different from WETH', () => {
      const oceanAddress = '0x1234567890123456789012345678901234567890'
      const tokens = getApprovedBaseTokensForNetwork(1, oceanAddress)
      expect(tokens).toHaveLength(2)
      expect(tokens[0].symbol).toBe('WETH')
      expect(tokens[1].address).toBe(oceanAddress)
    })

    it('should not duplicate Ocean token when same as WETH', () => {
      const wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
      const tokens = getApprovedBaseTokensForNetwork(1, wethAddress)
      expect(tokens).toHaveLength(1)
      expect(tokens[0].symbol).toBe('WETH')
    })

    it('should include custom tokens when provided', () => {
      const customTokens = {
        '1': [
          {
            address: '0x1234567890123456789012345678901234567890',
            name: 'Custom Token',
            symbol: 'CT',
            decimals: 18
          }
        ]
      }
      const tokens = getApprovedBaseTokensForNetwork(1, undefined, customTokens)
      expect(tokens).toHaveLength(2)
      expect(tokens[1].symbol).toBe('CT')
    })

    it('should return empty array when WETH disabled and no other tokens', () => {
      const tokens = getApprovedBaseTokensForNetwork(
        1,
        undefined,
        undefined,
        false
      )
      expect(tokens).toHaveLength(0)
    })
  })

  describe('isApprovedBaseToken', () => {
    it('should return true for WETH address', () => {
      const wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
      expect(isApprovedBaseToken(wethAddress, 1)).toBe(true)
    })

    it('should return true for Ocean token when provided', () => {
      const oceanAddress = '0x1234567890123456789012345678901234567890'
      expect(isApprovedBaseToken(oceanAddress, 1, oceanAddress)).toBe(true)
    })

    it('should return false for unknown token', () => {
      const unknownAddress = '0x9999999999999999999999999999999999999999'
      expect(isApprovedBaseToken(unknownAddress, 1)).toBe(false)
    })

    it('should be case insensitive', () => {
      const wethAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' // lowercase
      expect(isApprovedBaseToken(wethAddress, 1)).toBe(true)
    })
  })
})
