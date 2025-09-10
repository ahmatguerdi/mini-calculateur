// Marge = ((Prix de vente − Prix de revient) / Prix de vente) × 100
    function miniCalculateur() {
      const mom = parseInt(document.getElementById('mom').value);
      const momy = parseInt(document.getElementById('momy').value);
      let vente = mom;
      let revient = momy;
      document.getElementById('resultat').textContent = `La marge est: ${((vente - revient) / revient) * 100}% soit ${((vente - revient) / revient)}`;
    }
