const data2020 = [
  { name: "Personen ohne Migrationshintergrund", y: 2317},
  { name: "Personen mit Migrationshintergrund", y: 1564},
  { name: "Asien (einschließlich Türkei)", y: 496},
  { name: "EU-27", y: 389},
  { name: "Ohne Angabe & Unbestimmt", y: 307},
  { name: "Sonstiges Europa", y: 218},
  { name: "Afrika", y: 114},
  { name: "Amerika", y: 37},
];

var ohne2020 = data2020.find(({ name }) => name === "Personen ohne Migrationshintergrund");
var mit2020 = data2020.find(({ name }) => name === "Personen mit Migrationshintergrund");
var asien2020 = data2020.find(({ name }) => name === "Asien (einschließlich Türkei)");
var EU_272020 = data2020.find(({ name }) => name === "EU-27");
var ohneAngabeUnbestimmt2020 = data2020.find(({ name }) => name === "Ohne Angabe & Unbestimmt");
var sonstigesEuropa2020 = data2020.find(({ name }) => name === "Sonstiges Europa");
var afrika2020 = data2020.find(({ name }) => name === "Afrika");
var amerika2020 = data2020.find(({ name }) => name === "Amerika");

const ohneUndMit2020 = {
  name: 'Gesamtbevölkerung',
  data: [mit2020, ohne2020]
}

const ohneUndMitAusfuehrlich2020 = {
  name: 'Gesamtbevölkerung',
  data: [amerika2020, afrika2020, sonstigesEuropa2020, ohneAngabeUnbestimmt2020, EU_272020, asien2020, ohne2020]
}

const mitAusfuehrlich2020 = {
  name: 'Bevölkerung mit Migrationshintergrund',
  data: [amerika2020, afrika2020, ohneAngabeUnbestimmt2020, sonstigesEuropa2020, EU_272020, asien2020]
}

export { ohneUndMit2020, ohneUndMitAusfuehrlich2020, mitAusfuehrlich2020 }