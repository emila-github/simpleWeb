module.exports = function(req, res, next) {
  var data = {
    result: 'success',
    messages: [],
    data: {"a1":
      [{
        "id": "1",
        "name": "Hot Chocolate",
        "type": "Chocolate Beverage",
        "calories": "370",
        "totalfat": "16g",
        "protein": "14g"
      }, {
        "id": "2",
        "name": "Peppermint Hot Chocolate",
        "type": "Chocolate Beverage",
        "calories": "440",
        "totalfat": "16g",
        "protein": "13g"
      }, {
        "id": "3",
        "name": "Salted Caramel Hot Chocolate",
        "type": "Chocolate Beverage",
        "calories": "450",
        "totalfat": "16g",
        "protein": "13g"
      }, {
        "id": "4",
        "name": "White Hot Chocolate",
        "type": "Chocolate Beverage",
        "calories": "420",
        "totalfat": "16g",
        "protein": "12g"
      }, {
        "id": "5",
        "name": "Caffe Americano",
        "type": "Espresso Beverage",
        "calories": "15",
        "totalfat": "0g",
        "protein": "1g"
      }, {
        "id": "6",
        "name": "Caffe Latte",
        "type": "Espresso Beverage",
        "calories": "190",
        "totalfat": "7g",
        "protein": "12g"
      }, {
        "id": "7",
        "name": "Caffe Mocha",
        "type": "Espresso Beverage",
        "calories": "330",
        "totalfat": "15g",
        "protein": "13g"
      }, {
        "id": "8",
        "name": "Cappuccino",
        "type": "Espresso Beverage",
        "calories": "120",
        "totalfat": "4g",
        "protein": "8g"
      }, {
        "id": "9",
        "name": "Caramel Brulee Latte",
        "type": "Espresso Beverage",
        "calories": "420",
        "totalfat": "9g",
        "protein": "8g"
      }, {
        "id": "10",
        "name": "Caramel Macchiato",
        "type": "Espresso Beverage",
        "calories": "240",
        "totalfat": "11g",
        "protein": "10g"
      }, {
        "id": "11",
        "name": "Peppermint Hot Chocolate",
        "type": "Espresso Beverage",
        "calories": "440",
        "totalfat": "10g",
        "protein": "13g"
      }, {
        "id": "12",
        "name": "Cinnamon Dolce Latte",
        "type": "Espresso Beverage",
        "calories": "260",
        "totalfat": "6g",
        "protein": "10g"
      }, {
        "id": "13",
        "name": "Eggnog Latte",
        "type": "Espresso Beverage",
        "calories": "460",
        "totalfat": "16g",
        "protein": "13g"
      }, {
        "id": "14",
        "name": "Espresso",
        "type": "Espresso Beverage",
        "calories": "5",
        "totalfat": "1g",
        "protein": "1g"
      }, {
        "id": "15",
        "name": "Espresso Con Panna",
        "type": "Espresso Beverage",
        "calories": "30",
        "totalfat": "1g",
        "protein": "0g"
      }, {
        "id": "16",
        "name": "Espresso Macchiato",
        "type": "Espresso Beverage",
        "calories": "100",
        "totalfat": "1g",
        "protein": "0g"
      }, {
        "id": "17",
        "name": "Flavored Latte",
        "type": "Espresso Beverage",
        "calories": "250",
        "totalfat": "6g",
        "protein": "12g"
      }, {
        "id": "18",
        "name": "Gingerbread Latte",
        "type": "Espresso Beverage",
        "calories": "320",
        "totalfat": "13g",
        "protein": "12g"
      }, {
        "id": "19",
        "name": "White Chocolate Mocha",
        "type": "Espresso Beverage",
        "calories": "470",
        "totalfat": "18g",
        "protein": "15g"
      }, {
        "id": "20",
        "name": "Skinny Peppermint Mocha",
        "type": "Espresso Beverage",
        "calories": 130,
        "totalfat": "15g",
        "protein": "13g"
      }, {
        "id": "21",
        "name": "Skinny Flavored Latte",
        "type": "Espresso Beverage",
        "calories": "120",
        "totalfat": "0g",
        "protein": "12g"
      }, {
        "id": "22",
        "name": "Pumpkin Spice Latte",
        "type": "Espresso Beverage",
        "calories": "380",
        "totalfat": "13g",
        "protein": "14g"
      }, {
        "id": "23",
        "name": "Caffe Vanilla Frappuccino",
        "type": "Frappuccino Blended Beverage",
        "calories": "310",
        "totalfat": "3g",
        "protein": "3g"
      }, {
        "id": "24",
        "name": "Caffe Vanilla Frappuccino Light",
        "type": "Frappuccino Blended Beverage",
        "calories": "180",
        "totalfat": "0g",
        "protein": "3g"
      }, {
        "id": "25",
        "name": "Caramel Brulee Frappuccino",
        "type": "Frappuccino Blended Beverage",
        "calories": "410",
        "totalfat": "13g",
        "protein": "4g"
      }, {
        "id": "26",
        "name": "Caramel Brulee Frappuccino Light",
        "type": "Frappuccino Blended Beverage",
        "calories": "190",
        "totalfat": "0g",
        "protein": "3g"
      }, {
        "id": "27",
        "name": "Eggnog Frappuccino",
        "type": "Frappuccino Blended Beverage",
        "calories": "420",
        "totalfat": "18g",
        "protein": "7g"
      }, {
        "id": "28",
        "name": "Mocha Frappuccino",
        "type": "Frappuccino Blended Beverage",
        "calories": "400",
        "totalfat": "15g",
        "protein": "5g"
      }, {
        "id": "29",
        "name": "Tazo Green Tea Creme Frappuccino",
        "type": "Frappuccino Blended Beverage",
        "calories": "430",
        "totalfat": "16g",
        "protein": "6g"
      }]
    }

  };
  data = JSON.stringify(data);
  res.end(data);
};
