let month = prompt('Введіть число від 1 до 12');

switch (month) {
    case '1':
    case '2':
    case '12':
        alert('це зима');
        break;
    case '3':
    case '4':
    case '5':
        alert('це весна');
        break;
    case '6':
    case '7':
    case '8':
        alert('це весна');
        break;
    case '9':
    case '10':
    case '11':
        alert('це осінь');
        break;
    default:
        alert('Неможливо');
        break;
}