// src/Footer.js
import './Information.css';

import React from 'react';
import BurnedTokens from './BurnedTokens';
import HowToBuyPDF from '../utils/how_to_buy.pdf';

function Information() {
  return (
    <>
      <div id='about' className='container information  py-5'>
        <div className='row py-5'>
          <div className='col-md-7'>
            <h2 style={{fontSize: 100}} className='feature pb-4'>
              What are <span>Spkherheads?</span>
            </h2>
            <h3 style={{fontSize: 40}} className='lead'>
              SPKR Heads are Storytellers, musical composers that transform dissonant & consonant harmony into energy that travels only throughout SPKR World. 

              
            </h3>
            {/*<p className='lead'>
              SPKR Heads redefine how to <b>use</b>, <b>create</b> and <b> share</b> sound. 
            </p>

            <p className='lead'>
              SPKR WORLD is constructed of blended sound, stories, energy and history. The only traveling planet in existence, Where Multi- genre musicians, artists and engineers orchestrate and collaborate just to live!
            </p>*/}
          </div>
          <div className='col-md-5 text-right'>
            <div style={{display:'flex'}} className='row'>
              <div  style={{'zIndex': 2, 'max-width': '100%', width: '33%'}}>
                <img className='img-fluid' alt='spkrhead' style={{'max-width': 500, 'z-index': 2}} src='spkrhead.png' />
              </div>
              <div style={{'zIndex': 3, width:'33%', 'max-width': 500}}>
                <img className='img-fluid' alt='spkrhead' style={{'max-width': 500, 'z-index': 3}}  src='spkrhead2.png' />
              </div>
              <div style={{ 'max-width': 500, width: '33%', 'zIndex': 1 }}>
                <img className='img-fluid' alt='spkrhead' style={{'max-width': 500, 'z-index': 1 }} src='spkrhead3.png' />
              </div>
            </div>
          </div>

        </div>
      </div>
      <section id='studio' className='bg-white'>
        <div className='container information  py-5'>
          <div className='row py-5'>
            <div className='col-md-5 text-center'>
              <img className='img-fluid' alt='Burn Token' src='https://images.unsplash.com/photo-1551710029-607e06bd45ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' />
            </div>
            <div className='col-md-7 text-left'>
              <h2 className='feature'>Studio Access</h2>
              <p className="lead"> SPKR Head Studio </p>
              <p className="lead"> 
                The first meta-global collaborative music studio where SPKR Heads share, create, applaud and EARN! A soon to be AR music experience, SPKR Head Studio 2.0 will drop with custom AI tools to improve or blend your sound. SPKR Head access only! 
              </p>
              <p className="lead"> 
                Get EXCLUSIVE access to SPKR Head Studio, SPKR Radio and the “Sound Awards”. The first true collaborative global “sound” community. 
              </p>
              <p className="lead"> Your gonna love Dope sh** like our upcoming Studio  “Weekly shoutouts”. </p>
            </div>
          </div>
        </div>
      </section>
      <section id='roadmap' className='bg-white-darker pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'>Roadmap</h2>
            </div>
          </div>
          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center bottom d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>1</div>
            </div>
            <div className='col-6'>
              <h5>Opensea / Rarity verification  </h5>
              <p className="lead"> 1K SPKR Heads just landed back in SPKR World and Everyone’s waiting to hear their story/sound- Mint your SPKR Head to get early access into SPKR head Studio! </p>
              <p>
                <i className='fa fa-check'></i> 20 October 2021
              </p>
            </div>
          </div>
          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <h5>8888 Newby SPKR Heads landed in sync and on Harmony in SPKR World - The land of Sound!</h5>
              <p>
                In Progress <i className='fa fa-spinner'></i>
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>2</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>3</div>
            </div>
            <div className='col-6'>
              <h5>Top 10 trending sound giveaway 0.08ETH </h5>
              <p>
                <i className='fa fa-check'></i> November, 2021
              </p>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <h5>Launch Studio AR V1: SPKR Head AR Music Studio and performance space.  </h5>
              <p>
                <i className='fa fa-check'></i> December 1, 2021 
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>4</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>5</div>
            </div>
            <div className='col-6'>
              <h5>Monthly Sound Awards 2ETH Best Awarded </h5>
              <p>
                <i className='fa fa-check'></i> December, 2021  
              </p>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <h5>SPKR Headphone Design Art Competition.  </h5>
              <p>
                <i className='fa fa-check'></i> December, 2021 
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>6</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>7</div>
            </div>
            <div className='col-6'>
              <h5>Community designed SPKR Headphone Giveaway. $5k to winner . </h5>
              <p>
                 <i className='fa fa-check'></i> December, 2021
              </p>
            </div>
          </div>

          

          
          


          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>
          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>8</div>
            </div>
            <div className='col-6'>
              <h5>Spkhrhead battle AR </h5>
              <p>
                <i className='fa fa-check'></i> Q2 2022
              </p>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>
        </div>


      </section>
      <div className='container information py-5'>
        <div className='row py-5'>
          <div className='col-md-12 text-center'>
            <h2 className='feature pb-4'>Links</h2>
            <a
              href='https://sporefinance.medium.com/spore-finance-fair-launch-7f048d01e85d'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Medium
            </a>
            <a
              href='https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Token address
            </a>
            <a
              href='https://cchain.explorer.avax.network/tx/0x7df1694004dd6e994d31f76c3978718e017fe6e6112482866051aca7ab90caa6/token-transfers'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              2.5% of supply burnt tx
            </a>
            <a
              href='https://cchain.explorer.avax.network/tx/0xe3e92326e2993a270a2fdd44a7301e6adccb7dd1b40bcc4ed9ed88ec963a22ab/token-transfers'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              LP-burnt tx
            </a>
            <br />
            <a
              href='https://cchain.explorer.avax.network/address/0x88Dd784dFaaB1a7752d2CC81071Fcd12C1c4E1db/'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              DEV wallet address
            </a>
            <a
              href='https://cchain.explorer.avax.network/tx/0x5fa10181e6c9841aa2226b5468e2b92f0268feaf178626472428e9839ab76982/internal-transactions'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Renounced ownership tx
            </a>
            <a
              href='https://discord.gg/hYDnmyadJC'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Discord
            </a>
            <a
              href='https://t.me/joinchat/BN0YR2yy2cU1ZWJk'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Telegram
            </a>
            <br />
            <a
              href='https://www.youtube.com/watch?v=wK4vvE44Pfw'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              How to buy (VIDEO)
            </a>
            <a
              href={HowToBuyPDF}
              download
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              How to buy (PDF)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
