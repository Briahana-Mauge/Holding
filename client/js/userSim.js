/*
User Simulator Script | HOLDING Web App
GROUP 3: Douglas MacKrell, Briahana Maugé, Joseph P. Pasaoa, Kathy Puma
*/


const whoIsUser = () => {
  const urlParams = (new URL(document.location)).searchParams;
  return urlParams.get('user');
}

const initUserSim = () => {
  let makingUserSim = document.createElement('div');
    makingUserSim.id = "userSimControl";
  let makingUSLabel = document.createElement('label');
    makingUSLabel.for = "userNum";
    makingUSLabel.innerHTML = "<b>user_id</b> sim";
  let makingUSInput = document.createElement('input');
    makingUSInput.type = "text";
    makingUSInput.id = "userNum";
    makingUSInput.name = "userNum";
    makingUSInput.value = whoIsUser() || 4;

  makingUserSim.append(makingUSLabel, makingUSInput);
  document.body.appendChild(makingUserSim);
}


/* POST DOM LOAD EXEC */
document.addEventListener("DOMContentLoaded", () => {
    initUserSim();
});


/* html reference
<div id="userSimControl">
<label for="userNum"></label>
<input type="text" id="userNum" name="userNum" value="1" />
</div>
*/
