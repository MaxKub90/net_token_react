import styles from './ThirdComponent.module.css';

const Tokenomics = () => {
  return (
    <div>
      <div className={styles['svg-container']}>
        <svg
          width="1680"
          height="135"
          viewBox="0 0 1680 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.5"
            y="1.5"
            width="1677"
            height="132"
            rx="13.5"
            fill="white"
            stroke="black"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div id="tokenomics" className={styles.titles}>
          <div className={styles['title-large']}>TOKENOMICS</div>
          <div className={styles['title-small']}>TOKENOMICS</div>
        </div>
      </div>

      <div className={styles['rectangles-container']}>
        <div className={styles.rectangle}>
          <span className={styles.text}>Total supply is 40 billion tokens</span>
        </div>
        <div className={styles.rectangle}>
          <span className={styles.text}>Listing Price is ...</span>
        </div>
      </div>

      <div className={styles.megawrap}>
        <div className={styles.superwrap}>
          <div className={styles['wrap-main']}>
            <div className={styles['wrap-row']}>
              <div className={styles['staking-title']}>Presale</div>
              <div className={styles['staking-line']}></div>
              <div className={styles.amount}>4737,3093,9929 $NET</div>
            </div>
            <div className={styles.percentage}>20%</div>
          </div>
          <div className={styles['staking-subtext']}>
            20% is for the early spiders, which joined our nets
          </div>

          <div className={styles['wrap-main']}>
            <div className={styles['wrap-row']}>
              <div className={styles['staking-title']}>Staking</div>
              <div className={styles['staking-line']}></div>
              <div className={styles.amount}>4737,3093,9929 $NET</div>
            </div>
            <div className={styles.percentage}>30%</div>
          </div>
          <div className={styles['staking-subtext']}>
            To give more tokens to glad investors and expand horizons of net
          </div>

          <div className={styles['wrap-main']}>
            <div className={styles['wrap-row']}>
              <div className={styles['staking-title']}>Liquidity</div>
              <div className={styles['staking-line']}></div>
              <div className={styles.amount}>4737,3093,9929 $NET</div>
            </div>
            <div className={styles.percentage}>10%</div>
          </div>
          <div className={styles['staking-subtext']}>Liquidity pools for decentralized exchanges</div>

          <div className={styles['wrap-main']}>
            <div className={styles['wrap-row']}>
              <div className={styles['staking-title']}>Community Rewards</div>
              <div className={styles['staking-line']}></div>
              <div className={styles.amount}>4737,3093,9929 $NET</div>
            </div>
            <div className={styles.percentage}>5%</div>
          </div>
          <div className={styles['staking-subtext']}>For our lovely spiders</div>

          <div className={styles['wrap-main']}>
            <div className={styles['wrap-row']}>
              <div className={styles['staking-title']}>Marketing</div>
              <div className={styles['staking-line']}></div>
              <div className={styles.amount}>4737,3093,9929 $NET</div>
            </div>
            <div className={styles.percentage}>15%</div>
          </div>
          <div className={styles['staking-subtext']}>
            A large advertising budget is aimed at getting everyone who is interested in <br /> 
            meme tokens entangled in our web
          </div>

          <div className={styles['wrap-main']}>
            <div className={styles['wrap-row']}>
              <div className={styles['staking-title']}>Project Finance</div>
              <div className={styles['staking-line']}></div>
              <div className={styles.amount}>4737,3093,9929 $NET</div>
            </div>
            <div className={styles.percentage}>10%</div>
          </div>
          <div className={styles['staking-subtext']}>To create a global network out of nothing, covering everything in 
          the area, we need large resources and at least a lot of paws. 
          </div>

          <div className={styles['wrap-main']}>
            <div className={styles['wrap-row']}>
              <div className={styles['staking-title']}>Growing our net</div>
              <div className={styles['staking-line']}></div>
              <div className={styles.amount}>4737,3093,9929 $NET</div>
            </div>
            <div className={styles.percentage}>10%</div>
          </div>
          <div className={styles['staking-subtext']}>
           We didn't just try so hard to spread our nets so that we could 
forget about them after a couple of weeks. In order to develop 
the project further, we spend 10%'
          </div>
        </div>
         <div className={styles['right-section']}>
           
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
