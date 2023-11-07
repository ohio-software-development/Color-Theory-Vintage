import { getDoc, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

export default class User {
  constructor(name="", id="", listings=[], bio="", followers=0, following=0, profile_picture=null) {
    this.listings = listings;
    this.id = id
    this.name = name;
    this.bio = bio;
    this.currentItemsIndex = 0;
    this.followers = followers;
    this.following = following;
    this.profile_picture = profile_picture
  }

  getCurrentItem(){
    if((this.listings.length) > 0){
      return this.listings[this.currentItemsIndex];
    } else {
      return "";
    }
  }

  getNextItem() {
    if (this.listings.length != 0) {
      result = this.listings[this.currentItemsIndex];
      this.currentItemsIndex++;
      return result;
    }
  }

  getProfile() {
    return {
      name: this.name,
      bio: this.bio,
      items: this.listings,
      followers: this.followers,
      following: this.following
    };
  }

  addItem(item) {
    this.listings.push(item);
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
    console.log(`Items: ${this.listings}`);
    console.log(`Followers: ${this.followers}`);
    console.log(`Following: ${this.following}`);
  }
}

