type AttackButtonProps = {
  onAttack: () => void,
  attackName: string;
};

function AttackButton({ onAttack, attackName }: AttackButtonProps) {
  return (
    <div>
      <button className="attack-button" onClick={onAttack}>
        {attackName} Attack!
      </button>
    </div>
  );
}

export default AttackButton;
