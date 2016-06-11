
var Stack = function Stack() {
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
};

module.exports = {

  Queue: function Queue() {
  // Use two `stack` instances to implement your `queue` Class
    const inbox = new Stack();
    const outbox = new Stack();
    var count = 0;
    // called to add an item to the `queue`
    this.enqueue = (value) => {
      inbox.push(value);
      count++;
    };

    // called to remove an item from the `queue`
    this.dequeue = () => {
      if (inbox.size() !== 0 || outbox.size() !== 0) {
        count--;
      }
      if (inbox.size() === 0) {
        return outbox.pop();
      }
      while (inbox.size() > 0) {
        outbox.push(inbox.pop());
      }
      return outbox.pop();
    };

    // should return the number of items in the queue
    this.size = () => count;
  },
};

