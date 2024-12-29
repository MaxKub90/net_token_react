// Импорты библиотек и конфигураций
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { projectId, metadata, networks, wagmiAdapter } from '../config/Index'; // Убедитесь, что путь верный
import { SendTransaction } from './SendTransaction'; // Импорт компонента
import { ActionButtonList } from './ActionButtonList'; // Импорт компонента
import styles from './FirsrSection.module.css'

// Создание клиента для React Query
const queryClient = new QueryClient();

// Общая конфигурация для AppKit
const generalConfig = {
  projectId,
  metadata,
  networks,
};

// Инициализация AppKit
createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
});

// Определение компонента FirstSection
export function FirstSection() {
  return (
    <div id="walletSection" className={styles.section1}> {/* Используем стили из CSS модуля */}
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {/* Основное содержимое секции */}
          <div className={styles.mainContainer}> 
            <div className={styles.tableContainer}> {/* Используем стили из CSS модуля */}
              {/* Заголовок */}
              <h2 className={styles.saleTitle}>NET SALE STARTS IN TIME</h2>

              {/* Таймер */}
              <div className={styles.countdown}> {/* Используем стили из CSS модуля */}
                <div>
                  <span>24</span>
                  <p>DAYS</p>
                </div>
                <div>
                  <span>18</span>
                  <p>HRS</p>
                </div>
                <div>
                  <span>07</span>
                  <p>MINS</p>
                </div>
                <div>
                  <span>26</span>
                  <p>SECS</p>
                </div>
              </div>

              {/* Прогресс-бар */}
              <div className={styles.progressSection}> {/* Используем стили из CSS модуля */}
                <p className={styles.ethRaised}>ETH RAISED: 0.03 ETH</p>
                <div className={styles.progressBar}> {/* Используем стили из CSS модуля */}
                  <div className={styles.progressFill} style={{ width: '10%' }}></div>
                </div>
              </div>

              {/* Динамическая цена */}
              <p className={styles.dynamicPrice}>1 $NET = Dynamic Price</p>

              {/* Статистика */}
              <div className={styles.stats}> {/* Используем стили из CSS модуля */}
                <p>Your purchased ETH: 0</p>
                <p>Your stakeable NET: 0</p>
              </div>

              {/* Кнопки действий */}
              <div className={styles.buttonSection}> {/* Используем стили из CSS модуля */}
                <ActionButtonList />
                <SendTransaction />
              </div>
            </div>
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

// Экспорт компонента для использования в других частях приложения
export default FirstSection;
