# 🧩 Eisen Asset Repository

This repository contains image assets for **Eisen Finance**, primarily for:

- Token icons used in the DEX aggregator swap interface
- Chain-specific and UI assets for other parts of the Eisen web pages

---

## 1. Directory Structure
<pre> 
<h1 > !! Needs revision</h1>
<a href="./assets/eisen/">assets</a>/
├── <a href="./assets/eisen/">eisen</a>/
│   ├── <a href="./assets/eisen/banner/">banner</a>
│   └── <a href="./assets/eisen/symbol/">symbol</a>
├── <a href="./assets/icons/">icons</a>/
│   ├── <a href="./assets/icons/bridges/">bridges</a>/
│   ├── <a href="./assets/icons/chains/">chains</a>/
│   │   ├── <a href="./assets/icons/chains/abstract/">abstract</a>/
│   │   ├── <a href="./assets/icons/chains/arbitrum/">arbitrum</a>/
│   │   ├── <a href="./assets/icons/chains/base/">base</a>/
│   │   ├── <a href="./assets/icons/chains/base/">base</a>/
│   │   ├── <a href="./assets/icons/chains/abstract/">abstract</a>/
│   │   ├── <a href="./assets/icons/chains/arbitrum/">arbitrum</a>/
│   │   ├── <a href="./assets/icons/chains/base/">base</a>/
│   │   ├── <a href="./assets/icons/chains/base/">base</a>/
│   │   ├── <a href="./assets/icons/chains/abstract/">abstract</a>/
│   │   ├── <a href="./assets/icons/chains/arbitrum/">arbitrum</a>/
│   │   ├── <a href="./assets/icons/chains/base/">base</a>/
│   │   ├── <a href="./assets/icons/chains/base/">base</a>/
│   │   ├── <a href="./assets/icons/chains/abstract/">abstract</a>/
│   │   ├── <a href="./assets/icons/chains/arbitrum/">arbitrum</a>/
│   │   ├── <a href="./assets/icons/chains/base/">base</a>/
│   │   ├── <a href="./assets/icons/chains/base/">base</a>/
│   │   ├── ...
│   │   └── <a href="./assets/icons/chains/zircuit/">zircuit</a>/
│   ├── <a href="./assets/icons/functional/">functional</a>/
│   ├── <a href="./assets/icons/protocols/">protocols</a>/
│   └── <a href="./assets/icons/tokens/">tokens</a>/
└── <a href="./assets/wordmarks/">wordmarks</a>/
</pre>

## 2. Rules

1. **File naming**:  
   Save icons as the **lowercase token symbol**, with a `.png` extension  
   Example: `eth.png`, `usdc.e.png`

2. **Chain-specific tokens**:  
   If a token exists on multiple chains, place it in each respective `chains/{chain}` folder.

---

## 3. Common Token Assets

<table>
  <tr>
    <th><a href="./icons/chains/base/eth.png">ETH</a></th>
    <th><a href="./icons/chains/arbitrum/weth.png">WETH</a></th>
    <th><a href="./icons/chains/linea/wbtc.png">WBTC</a></th>
    <th><a href="./icons/chains/blast/btc.png">BTC</a></th>
    <th><a href="./icons/chains/scroll/usdt.png">USDT</a></th>
    <th><a href="./icons/chains/scroll/usdc.png">USDC</a></th>
  </tr>
  <tr>
    <td><img src="./icons/chains/base/eth.png" width="32"/></td>
    <td><img src="./icons/chains/arbitrum/weth.png" width="32"/></td>
    <td><img src="./icons/chains/linea/wbtc.png" width="32"/></td>
    <td><img src="./icons/chains/blast/btc.png" width="32"/></td>
    <td><img src="./icons/chains/scroll/usdt.png" width="32"/></td>
    <td><img src="./icons/chains/scroll/usdc.png" width="32"/></td>
  </tr>
</table>


---

## 4. Staking & Restaking Assets

<table>
  <tr>
    <th><a href="./icons/chains/scroll/usdc.e.png">USDC.E</a></th>
    <th><a href="./icons/chains/scroll/dai.png">DAI</a></th>
    <th><a href="./icons/chains/blast/usde.png">USDE</a></th>
  </tr>
  <tr>
    <td><img src="./icons/chains/scroll/usdc.e.png" width="32"/></td>
    <td><img src="./icons/chains/scroll/dai.png" width="32"/></td>
    <td><img src="./icons/chains/blast/usde.png" width="32"/></td>
  </tr>
</table>
---

## 5. Contribution Guide

- Make sure to follow the naming conventions.
- If you're adding new chains, follow the `chains/{chainName}/token.png` structure.
- Keep icon size consistent (usually 48x48 or 60x60px, square ratio).
- Commit message format:  