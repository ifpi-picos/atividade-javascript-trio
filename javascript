 // Função para ligar/desligar a lâmpada quando clicada
    document.getElementById("lampada-01").addEventListener("click", function() {
      // Trocar a imagem da lâmpada entre acesa e apagada
      if (this.src.includes("lampada-on.jpg")) {
        this.src = "lampada.jpg"; // Lâmpada apagada
      } else {
        this.src = "lampada-on.jpg"; // Lâmpada acesa
      }
    });

    // Função para ligar/desligar a lâmpada quando o mouse passar sobre ela
    document.getElementById("lampada-02").addEventListener("mouseover", function() {
      this.src = "lampada-on.jpg"; // Lâmpada acesa
    });

    document.getElementById("lampada-02").addEventListener("mouseout", function() {
      this.src = "lampada.jpg"; // Lâmpada apagada
    });