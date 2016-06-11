
module.exports = {

  Stack: function Stack() {
    var count = 0;
    const storage = [];
    this.push = (value) => {
      storage.push(value);
      count++;
    };
    this.pop = () => {
      if (count === 0) {
        return null;
      }
      return storage[--count];
    };
    this.size = () => count;
  },
};

