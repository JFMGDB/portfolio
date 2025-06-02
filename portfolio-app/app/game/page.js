"use client";

import { useState, useEffect, useCallback } from 'react';
import styles from './Game.module.css';
import AttemptsList from '@/components/Game/AttemptsList';

const CODE_LENGTH = 4;
const MAX_ATTEMPTS = 10;

const generateSecretCode = () => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let code = '';
  const tempDigits = [...digits];
  for (let i = 0; i < CODE_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * tempDigits.length);
    code += tempDigits.splice(randomIndex, 1)[0];
  }
  return code;
};

export default function GamePage() {
  const [secretCode, setSecretCode] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(MAX_ATTEMPTS);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [gameMessage, setGameMessage] = useState(`Adivinhe o código secreto de ${CODE_LENGTH} dígitos!`);

  const startGame = useCallback(() => {
    const newCode = generateSecretCode();
    setSecretCode(newCode);
    setCurrentGuess('');
    setAttempts([]);
    setRemainingAttempts(MAX_ATTEMPTS);
    setIsGameOver(false);
    setIsGameWon(false);
    setGameMessage(`Novo jogo iniciado! Adivinhe o código de ${CODE_LENGTH} dígitos. ${MAX_ATTEMPTS} tentativas restantes.`);
    // console.log("Novo Código Secreto (para teste):", newCode);
  }, []);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const handleInputChange = (e) => {
    if (e.target.value.length <= CODE_LENGTH && /^\d*$/.test(e.target.value)) {
      setCurrentGuess(e.target.value);
    }
  };

  const handleSubmitGuess = () => {
    if (currentGuess.length !== CODE_LENGTH) {
      setGameMessage(`Seu palpite deve ter ${CODE_LENGTH} dígitos.`);
      return;
    }
    if (new Set(currentGuess).size !== CODE_LENGTH) {
        setGameMessage(`Os dígitos no seu palpite devem ser únicos.`);
        return;
    }

    let bulls = 0; 
    let cows = 0;  

    for (let i = 0; i < CODE_LENGTH; i++) {
      if (currentGuess[i] === secretCode[i]) {
        bulls++;
      } else if (secretCode.includes(currentGuess[i])) {
        cows++;
      }
    }

    const newAttempts = [{ guess: currentGuess, bulls, cows }, ...attempts];
    setAttempts(newAttempts);
    const newRemainingAttempts = remainingAttempts - 1;
    setRemainingAttempts(newRemainingAttempts);

    if (bulls === CODE_LENGTH) {
      setIsGameWon(true);
      setIsGameOver(true);
      setGameMessage(`Parabéns! Você adivinhou o código: ${secretCode}`);
    } else if (newRemainingAttempts === 0) {
      setIsGameOver(true);
      setGameMessage(`Fim de Jogo! O código secreto era ${secretCode}. Mais sorte na próxima!`);
    } else {
      setGameMessage(`${bulls} Touros (corretos no lugar certo), ${cows} Vacas (corretas no lugar errado). ${newRemainingAttempts} tentativas restantes.`);
    }
    setCurrentGuess('');
  };

  const handleRevealAnswer = () => {
    alert(`O código secreto é: ${secretCode}`);
  };

  return (
    <div className={styles.gameContainer}>
      <h1 className={styles.pageTitle}>Jogo da Senha (Touros e Vacas)</h1>
      <p className={styles.gameMessage}>{gameMessage}</p>

      {!isGameOver && (
        <div className={styles.inputArea}>
          <input
            type="text"
            value={currentGuess}
            onChange={handleInputChange}
            maxLength={CODE_LENGTH}
            placeholder={`Digite ${CODE_LENGTH} dígitos únicos`}
            disabled={isGameOver}
          />
          <button onClick={handleSubmitGuess} disabled={isGameOver || currentGuess.length !== CODE_LENGTH}>
            Enviar Palpite
          </button>
        </div>
      )}

      <div className={styles.controlsArea}>
        <button onClick={startGame} className={styles.newGameButton}>Novo Jogo</button>
        {!isGameOver && (
          <button onClick={handleRevealAnswer} className={styles.revealButton} disabled={isGameOver}>
            Revelar Senha
          </button>
        )}
      </div>

      <AttemptsList attempts={attempts} />
    </div>
  );
}