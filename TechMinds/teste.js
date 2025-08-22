findTransactions();

function findTransactions() {
  firebase.firestore()
    .collection('teste')
    .get()
    .then(snapshot => {
      const teste = snapshot.docs.map(doc => doc.data());
      addTransactionsToScreen(teste);
    })
}

function addTransactionsToScreen(teste) {
  var element = document.getElementById('element');
  element.innerHTML = teste.site;
}
