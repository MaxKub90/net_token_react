import styles from './FourthComponent.module.css';

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



const FourthComponent = () => {
  return (
    <>
      {/* Первый блок с пауком */}
      <div id="howtobuysec" className={styles['main-col']}>
        <div className={styles['howtobuy-header']}>
          <h1 className={styles['yellow']}>HOW TO BUY</h1>
          <h1 className={styles['black']}>HOW TO BUY</h1>
        </div>

        <div className={styles['image7']}></div>


        <div className={styles['faq-section']}>
          <div className={styles['number']}>1</div>
          <div className={styles['text-container']}>
            <div className={styles['title']}>Connect Wallet</div>
            <div className={styles['subtitle']}>
              To purchase NET token you need to connect your wallet,<br />
              which involves approving the contract on your wallet.
            </div>
          </div>
        </div>

        {/* Перенесенный паук */}
        <div className={styles['container']}>
          <div className={styles['spider-wrap']}>
            <div className={styles['arachnid']}>
              <div className={styles['cobweb2']}></div>
              <div className={styles['core']}>
                <div className={styles['gaze-left']}></div>
                <div className={styles['gaze-right']}></div>
              </div>
              <div className={styles['appendages-left']}>
                <div className={styles['limb1l']}></div>
                <div className={styles['limb2l']}></div>
                <div className={styles['limb3l']}></div>
              </div>
              <div className={styles['appendages-right']}>
                <div className={styles['limb1r']}></div>
                <div className={styles['limb2r']}></div>
                <div className={styles['limb3r']}></div>
              </div>
            </div>
          </div>
        </div>
    </div>

      {/* Второй блок */}
      <div className={styles['main-col2']}>
        <div className={styles['faq-section2']}>
          <div className={styles['number']}>2</div>
          <div className={styles['text-container']}>
            <div className={styles['title']}>Participate In Presale</div>
            <div className={styles['subtitle']}>
              Visit our presale platform and follow the instructions to purchase,<br />
              NET tokens using your preferred cryptocurrency.
            </div>
          </div>
        </div>
      </div>

      {/* Третий блок */}
      <div className={styles['main-col3']}>
        <div className={styles['faq-section3']}>
          <div className={styles['number']}>3</div>
          <div className={styles['text-container']}>
            <div className={styles['title']}>Check Your Wallet</div>
            <div className={styles['subtitle']}>
              Make sure your wallet is properly connected and<br />
              ready for transactions.
            </div>
          </div>
        </div>
        <div className={styles['container2']}>
          <div className={styles['spider-wrap2']}>
            <div className={styles['cobweb']}></div>
            <div className={styles['spider']}>
              <div className={styles['body']}>
                <div className={styles['head']}>
                  <div className={styles['eyes']}>
                    <div className={styles['eye-left']}></div>
                    <div className={styles['eye-right']}></div>
                  </div>
                </div>
                <div className={styles['legs-left']}>
                  <div className={styles['arm-1']}></div>
                  <div className={styles['arm-2']}></div>
                  <div className={styles['arm-3']}></div>
                  <div className={styles['arm-4']}></div>
                </div>
                <div className={styles['legs-right']}>
                  <div className={styles['arm-5']}></div>
                  <div className={styles['arm-6']}></div>
                  <div className={styles['arm-7']}></div>
                  <div className={styles['arm-8']}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Четвертый блок */}
      <div className={styles['main-col4']}>
        <div className={styles['faq-section4']}>
          <div className={styles['number']}>4</div>
          <div className={styles['text-container']}>
            <div className={styles['title']}>Buy NET</div>
            <div className={styles['subtitle']}>
              Buy tokens right now.
              <button className={styles['buy-button']} onClick={() => scrollToSection('walletSection')}>BUY NET</button>


            </div>
          </div>
        </div>

        <div className={styles['box-canvas']}>
          <div className={styles['inner']}>
            <div className={styles['circle']}></div>
            <div className={styles['circle']}></div>
            <div className={styles['circle']}></div>
            <div className={styles['circle']}></div>
            <div className={styles['circle']}></div>
            <div className={styles['circle']}></div>
          </div>
          <div className={styles['line']}></div>
          <div className={styles['line']}></div>
          <div className={styles['line']}></div>
          <div className={styles['spider3']}>
            <div className={styles['body3']}>
              <div className={styles['leg-left']}></div>
              <div className={styles['leg-right']}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthComponent;
