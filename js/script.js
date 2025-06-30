function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  var str = 'Portifolio_Kanto'; // non-breaking space
  document.title = '';
  async function typewriteTitle() {
    for (let i = 0; i < str.length; i++) {
      document.title += str.charAt(i);
      console.log(document.title);
      await sleep(200);
    }
  }
  typewriteTitle();