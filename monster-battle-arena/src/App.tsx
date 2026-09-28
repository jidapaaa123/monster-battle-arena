import { useState } from "react";
import "./App.css";
import Monster from "./components/Monster";
import ActionButton from "./components/AttackButton";
import BattleStatus from "./components/BattleStatus";

function App() {
  const [monsterName, monsterType, monsterDamage]: [string, string, number] = [
    "Cave Troll",
    "Beast",
    15,
  ];
  const [monsterHealth, setMonsterHealth] = useState<number>(100);
  const monsterStatus: string =
    monsterHealth == 0
      ? "The monster has been defeated!"
      : "The monster is still fighting!";

  const [playerName, setPlayerName] = useState<string>("Marvelous Warrior");
  const [normalDamage, heavyDamage, ultimateDamage]: [number, number, number] =
    [10, 20, 30];
  const [playerHealth, setPlayerHealth] = useState<number>(100);
  const playerStatus: string =
    playerHealth == 0
      ? "You have been defeated!"
      : "You are still fighting!";

  const handleAttackMonster = (dmg: number) => {
    setMonsterHealth((prev) => Math.max(prev - dmg, 0));
  };
  const handleAttackPlayer = (dmg: number) => {
    setPlayerHealth((prev) => Math.max(prev - dmg, 0));
  };
  const handleHealPlayer = (heal: number) => {
    setPlayerHealth((prev) => Math.min(prev + heal, 100));
  };


  return (
    <>
      <div className="battle-arena">
        <header>
          <h1>MONSTER BATTLE ARENA</h1>
          <div className="input-form">
            <label htmlFor="playerName">Player Name: </label>
            <input
              id="playerName"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
        </header>

        <h2 className="matchup">
          {playerName} vs. {monsterName}
        </h2>

        <section className="combatants">
          <div className="combatant player-card">
            <h3>PLAYER</h3>
            <p>Health: {playerHealth}</p>
            <p className="status-text">{playerStatus}</p>
          </div>

          <div className="combatant monster-card">
            <h3>MONSTER</h3>
            <Monster
              name={monsterName}
              type={monsterType}
              current_health={monsterHealth}
              attack_damage={monsterDamage}
            />
            <p className="status-text">{monsterStatus}</p>
          </div>
        </section>

        <section className="actions">
          <div className="attack-actions">
            <ActionButton
              onAction={() => handleAttackMonster(normalDamage)}
              text="Normal Attack!"
              variant="attack"
            />
            <ActionButton
              onAction={() => handleAttackMonster(heavyDamage)}
              text="Heavy Attack!"
              variant="attack"
            />
            <ActionButton
              onAction={() => handleAttackMonster(ultimateDamage)}
              text="Ultimate Attack!"
              variant="attack"
            />
          </div>

          <div className="defense-actions">
            <ActionButton
              onAction={() => handleAttackPlayer(monsterDamage)}
              text="Monster Attacks"
              variant="attack"
            />
            <ActionButton
              onAction={() => handleHealPlayer(20)}
              text="Drink Potion"
              variant="heal"
            />
          </div>
        </section>

        <BattleStatus
          playerName={playerName}
          playerHealth={playerHealth}
          monsterName={monsterName}
          monsterHealth={monsterHealth}
        />
      </div>
    </>
  );
}

export default App;
