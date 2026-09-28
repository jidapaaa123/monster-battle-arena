type HealButtonProps = {
    onHeal: () => void,
    text: string
};

function HealButton({ onHeal, text }: HealButtonProps) {
    return (
        <button className="heal-button" onClick={onHeal}>
            {text}
        </button>
    );
}

export default HealButton;
