import React, { useState, useEffect, useMemo } from 'react';
import { Letter } from './Letter';

const styles = {
  alphabet: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  } as React.CSSProperties,
  display: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
  } as React.CSSProperties,
};

export const Alphabet: React.FC = () => {
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  function onSelectLetter(letter: string) {
    setSelectedLetters([...selectedLetters, letter]);
  }

  useEffect(() => {
    console.log(selectedLetters);
  }, [selectedLetters]);

  const displayValue = useMemo(() => {
    let output = '';

    for (let i = 0; i < selectedLetters.length; i++) {
      const current = selectedLetters[i];

      if (
        current === selectedLetters[i + 1] &&
        current === selectedLetters[i + 2]
      ) {
        output += '_';
        i += 2;
      } else {
        output += current;
      }
    }

    return output;
  }, [selectedLetters]);

  return (
    <div>
      <div style={styles.alphabet}>
        {Array.from(Array(26).keys()).map((i) => (
          <Letter
            key={i}
            letter={String.fromCharCode(i + 65)}
            onSelectLetter={onSelectLetter}
          />
        ))}
      </div>

      <div style={styles.display}>{displayValue}</div>
    </div>
  );
};
