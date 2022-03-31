const nameInput = document.getElementById('name-input');
const submitName = document.getElementById('confirm-member');
const submitTeam = document.getElementById('confirm-team');
const teamChosen = document.getElementById('team-chosen');
const numberPeople = document.getElementById('number-people');
const modal = document.getElementById('exampleModal');

const teamList = [];

submitName.addEventListener('click', function () {
  let userName = document.getElementById('name-input').value;
  teamList.push(userName);
  console.log(teamList);
  createMember(userName);
  if (teamList.length < 3) {
    numberPeople.innerHTML = `${3 - teamList.length}`;
  }
  if (teamList.length >= 3) {
    submitTeam.classList.remove('not-ready');
    submitTeam.classList.add('ready');
    submitTeam.innerHTML = "Team's ready!";
    submitName.remove();
    nameInput.remove();
  }
});

function createMember(nameinput) {
  const name = document.createElement('h2');
  name.innerHTML = ` - ${nameinput}`;
  name.classList.add('member');
  teamChosen.append(name);
}

submitTeam.addEventListener('click', function () {
  modal.style.display = 'block';
});
