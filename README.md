# DeFi SaaS Project for Multi-Blockchain DApp

Building a DeFi SaaS Project for Multi-Blockchain

Build your own Decentralized Uniswap pool and liquidity finder web3 tool, in which you can provide users with to to find any network pool address and liquidity details on the blockchain.

## Project Overview

# Uniswap Pool and Liquidity Finder

## Overview
A comprehensive multi-network application designed to find and analyze Uniswap liquidity pools across different blockchain networks. Users can discover pool addresses, analyze liquidity details, and maintain a searchable history of their research across multiple networks.

## Key Features

### Home Page Features
* Pool address-based search functionality
* Detailed liquidity information display
* Comprehensive token data
* Real-time information updates

### Liquidity Search Features
* Advanced pool address discovery system
* Token pair matching
* Custom fee tier selection
* Price ratio specification
* Detailed pool metrics

### Pool History
* Comprehensive search history tracking
* Input parameter storage
* Verification system for past searches
* Persistent data storage

### Liquidity History
* Complete research tracking
* Historical search archive
* Quick pool address lookup
* Liquidity position tracking

### Multi-Network Support
* Ethereum Mainnet
* Polygon Mainnet
* Polygon Mumbai Testnet
* Holesky Testnet
* Sepolia Testnet

## Application Architecture

### Frontend
```
/src
  /components
    - NetworkSelector.js
    - PoolSearch.js
    - LiquidityFinder.js
    - HistoryTracker.js
  /pages
    - Home.js
    - LiquiditySearch.js
    - PoolHistory.js
    - LiquidityHistory.js
```

### Smart Contract Integration
* Web3 providers for multiple networks
* Contract interaction handlers
* Network switching logic
* Transaction management

## Setup Guide

### Installation
```bash
git clone https://github.com/ramik0115/Ethos_TeamH14_LiquidityPool_Round2_Submission.git
cd Ethos_TeamH14_LiquidityPool_Round2_Submission
npm install
npm start
```

### Configuration
1. Set up network providers
2. Configure contract addresses
3. Set up environment variables
4. Initialize network connections

## Usage Instructions

### Finding Pool Information
1. Navigate to the homepage
2. Enter the pool address in the search field
3. View comprehensive liquidity details
4. Access token information

### Discovering Pool Addresses
1. Go to Liquidity Search
2. Input token addresses
3. Select fee tier
4. Specify price ratio (optional)
5. Submit search request

### Accessing History
1. Visit Pool History for search records
2. Check Liquidity History for research data
3. Verify previous findings
4. Track historical inputs

### Network Selection
1. Choose desired network from dropdown
2. Wait for network connection
3. Begin searching on selected network
4. View network-specific data

## Network Details

### Supported Networks
* Ethereum Mainnet
  - Chain ID: 1
  - Native Token: ETH

* Polygon Mainnet
  - Chain ID: 137
  - Native Token: MATIC

* Polygon Mumbai
  - Chain ID: 80001
  - Native Token: MATIC

* Holesky Testnet
  - Chain ID: 17000
  - Native Token: ETH

* Sepolia
  - Chain ID: 11155111
  - Native Token: ETH

## Development Guidelines

### Code Structure
* Modular component design
* Network-agnostic functions
* Reusable utility methods
* Clear state management

## Repository Structure
```
/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── contracts/
├── public/
├── tests/
└── docs/
```


