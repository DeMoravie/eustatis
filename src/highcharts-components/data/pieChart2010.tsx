const data2010 = [
  { name: "Personen ohne Migrationshintergrund", y: 2217},
  { name: "Personen mit Migrationshintergrund", y: 1153},
  { name: "Asien (einschließlich Türkei)", y: 397},
  { name: "EU-27", y: 263},
  { name: "Sonstiges Europa", y: 222},
  { name: "Ohne Angabe & Unbestimmt", y: 167},
  { name: "Afrika", y: 72},
  { name: "Amerika", y: 32},
];

var ohne2010 = data2010.find(({ name }) => name === "Personen ohne Migrationshintergrund");
var mit2010 = data2010.find(({ name }) => name === "Personen mit Migrationshintergrund");
var asien2010 = data2010.find(({ name }) => name === "Asien (einschließlich Türkei)");
var EU_272010 = data2010.find(({ name }) => name === "EU-27");
var sonstigesEuropa2010 = data2010.find(({ name }) => name === "Sonstiges Europa");
var ohneAngabeUnbestimmt2010 = data2010.find(({ name }) => name === "Ohne Angabe & Unbestimmt");
var afrika2010 = data2010.find(({ name }) => name === "Afrika");
var amerika2010 = data2010.find(({ name }) => name === "Amerika");

const ohneUndMit2010 = {
  name: 'Gesamtbevölkerung',
  data: [mit2010, ohne2010]
}

const ohneUndMitAusfuehrlich2010 = {
  name: 'Gesamtbevölkerung',
  data: [amerika2010, afrika2010, sonstigesEuropa2010, ohneAngabeUnbestimmt2010, EU_272010, asien2010, ohne2010]
}

const mitAusfuehrlich2010 = {
  name: 'Bevölkerung mit Migrationshintergrund',
  data: [amerika2010, afrika2010, ohneAngabeUnbestimmt2010, sonstigesEuropa2010, EU_272010, asien2010]
}

export { ohneUndMit2010, ohneUndMitAusfuehrlich2010, mitAusfuehrlich2010 }