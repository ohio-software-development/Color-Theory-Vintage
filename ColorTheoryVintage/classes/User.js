export default class User {
  constructor(name, bio, items, followers, following) {
    this.name = name;
    this.bio = bio;
    this.items = items;
    this.currentItemsIndex = 0;
    this.followers = followers;
    this.following = following;
  }


  getNextItem() {
    if (this.items.length != 0) {
      result = this.items[this.currentItemsIndex];
      this.currentItemsIndex++;
      return result;

    }
  }
  // Getter for the user's full profile
  getProfile() {
    return {
      name: this.name,
      bio: this.bio,
      items: this.items,
      followers: this.followers,
      following: this.following
    };
  }

  // Method to add an item to the user's list of items
  addItem(item) {
    this.items.push(item);
  }

  // Method to increase the number of followers
  addFollower() {
    this.followers++;
  }

  // Method to increase the number of following
  addFollowing() {
    this.following++;
  }

  // Method to display basic user information
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Bio: ${this.bio}`);
    console.log(`Items: ${this.items}`);
    console.log(`Followers: ${this.followers}`);
    console.log(`Following: ${this.following}`);
  }
}

