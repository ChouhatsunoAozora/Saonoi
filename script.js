document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tweetButton").addEventListener("click", tweetMessage);
});

function tweetMessage() {
    const message = "Saonoi Chouhatsu no Aozora\n#SaonoiBNK48\n#คำท้าทายที่ปลายฟ้าConceptDay1";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}
