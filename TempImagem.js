document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let index = 0;

    function showNextCard() {
        if (index < cards.length) {
            cards[index].style.animation = "none";
            setTimeout(() => {
                cards[index].style.animation = "fadeInOut 5s ease-in-out forwards";
                index++;
                if (index === cards.length) {
                    setTimeout(() => {
                        location.reload(); // Atualiza a página após todos os cards terem sido mostrados
                    }, 5000); // Tempo igual à duração da animação
                }
            }, 100);
        }
    }

    setInterval(showNextCard, 7000); // Mostra um card a cada 7 segundos (5s para fadeInOut e 2s para intervalo)
});