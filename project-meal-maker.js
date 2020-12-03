const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {

  },
  set appetizers(appetizersIn) {

  },
  get mains() {

  },
  set mains(appetizersIn) {

  },
  get desserts() {

  },
  set desserts(appetizersIn) {

  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
 
  }
};
