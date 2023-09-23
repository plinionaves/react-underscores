import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
};

interface Props {
  letter: string;
  onSelectLetter: (letter: string) => void;
}

export const Letter: React.FC<Props> = (props) => {
  return (
    <button
      style={styles.container}
      onClick={() => props.onSelectLetter(props.letter)}
    >
      {props.letter}
    </button>
  );
};
