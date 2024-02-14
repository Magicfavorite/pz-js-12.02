// Создание объекта-прямоугольника
var rectangle = {
    leftTop: { x: 0, y: 0 },
    rightBottom: { x: 10, y: 5 }
  };
  
  // Функция вывода информации о прямоугольнике
  function printRectangleInfo(rectangle) {
    console.log("Координаты левой верхней точки:", rectangle.leftTop);
    console.log("Координаты правой нижней точки:", rectangle.rightBottom);
  }
  
  // Функция для получения ширины прямоугольника
  function getRectangleWidth(rectangle) {
    return rectangle.rightBottom.x - rectangle.leftTop.x;
  }
  
  // Функция для получения высоты прямоугольника
  function getRectangleHeight(rectangle) {
    return rectangle.rightBottom.y - rectangle.leftTop.y;
  }
  
  // Функция для получения площади прямоугольника
  function getRectangleArea(rectangle) {
    var width = getRectangleWidth(rectangle);
    var height = getRectangleHeight(rectangle);
    return width * height;
  }
  
  // Функция для получения периметра прямоугольника
  function getRectanglePerimeter(rectangle) {
    var width = getRectangleWidth(rectangle);
    var height = getRectangleHeight(rectangle);
    return 2 * (width + height);
  }
  
  // Функция для изменения ширины прямоугольника
  function changeRectangleWidth(rectangle, amount) {
    rectangle.rightBottom.x += amount;
  }
  

  console.log("Ширина прямоугольника:", getRectangleWidth(rectangle));
  console.log("Высота прямоугольника:", getRectangleHeight(rectangle));
  console.log("Площадь прямоугольника:", getRectangleArea(rectangle));
  console.log("Периметр прямоугольника:", getRectanglePerimeter(rectangle));
  
  changeRectangleWidth(rectangle, 5);
  changeRectangleHeight(rectangle, 3);
  console.log("Измененные размеры прямоугольника:");
  printRectangleInfo(rectangle);
  console.log("Новая площадь прямоугольника:", getRectangleArea(rectangle));
  console.log("Новый периметр прямоугольника:", getRectanglePerimeter(rectangle));