export const wordsToAvatar = (text: string) => {
  const arr = text.split(' ');
  if (arr.length > 1) {
    return arr.map(x => x[0].toUpperCase()).join('');
  }
  return text[0].toUpperCase() + (text.length > 1 ? text[1].toUpperCase() : '');
};

export const getAge = (date: string | Date) => {
  var today = new Date();
  var birthDate = new Date(date);
  if (today < birthDate) {
    return '';
  }
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
      m = 11;
  }
  return `${age} year${age > 1 ? 's' : ''} ${m} month${m > 1 ? 's' : ''}`;
}