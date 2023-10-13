export default class User {
  constructor(name, bio, followers, following, profile_picture) {
    this.name = name;
    this.bio = bio;
    this.items = [];
    this.currentItemsIndex = 0;
    this.followers = followers;
    this.following = following;
    this.profile_picture = profile_picture
  }

  getCurrentItem(){
    if((this.items.length) > 0){
      return this.items[this.currentItemsIndex];
    } else {
      return "";
    }
  }

  getNextItem() {
    if (this.items.length != 0) {
      result = this.items[this.currentItemsIndex];
      this.currentItemsIndex++;
      return result;
    }
  }

  getProfile() {
    return {
      name: this.name,
      bio: this.bio,
      items: this.items,
      followers: this.followers,
      following: this.following
    };
  }

  addItem(item) {
    this.items.push(item);
  }

  addFollower(follower) {
    this.followers.push(follower);
  }

  addFollowing(follower) {
    this.following.push(follower);
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Bio: ${this.bio}`);
    console.log(`Items: ${this.items}`);
    console.log(`Followers: ${this.followers}`);
    console.log(`Following: ${this.following}`);
  }
}

