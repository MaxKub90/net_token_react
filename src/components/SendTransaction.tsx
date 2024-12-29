import React from 'react';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { BaseError } from 'wagmi';
import styles from './SendTransaction.module.css'; // Подключаем стили

export function SendTransaction() {
  const { data: hash, error, isPending, sendTransaction } = useSendTransaction();

  // Задаем постоянный адрес, на который будут отправляться средства
  const to = '0x632D3D09b30468a9a767cd30d587fFFDA0f0EA26'; // Адрес для перевода

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const value = formData.get('value') as string;

    sendTransaction({ to, value: parseEther(value) });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <form onSubmit={submit} className={styles['send-transaction-form']}>
      <input name="value" placeholder="0.05" required />
      <button disabled={isPending} type="submit">
        {isPending ? 'Confirming...' : 'Send'}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && <div>Error: {(error as BaseError).shortMessage || error.message}</div>}
    </form>
  );
}
