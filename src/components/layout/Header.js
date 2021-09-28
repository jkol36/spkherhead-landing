// src/Header.js
import './Header.css';

import React from 'react';
import { Link } from 'react-scroll';
import Web3 from 'web3';
import { Link as ReactRouterLink } from 'react-router-dom';

function connectMetaMask() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

async function claimAirdrop(e) {
  e.preventDefault();
  connectMetaMask();
  var ABI = [
    {
      type: 'constructor',
      stateMutability: 'nonpayable',
      inputs: [
        { type: 'address', name: 'contrak', internalType: 'contract IERC20' }
      ]
    },
    {
      type: 'event',
      name: 'Deposit',
      inputs: [
        {
          type: 'address',
          name: 'user',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'uint256',
          name: 'pid',
          internalType: 'uint256',
          indexed: false
        },
        {
          type: 'uint256',
          name: 'amount',
          internalType: 'uint256',
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        {
          type: 'address',
          name: 'previousOwner',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'address',
          name: 'newOwner',
          internalType: 'address',
          indexed: true
        }
      ],
      anonymous: false
    },
    {
      type: 'event',
      name: 'Withdraw',
      inputs: [
        {
          type: 'address',
          name: 'user',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'uint256',
          name: 'pid',
          internalType: 'uint256',
          indexed: false
        },
        {
          type: 'uint256',
          name: 'amount',
          internalType: 'uint256',
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
      name: 'balance',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'contract IERC20' }],
      name: 'contractaddress',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'deposit',
      inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }]
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'get',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'address' }],
      name: 'owner',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'renounceOwnership',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'transferOwnership',
      inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }]
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'update',
      inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }]
    }
  ];
  const fairyContract = new window.web3.eth.Contract(
    ABI,
    '0xeAdf7D005596dbad55e067C1208080f83258D452'
  );
  var account = await window.web3.eth.getAccounts();
  account = account[0];
  console.log(account);
  try {
    await fairyContract.methods
      .get()
      .send({ from: account, gasPrice: 470000000000, gas: 200000 });
  } catch (error) {
    alert(error);
  }
}

function Header() {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg py-3'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand font-weight-bold'>
            Spkherheads
          </a>
          <button
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className='navbar-toggler navbar-toggler-right'
          >
            <i className='fa fa-bars'></i>
          </button>

          <div id='navbarSupportedContent' className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
               <Link activeClass="active" to="home" spy={true} smooth={true}>
                <li className='nav-item'>
                  <span className='nav-link font-weight-bold'>Home</span>
                </li>
              </Link>
              <li className='nav-item'>
                <Link className='nav-link font-weight-bold' activeClass="active" to="about" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link font-weight-bold' activeClass="active" to="roadmap" spy={true} smooth={true}>
                  
                  Roadmap
                </Link>
              </li>
              <ReactRouterLink to='/studio' style={{ textDecoration: 'none' }}>
                <li className='nav-item'>
                  <span className='nav-link font-weight-bold'>Studio</span>
                </li>
              </ReactRouterLink>
              <a href='https://discord.com/invite/nZ33SCvF' style={{ textDecoration: 'none' }}>
                <li className='nav-item'>
                  <span className='nav-link font-weight-bold'>Discorde</span>
                </li>
              </a>
              <ReactRouterLink to='/bsc-bridge' style={{ textDecoration: 'none' }}>
                <li className='nav-item'>
                  <span className='nav-link font-weight-bold'>Mint</span>
                </li>
              </ReactRouterLink>
              <ReactRouterLink to='/bsc-bridge' style={{ textDecoration: 'none' }}>
                <li className='nav-item'>
                  <span className='nav-link font-weight-bold'>FAQ</span>
                </li>
              </ReactRouterLink>

              <li className='nav-item'>
                <button
                  className='btn btn-outline-light'
                  onClick={claimAirdrop}
                >
                  Claim SPKERHEAD
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
