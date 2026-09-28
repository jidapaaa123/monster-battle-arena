type AttackButtonProps = {
  onAttack: () => void,
  text: string
};

function AttackButton({ onAttack, text }: AttackButtonProps) {
  return (
    <button className="attack-button" onClick={onAttack}>
      {text}
    </button>
  );
}

export default AttackButton;
