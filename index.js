document.getElementById('test-words').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      function testWords() {
        const words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'le', 'la', 'de', 'du', 'un', 'une', 'mon', 'ma', 'me', 'moi', 'ton', 'ta', 'te', 'toi', 'son', 'sa', 'se', 'soi', 'notre', 'nos', 'votre', 'vos', 'leur', 'ce', 'cet', 'cette', 'ceux', 'celui', 'celle', 'cela', 'ca',
        'mais', 'ou', 'et', 'donc', 'car', 'or', 'ni', 'puis', 'quoique', 'que', 'qui', 'quoi', 'qu', 'dont', 'comment', 'pourquoi', 'combien', 'quand', 'si', 'tant', 'tandis', 'lorsque', 'jusqu', 'pendant', 'avant', 'apres', 'depuis', 'hors', 'sans', 'par', 'parce', 'avec', 'vers', 'chez', 'sous', 'sur', 'dans', 'en', 'au', 'aux',
        'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'lui', 'eux', 'pas', 'plus', 'moins', 'trop', 'jamais', 'assez', 'bien', 'mal', 'tout', 'rien', 'beaucoup', 'peu', 'aucun', 'quelque', 'certains', 'quelqu', 'tous', 'toute',
        'vie', 'mort', 'amour', 'haine', 'peur', 'joie', 'colere', 'tristesse', 'envie', 'desir', 'espoir', 'doute', 'peine', 'souffrance', 'malheur', 'bonheur', 'bon', 'malade',
        'homme', 'femme', 'enfant', 'pere', 'mere', 'fils', 'fille', 'frere', 'soeur',
        'suis', 'est', 'sommes', 'etes', 'sont', 'ai', 'avons', 'avez', 'ont',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'dire', 'dis', 'dit', 'faire', 'fais', 'fait', 'pouvoir', 'peux', 'peut', 'savoir', 'sais', 'sait', 'vouloir', 'veux', 'veut', 'devoir', 'dois', 'doit', 'penser', 'pense', 'voir', 'vois', 'voit', 'aller', 'vais', 'va', 'venir', 'viens', 'vient', 'mettre', 'met', 'prendre', 'prend', 'laisser', 'laisse'];

        // verify duplicates
        //console.log(words.sort((a, b) => a.localeCompare(b)));

        const input = document.getElementById('word');
        const button = document.getElementById('word-button');

        words.forEach((word, i) => {
          setTimeout(() => {
            input.value = word;
            button.click();
          }, 100 * i);
        });
      }

      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: testWords,
      });
  });
});