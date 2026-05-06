function abrirLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-descricao').textContent = img.dataset.descricao;
    document.getElementById('lightbox').classList.add('ativo');
}

function fecharLightbox() {
    document.getElementById('lightbox').classList.remove('ativo');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') fecharLightbox();
});