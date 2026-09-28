type ActionButtonProps = {
  onAction: () => void,
  text: string,
  variant: "attack" | "heal"
};

function ActionButton({ onAction, text, variant }: ActionButtonProps) {
  return (
    <button className={`${variant}-button`} onClick={onAction}>
      {text}
    </button>
  );
}

export default ActionButton;
