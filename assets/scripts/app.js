const attackValue = 8;
const monsterAttack = 14;
const increaseHealth = 15;
const strongAttack = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
	let maxDamage;
	if (mode === "attack") {
		maxDamage = attackValue;
	} else if (mode === "StrongAttack") {
		maxDamage = strongAttack;
	}
	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;
	const playerDamage = dealPlayerDamage(monsterAttack);
	currentPlayerHealth -= playerDamage;
	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert("You Won!");
	} else if (currentPlayerHealth <= 0 && currenMonsterHealth > 0) {
		alert("You Lost!");
	} else if (currentPlayerHealth <= 0 && currenMonsterHealth <= 0) {
		alert("You have a draw!");
	}
}

function onAttack() {
	attackMonster("attack");
}
function onStrongAttack() {
	attackMonster("StrongAttack");
}

function onHeal() {
	const healValue = increasePlayerHealth(increaseHealth);
	currentPlayerHealth += healValue;
	const playerDamage = dealPlayerDamage(monsterAttack);
	currentPlayerHealth -= playerDamage;
}

attackBtn.addEventListener("click", onAttack);
strongAttackBtn.addEventListener("click", onStrongAttack);
healBtn.addEventListener("click", onHeal);
