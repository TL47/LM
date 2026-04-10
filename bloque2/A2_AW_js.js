let multiplos = () => {
    for (i = 8; i < 500; i = i + 8) {
        if (i == 8) {
            document.write(i);
        } else {
            document.write('-' + i);
        }
    }
    return "<br> Los múltiplos son más de 500"
}
document.write(multiplos())