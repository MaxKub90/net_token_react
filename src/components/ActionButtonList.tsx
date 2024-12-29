import { useDisconnect, useAppKit, useAppKitAccount } from '@reown/appkit/react';
import styles from './ActionButtonList.module.css';

export const ActionButtonList = () => {
    const { disconnect } = useDisconnect();
    const { open } = useAppKit();
    const { address } = useAppKitAccount();

    return (
        <div className={styles.actionButtonList}>
            <button className={styles.connectButton} onClick={() => open()}>
                Connect
            </button>
            <button className={styles.disconnectButton} onClick={() => disconnect()}>
                Disconnect
            </button>
            <p className={styles.addressDisplay}>Connected to: {address}</p>
        </div>
    );
};
