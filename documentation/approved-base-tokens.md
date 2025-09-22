# Approved Base Tokens Configuration

This document explains how the approved base tokens system works in the marketplace and how to configure it for different networks.

## Overview

The marketplace now automatically manages approved base tokens based on the current network. This ensures that users can only select valid tokens for pricing their assets on each supported blockchain.

## Configuration

### App Config

The approved base tokens can be configured in `app.config.cjs`:

```javascript
module.exports = {
  approvedBaseTokens: {
    autoAddWETH: true,
    customTokens: {
      1: [
        {
          address: '0x...',
          name: 'Custom Token',
          symbol: 'CT',
          decimals: 18
        }
      ],
      137: [
        {
          address: '0x...',
          name: 'Custom Token',
          symbol: 'CT',
          decimals: 18
        }
      ]
    }
  }
}
```

### Environment Variables

You can also configure the Ocean token address and symbol via environment variables:

```bash
NEXT_PUBLIC_OCEAN_TOKEN_ADDRESS=0x...
NEXT_PUBLIC_OCEAN_TOKEN_SYMBOL=OCEAN
```

## Adding New Networks

To add support for a new network:

1. Add the WETH address to `WETH_ADDRESSES_BY_NETWORK` in `src/@utils/tokens/index.ts`
2. Add the chain ID to `chainIdsSupported` in `app.config.cjs`
3. Test the implementation with the new network
