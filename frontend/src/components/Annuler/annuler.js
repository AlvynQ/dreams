const fetchannul = () => {


    document.getElementById("cancel").addEventListener('click', (e) => { //evenement au click sur le bouton 
        e.preventDefault();
        document.location.href = "/ChoixPage";
    }
    )}

export default fetchannul;