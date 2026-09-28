type BattleStatusProps = {
  playerName: string;
  playerHealth: number;
  monsterName: string;
  monsterHealth: number;        
};

function BattleStatus({ playerName, playerHealth, monsterName, monsterHealth }: BattleStatusProps) {
  return (
    <div>
      <p>Battle Status</p>
      <p>{playerName}: {playerHealth} HP</p>
      <p>{monsterName}: {monsterHealth} HP</p>
    </div>
  );
}

export default BattleStatus;