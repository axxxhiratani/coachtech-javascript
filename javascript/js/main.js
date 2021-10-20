dayjs.locale('ja');





console.log(dayjs().subtract(2,'year').format('YYYY年'));
console.log(dayjs().add(2,'month').format('MM月'));
console.log(dayjs().add(2,'day').format('DD日'));
console.log(dayjs().add(2,'hour').format('HH時'));
console.log(dayjs().add(2,'minute').format('mm分'));
console.log(dayjs().add(2,'second').format('ss秒'));
console.log(dayjs().format('YYYY年MM月DD日　dddd HH:mm:ss'));


